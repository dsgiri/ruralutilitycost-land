import { TOOLS } from '../data/tools';
import { ViewState } from '../types';
import { ArrowRight, Heart } from 'lucide-react';

interface DashboardProps {
  setView: (view: ViewState) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export default function Dashboard({ setView, favorites, toggleFavorite }: DashboardProps) {
  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-500 h-full flex flex-col">
      <div className="mb-6 flex-shrink-0">
        <h1 className="text-2xl font-bold text-[#1A1A1A] tracking-tight">Compliance Ledger</h1>
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
                  onClick={() => toggleFavorite(tool.id)}
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  className={`transition-colors ${isFavorite ? 'text-red-500' : 'text-[#7D6B5D] hover:text-red-500'}`}
                >
                  <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
                </button>
              </div>
              
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{tool.title}</h3>
              <p className="text-sm text-[#7D6B5D] mb-6 flex-1">
                {tool.description}
              </p>
              
              <div className="mt-auto border-t border-[#E5E2DD] pt-4 flex items-center justify-between">
                <div className="text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider">
                  Output: <span className="text-[#2D4A3E]">{tool.primaryOutcome}</span>
                </div>
                <button 
                  onClick={() => setView(tool.view as ViewState)}
                  className="flex items-center text-xs font-bold text-[#2A5A7A] hover:bg-[#EBF1F5] px-3 py-1.5 rounded-full transition-colors -mr-2"
                >
                  Launch
                  <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
        
        <div className="md:col-span-12 bg-[#2D4A3E] rounded-xl px-6 py-5 shadow-sm flex flex-col md:flex-row items-center justify-between mt-2">
          <div>
            <h2 className="text-sm font-bold text-white mb-1">Inspector Mode & Verification Status</h2>
            <p className="text-white/70 max-w-2xl text-[11px]">
              All models represent preliminary estimates. For formalized records, please consult the verification chain and refer to local municipal data for exact MCL constraints and easement deeds.
            </p>
          </div>
          <button 
            onClick={() => setView('Appraisal')}
            className="mt-4 md:mt-0 flex-shrink-0 bg-white text-[#2D4A3E] hover:bg-gray-100 font-bold px-4 py-2 rounded-lg transition-colors text-xs shadow-sm"
          >
            View Verification Chain
          </button>
        </div>
      </div>
    </div>
  );
}
