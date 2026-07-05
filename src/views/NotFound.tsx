import { Home, AlertTriangle } from 'lucide-react';
import { ViewState } from '../types';

interface NotFoundProps {
  setView: (view: ViewState) => void;
}

export default function NotFound({ setView }: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 animate-in fade-in duration-500">
      <div className="bg-[#FDF4F4] p-4 rounded-full mb-6">
        <AlertTriangle className="w-12 h-12 text-[#7D2424]" aria-hidden="true" />
      </div>
      <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-[#4A443F] mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button
        onClick={() => setView('Home')}
        className="flex items-center px-6 py-3 min-h-[48px] bg-[#2A5A7A] text-white font-bold rounded-lg hover:bg-[#1f425a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] focus-visible:ring-offset-2"
      >
        <Home className="w-5 h-5 mr-2" aria-hidden="true" />
        Return to Homepage
      </button>
    </div>
  );
}
