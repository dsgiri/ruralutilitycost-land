import { FileText } from 'lucide-react';

export default function ContentPage({ view }: { view: string }) {
  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-500 py-8">
      <div className="mb-8 border-b border-slate-200 pb-5">
        <h2 className="text-3xl font-display font-semibold text-slate-900 flex items-center">
          <FileText className="w-8 h-8 mr-4 text-blue-600" />
          {view} - Rural Utility Cost
        </h2>
      </div>

      <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed">
        {view === 'About' && (
          <p>
            The Land Compliance Ledger, an operational arm of the Rural Utility Cost network, serves to standardize preliminary land valuation, utility overhead modeling, and lease structuring. Our goal is to provide reliable, deterministic models for verifying rural property assumptions before committing to formal audits or appraisals.
          </p>
        )}
        
        {view === 'Legal' && (
          <div>
            <p className="font-medium text-rose-800 bg-rose-50 p-4 border border-rose-200 rounded-md mb-6">
              Disclaimer: All computational estimates are informational only. Users must verify local market data and execute independent reviews utilizing certified personnel.
            </p>
            <p>
              This computational software does not replace legal, accounting, tax, or formal appraisal certifications. Environmental constraints, easement legalities, and utility availability must be confirmed directly with local regulatory entities.
            </p>
          </div>
        )}
        
        {view === 'Contact' && (
          <p>
            For engineering audits or to submit validated local benchmark data to our verification chain, please communicate via the official Rural Utility Cost liaison channels.
          </p>
        )}
        
        {view === 'License' && (
          <p>
            This application is proprietary to Rural Utility Cost and operates strictly within authorized compliance environments.
          </p>
        )}
      </div>
    </div>
  );
}
