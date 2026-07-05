import { useState, useEffect } from 'react';
import { ViewState } from './types';
import { NAV_ITEMS, FOOTER_LINKS } from './data/navigation';
import { Map, Zap, Settings, Github, Menu, X, Landmark, Heart } from 'lucide-react';
import Dashboard from './views/Dashboard';
import LandValueEstimator from './views/LandValueEstimator';
import ParcelComparison from './views/ParcelComparison';
import UtilityImpact from './views/UtilityImpact';
import LeaseCalculator from './views/LeaseCalculator';
import AppraisalPrep from './views/AppraisalPrep';
import Favorites from './views/Favorites';
import ContentPage from './views/ContentPage';
import NotFound from './views/NotFound';

// Helper for GA tracking
const trackEvent = (action: string, category: string, label: string) => {
  if (typeof (window as any) !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.split('/').filter(Boolean)[0];
      if (path) {
        const allValidViews = [...NAV_ITEMS.map(i => i.id), ...FOOTER_LINKS.map(i => i.id)];
        const match = allValidViews.find(v => v.toLowerCase() === path.toLowerCase());
        if (match) return match as ViewState;
        return 'NotFound' as ViewState;
      }
    }
    return 'Home';
  });
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    let scrollTracked = false;

    const handleScroll = () => {
      if (scrollTracked) return;
      
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition >= documentHeight * 0.5) {
        if (typeof (window as any) !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'scroll', { percent: 50 });
        }
        scrollTracked = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const saved = localStorage.getItem('land_tools_favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse favorites');
      }
    }
    
    // Check for cookie consent
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowCookieConsent(true);
      }
    }

    const handlePopState = () => {
      const path = window.location.pathname.split('/').filter(Boolean)[0];
      if (path) {
        const allValidViews = [...NAV_ITEMS.map(i => i.id), ...FOOTER_LINKS.map(i => i.id)];
        const match = allValidViews.find(v => v.toLowerCase() === path.toLowerCase());
        if (match) setCurrentView(match as ViewState);
        else setCurrentView('NotFound');
      } else {
        setCurrentView('Home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
    trackEvent('consent', 'cookie', 'accepted');
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowCookieConsent(false);
    trackEvent('consent', 'cookie', 'declined');
  };

  const toggleFavorite = (toolId: string) => {
    let next: string[];
    if (favorites.includes(toolId)) {
      next = favorites.filter(id => id !== toolId);
    } else {
      next = [...favorites, toolId];
    }
    setFavorites(next);
    localStorage.setItem('land_tools_favorites', JSON.stringify(next));
  };

  const renderView = () => {
    switch (currentView) {
      case 'Home': return <Dashboard setView={handleNavClick} favorites={favorites} toggleFavorite={toggleFavorite} />;
      case 'Estimate': return <LandValueEstimator />;
      case 'Compare': return <ParcelComparison />;
      case 'Utilities': return <UtilityImpact />;
      case 'Lease': return <LeaseCalculator />;
      case 'Appraisal': return <AppraisalPrep />;
      case 'Favorites': return <Favorites setView={handleNavClick} favorites={favorites} toggleFavorite={toggleFavorite} />;
      case 'About':
      case 'Contact':
      case 'Legal':
      case 'License':
        return <ContentPage view={currentView} />;
      default: return <NotFound setView={handleNavClick} />;
    }
  };

  const handleNavClick = (id: ViewState) => {
    setCurrentView(id);
    setIsMobileMenuOpen(false);
    
    // Update URL
    const url = id === 'Home' ? '/' : `/${id.toLowerCase()}`;
    window.history.pushState({}, '', url);

    trackEvent('navigate', 'menu', id);
    if (typeof (window as any) !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', { page_path: url });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navClass = (id: string) => 
    `flex items-center px-4 py-2.5 text-sm font-medium transition-colors border-l-2 ${
      currentView === id 
        ? 'border-blue-600 bg-blue-50 text-blue-800' 
        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`;

  const mobileNavClass = (id: string) =>
    `flex items-center px-4 py-3 text-base font-medium transition-colors ${
      currentView === id
        ? 'bg-blue-50 text-blue-800'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`;

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2D2A26] font-sans flex flex-col overflow-hidden">
      <header className="bg-white border-b border-[#E5E2DD] px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setCurrentView('Home')}
        >
          <div className="bg-[#2A5A7A] w-8 h-8 rounded flex items-center justify-center">
            <Landmark className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight uppercase leading-none">Rural Ops Tools</h1>
            <p className="text-[#7D6B5D] text-[10px] font-semibold uppercase tracking-widest mt-0.5">Land Hub</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 overflow-x-auto" aria-label="Main Navigation">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as ViewState)}
              aria-current={currentView === item.id ? 'page' : undefined}
              className={`text-xs font-medium py-1 whitespace-nowrap min-h-[48px] flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#2A5A7A] focus-visible:ring-offset-2 transition-colors ${
                currentView === item.id
                  ? 'text-[#2A5A7A] font-bold border-b-2 border-[#2A5A7A]'
                  : 'text-[#7D6B5D] hover:text-[#2A5A7A] border-b-2 border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-4 w-px bg-[#E5E2DD] mx-2 hidden lg:block" aria-hidden="true"></div>
          {FOOTER_LINKS.filter(l => l.id === 'Favorites').map(item => (
             <button
               key={item.id}
               onClick={() => handleNavClick(item.id as ViewState)}
               aria-label="Favorites"
               className={`p-2 rounded-full min-h-[48px] min-w-[48px] flex justify-center items-center transition-colors focus-visible:ring-2 focus-visible:ring-[#2A5A7A] focus-visible:ring-offset-2 ${
                 currentView === item.id ? 'bg-[#EBF1F5] text-[#2A5A7A]' : 'hover:bg-gray-100 text-[#7D6B5D]'
               }`}
             >
                <Heart className="w-5 h-5" aria-hidden="true" />
             </button>
          ))}
        </nav>

        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-[#7D6B5D] hover:bg-gray-100 min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2A5A7A]/50"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-b border-[#E5E2DD] shadow-sm relative z-40">
          <nav className="pt-2 pb-3 space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as ViewState)}
                aria-current={currentView === item.id ? 'page' : undefined}
                className={`w-full text-left flex items-center px-4 py-3 min-h-[48px] text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2A5A7A] ${
                  currentView === item.id
                    ? 'bg-[#EBF1F5] text-[#2A5A7A] font-bold'
                    : 'text-[#7D6B5D] hover:bg-gray-50 hover:text-[#2A5A7A]'
                }`}
              >
                <item.icon className="mr-3 h-4 w-4" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        <main id="main-content" className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 h-full min-h-[calc(100vh-200px)]">
          {renderView()}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E2DD] px-6 py-5 flex flex-col md:flex-row items-center justify-between flex-shrink-0 gap-4" role="contentinfo">
        <nav className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold text-[#7D6B5D] uppercase tracking-widest" aria-label="Footer Navigation">
          {FOOTER_LINKS.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as ViewState)}
              className="hover:text-[#2A5A7A] transition-colors min-h-[48px] flex items-center focus-visible:ring-2 focus-visible:ring-[#2A5A7A]"
            >
              {item.label}
            </button>
          ))}
          <a href="#" className="hover:text-[#2A5A7A] flex items-center transition-colors min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#2A5A7A]">
            <Github className="w-3.5 h-3.5 mr-1" aria-hidden="true" /> Source
          </a>
        </nav>
        <div className="text-[10px] italic text-[#7D6B5D] text-center md:text-right mt-4 md:mt-0">
          Part of the Rural Ops Tools Ecosystem • &copy; {new Date().getFullYear()}
        </div>
      </footer>

      {/* GDPR Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E2DD] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6" role="dialog" aria-labelledby="cookie-banner-title">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h2 id="cookie-banner-title" className="text-sm font-bold text-[#1A1A1A] mb-1">Privacy & Cookie Settings</h2>
              <p className="text-xs text-[#7D6B5D]">
                We use cookies and similar technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. By clicking "Accept All", you agree to the storing of cookies on your device.
              </p>
            </div>
            <div className="flex flex-shrink-0 gap-3 w-full md:w-auto">
              <button 
                onClick={declineCookies}
                className="flex-1 md:flex-none px-4 py-2 min-h-[48px] text-xs font-bold text-[#7D6B5D] bg-[#F9F8F6] border border-[#E5E2DD] rounded-lg hover:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#2A5A7A] focus-visible:ring-offset-2"
              >
                Decline
              </button>
              <button 
                onClick={acceptCookies}
                className="flex-1 md:flex-none px-6 py-2 min-h-[48px] text-xs font-bold text-white bg-[#2A5A7A] rounded-lg hover:bg-[#1f425a] transition-colors focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

