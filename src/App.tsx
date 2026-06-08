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

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('Home');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('land_tools_favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse favorites');
      }
    }
  }, []);

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
      case 'Home': return <Dashboard setView={setCurrentView} favorites={favorites} toggleFavorite={toggleFavorite} />;
      case 'Estimate': return <LandValueEstimator />;
      case 'Compare': return <ParcelComparison />;
      case 'Utilities': return <UtilityImpact />;
      case 'Lease': return <LeaseCalculator />;
      case 'Appraisal': return <AppraisalPrep />;
      case 'Favorites': return <Favorites setView={setCurrentView} favorites={favorites} toggleFavorite={toggleFavorite} />;
      case 'About':
      case 'Contact':
      case 'Legal':
      case 'License':
        return <ContentPage view={currentView} />;
      default: return <Dashboard setView={setCurrentView} favorites={favorites} toggleFavorite={toggleFavorite} />;
    }
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
            <h1 className="text-sm font-bold tracking-tight uppercase leading-none">Rural Utility Cost</h1>
            <p className="text-[#7D6B5D] text-[10px] font-semibold uppercase tracking-widest mt-0.5">Land Hub</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 overflow-x-auto">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as ViewState)}
              className={`text-xs font-medium py-1 whitespace-nowrap outline-none transition-colors ${
                currentView === item.id
                  ? 'text-[#2A5A7A] font-bold border-b-2 border-[#2A5A7A]'
                  : 'text-[#7D6B5D] hover:text-[#2A5A7A] border-b-2 border-transparent'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="h-4 w-px bg-[#E5E2DD] mx-2 hidden lg:block"></div>
          {FOOTER_LINKS.filter(l => l.id === 'Favorites').map(item => (
             <button
               key={item.id}
               onClick={() => setCurrentView(item.id as ViewState)}
               className={`p-1.5 rounded-full transition-colors ${
                 currentView === item.id ? 'bg-[#EBF1F5] text-[#2A5A7A]' : 'hover:bg-gray-100 text-[#7D6B5D]'
               }`}
             >
                <Heart className="w-5 h-5" />
             </button>
          ))}
        </nav>

        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-[#7D6B5D] hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2A5A7A]/50"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E2DD] shadow-sm relative z-40">
          <div className="pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id as ViewState);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left flex items-center px-4 py-3 text-sm font-medium transition-colors ${
                  currentView === item.id
                    ? 'bg-[#EBF1F5] text-[#2A5A7A] font-bold'
                    : 'text-[#7D6B5D] hover:bg-gray-50 hover:text-[#2A5A7A]'
                }`}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto">
        <main className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 h-full">
          {renderView()}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E2DD] px-6 py-4 flex flex-col md:flex-row items-center justify-between flex-shrink-0">
        <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6 text-[10px] font-bold text-[#7D6B5D] uppercase tracking-widest mb-3 md:mb-0">
          {FOOTER_LINKS.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as ViewState)}
              className="hover:text-[#2A5A7A] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a href="#" className="hover:text-[#2A5A7A] flex items-center transition-colors">
            <Github className="w-3.5 h-3.5 mr-1" /> Source
          </a>
        </div>
        <div className="text-[10px] italic text-[#7D6B5D] text-center md:text-right">
          Part of the Rural Utility Cost Ecosystem • &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

