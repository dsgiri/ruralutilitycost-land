import { TOOLS } from '../data/tools';
import { ViewState } from '../types';
import { ArrowRight, Heart } from 'lucide-react';

interface DashboardProps {
  setView: (view: ViewState) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export default function Dashboard({ setView, favorites, toggleFavorite }: DashboardProps) {
  // Helper for GA tracking
  const trackAction = (action: string, label: string) => {
    if (typeof (window as any) !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'click', {
        event_category: action,
        event_label: label,
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-500 h-full flex flex-col">
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">Compliance Ledger</h2>
        <p className="mt-1 text-[#7D6B5D] max-w-2xl text-sm">
          Rural land verification dashboard. Centralized utilities, valuation benchmarks, and regulatory compliance modeling for acreage and property planning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr gap-4 pb-6">
        {TOOLS.map((tool, index) => {
          const isFavorite = favorites.includes(tool.id);
          const colSpanClass = index < 2 ? 'md:col-span-6' : 'md:col-span-4';
          
          return (
            <div key={tool.id} className={`bg-white border border-[#E5E2DD] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative flex flex-col ${colSpanClass}`}>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">
                  {tool.category}
                </span>
                <button 
                  onClick={() => {
                    toggleFavorite(tool.id);
                    trackAction('favorite_toggle', tool.id);
                  }}
                  aria-label={isFavorite ? `Remove ${tool.title} from favorites` : `Add ${tool.title} to favorites`}
                  className={`min-h-[48px] min-w-[48px] flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-[#2D4A3E] rounded-full ${isFavorite ? 'text-red-500' : 'text-[#7D6B5D] hover:text-red-500'}`}
                >
                  <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} aria-hidden="true" />
                </button>
              </div>
              
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{tool.title}</h3>
              <p className="text-sm text-[#7D6B5D] mb-6 flex-1">
                {tool.description}
              </p>
              
              <div className="mt-auto border-t border-[#E5E2DD] pt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider">
                  Output: <span className="text-[#2D4A3E]">{tool.primaryOutcome}</span>
                </div>
                <button 
                  onClick={() => {
                    setView(tool.view as ViewState);
                    trackAction('launch_tool', tool.id);
                  }}
                  className="flex items-center text-xs font-bold text-[#2A5A7A] hover:bg-[#EBF1F5] px-4 py-2 min-h-[48px] rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-[#2A5A7A]"
                  aria-label={`Launch ${tool.title} tool`}
                >
                  Launch
                  <ArrowRight className="ml-1.5 w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
        
      <div className="md:col-span-12 bg-[#2D4A3E] rounded-xl px-6 py-6 shadow-sm flex flex-col md:flex-row items-center gap-6 justify-between mt-2">
        <div className="flex-1">
          <h3 className="text-sm font-bold text-white mb-2">Inspector Mode & Verification Status</h3>
          <p className="text-white/70 max-w-2xl text-[11px] leading-relaxed">
            All models represent preliminary estimates. For formalized records, please consult the verification chain and refer to local municipal data for exact MCL constraints and easement deeds.
          </p>
        </div>
        <button 
          onClick={() => {
            setView('Appraisal');
            trackAction('launch_tool', 'appraisal_verification');
          }}
          className="w-full md:w-auto flex-shrink-0 bg-white text-[#2D4A3E] hover:bg-gray-100 font-bold px-6 py-3 min-h-[48px] rounded-lg transition-colors text-xs shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-[#2D4A3E]"
        >
          View Verification Chain
        </button>
      </div>
    </div>
  );
}
