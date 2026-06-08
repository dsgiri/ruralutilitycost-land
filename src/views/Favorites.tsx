import { Heart, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';
import { TOOLS } from '../data/tools';

interface FavoritesProps {
  setView: (view: ViewState) => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export default function Favorites({ setView, favorites, toggleFavorite }: FavoritesProps) {
  const favoriteTools = TOOLS.filter(t => favorites.includes(t.id));

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl text-[#1A1A1A]">
       <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Quick Access</span>
          <h2 className="text-xl font-bold mt-2">Saved Validation Modules</h2>
          <p className="mt-1 text-sm text-[#7D6B5D]">Rapid access to frequently utilized compliance and estimation mechanics.</p>
        </div>
        <Heart className="w-8 h-8 text-[#2A5A7A] opacity-20" />
      </div>

      {favoriteTools.length === 0 ? (
        <div className="text-center py-20 bg-[#F9F8F6] border border-[#E5E2DD] border-dashed rounded-xl">
          <Heart className="w-10 h-10 text-[#E5E2DD] mx-auto mb-3" />
          <h3 className="text-sm font-bold text-[#1A1A1A] mb-1">No saved modules</h3>
          <p className="text-[#7D6B5D] text-xs max-w-sm mx-auto">Return to the dashboard to flag active tools for immediate recall.</p>
          <button 
            onClick={() => setView('Home')}
            className="mt-6 bg-white border border-[#E5E2DD] text-[#2A5A7A] font-bold px-4 py-2 rounded-lg text-xs hover:bg-[#F2F4F7] transition-colors shadow-sm"
          >
            Access Dashboard
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteTools.map((tool) => (
            <div key={tool.id} className="bg-white border border-[#E5E2DD] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">
                  {tool.category}
                </span>
                <button 
                  onClick={() => toggleFavorite(tool.id)}
                  aria-label="Remove from favorites"
                  className="transition-colors text-red-500"
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
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
          ))}
        </div>
      )}
    </div>
  );
}
