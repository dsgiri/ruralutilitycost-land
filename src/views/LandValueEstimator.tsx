import { useState } from 'react';
import { Calculator, HelpCircle, FileText, AlertTriangle } from 'lucide-react';

export default function LandValueEstimator() {
  const [acreage, setAcreage] = useState<number>(100);
  const [basePrice, setBasePrice] = useState<number>(5000);
  const [qualityFactor, setQualityFactor] = useState<number>(1);
  const [roadFactor, setRoadFactor] = useState<number>(1);

  const estimatedValue = acreage * basePrice * qualityFactor * roadFactor;

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl text-[#1A1A1A] mx-auto">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Valuation Tool</span>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-[#1A1A1A]">Land Value Estimator</h1>
          <p className="mt-2 text-sm md:text-base text-[#7D6B5D] max-w-2xl">Compute baseline market projections based on acreage and standard modifiers.</p>
        </div>
        <Calculator className="w-10 h-10 md:w-12 md:h-12 text-[#2A5A7A] opacity-20 hidden sm:block" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        <div className="lg:col-span-7 bg-white p-5 md:p-6 rounded-xl border border-[#E5E2DD] shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="acreage-input" className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider">Total Acreage</label>
              <input 
                id="acreage-input"
                type="number" 
                value={acreage} 
                onChange={e => setAcreage(Number(e.target.value))} 
                className="w-full text-base md:text-sm border-b border-[#E5E2DD] py-3 md:py-2 focus:border-[#2A5A7A] focus:ring-0 outline-none transition-colors" 
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="price-input" className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider">Benchmark ($/Acre)</label>
              <input 
                id="price-input"
                type="number" 
                value={basePrice} 
                onChange={e => setBasePrice(Number(e.target.value))} 
                className="w-full text-base md:text-sm border-b border-[#E5E2DD] py-3 md:py-2 focus:border-[#2A5A7A] focus:ring-0 outline-none transition-colors" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-3">Soil/Land Quality</label>
            <div className="grid grid-cols-3 gap-2">
              {[0.8, 1, 1.2].map(score => (
                <button 
                  key={score}
                  onClick={() => setQualityFactor(score)}
                  aria-pressed={qualityFactor === score}
                  className={`py-3 min-h-[48px] text-xs font-bold rounded border transition-colors focus-visible:ring-2 focus-visible:ring-[#2A5A7A] focus-visible:ring-offset-1 ${qualityFactor === score ? 'bg-[#EBF1F5] border-[#2A5A7A] text-[#2A5A7A]' : 'bg-[#F9F8F6] border-[#E5E2DD] text-[#7D6B5D] hover:bg-white'}`}
                >
                  {score === 0.8 ? 'Poor' : score === 1 ? 'Average' : 'Prime'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-3">Access Verification</label>
            <div className="grid grid-cols-3 gap-2">
              {[0.7, 1, 1.15].map(score => (
                <button 
                  key={score}
                  onClick={() => setRoadFactor(score)}
                  aria-pressed={roadFactor === score}
                  className={`py-3 min-h-[48px] text-xs font-bold rounded border transition-colors focus-visible:ring-2 focus-visible:ring-[#2A5A7A] focus-visible:ring-offset-1 ${roadFactor === score ? 'bg-[#EBF1F5] border-[#2A5A7A] text-[#2A5A7A]' : 'bg-[#F9F8F6] border-[#E5E2DD] text-[#7D6B5D] hover:bg-white'}`}
                >
                  {score === 0.7 ? 'Landlocked' : score === 1 ? 'Dirt/Gravel' : 'Paved'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="p-6 bg-[#F9F8F6] rounded-xl border border-[#E5E2DD] space-y-4 flex-1 shadow-inner relative overflow-hidden">
            <h3 className="text-[11px] font-bold text-[#7D6B5D] uppercase mb-5 tracking-wider">Adjustment Factors</h3>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-[#4B4B4B]">Base Value</span>
              <span className="font-bold">${(acreage * basePrice).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-[#4B4B4B]">Quality Coefficient</span>
              <span className={`font-bold ${qualityFactor < 1 ? 'text-red-600' : qualityFactor > 1 ? 'text-green-600' : 'text-[#7D6B5D]'}`}>{qualityFactor}x</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-[#4B4B4B]">Access Coefficient</span>
              <span className={`font-bold ${roadFactor < 1 ? 'text-red-600' : roadFactor > 1 ? 'text-green-600' : 'text-[#7D6B5D]'}`}>{roadFactor}x</span>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#E5E2DD] flex flex-col items-center justify-center relative z-10">
              <div className="text-[10px] text-[#7D6B5D] uppercase font-bold tracking-widest">Estimated Total Value</div>
              <div className="text-4xl md:text-5xl font-bold text-[#2D4A3E] mt-2 tracking-tight">
                ${estimatedValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <section className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E2DD] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-[#2A5A7A]" aria-hidden="true" />
            <h2 className="text-lg font-bold text-[#1A1A1A]">Logic & Formulas</h2>
          </div>
          <div className="prose prose-sm max-w-none text-[#4A443F]">
            <p>
              This estimator calculates the final land value by taking the base market value and applying consecutive multipliers based on soil quality and road access.
            </p>
            <div className="bg-[#F9F8F6] p-4 rounded-lg my-4 font-mono text-xs md:text-sm text-[#2A5A7A] border border-[#E5E2DD]">
              Estimated Value = (Total Acreage × Benchmark $/Acre) × Quality Factor × Access Factor
            </div>
            <ul className="list-disc pl-5 space-y-1 mt-4">
              <li><strong>Quality Factor:</strong> Multipliers range from 0.8x for poor conditions to 1.2x for prime land.</li>
              <li><strong>Access Factor:</strong> Multipliers range from 0.7x for landlocked parcels up to 1.15x for paved road access.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E2DD] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-5 h-5 text-[#2A5A7A]" aria-hidden="true" />
            <h2 className="text-lg font-bold text-[#1A1A1A]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">How accurate is this estimation?</h3>
              <p className="text-sm text-[#4A443F]">
                This tool provides a preliminary, order-of-magnitude estimate based on generalized multipliers. It is meant for initial scenario testing and decision support, not for final financial underwriting.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">Why does being landlocked reduce value so much?</h3>
              <p className="text-sm text-[#4A443F]">
                Landlocked parcels lack legal or physical access, severely restricting usability. Securing an easement can be a lengthy and expensive legal process, which the market penalizes heavily (often up to 30% or more).
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FDF4F4] p-5 md:p-6 rounded-xl border border-[#EAC9C9] flex gap-4">
          <AlertTriangle className="w-6 h-6 text-[#7D2424] flex-shrink-0" aria-hidden="true" />
          <div className="text-sm text-[#4A443F]">
            <strong className="text-[#7D2424] block mb-1">Disclaimer</strong>
            This tool is for informational purposes only. It does not replace a formal appraisal performed by a licensed professional. Always verify local market conditions and seek expert advice before making real estate transactions.
          </div>
        </section>
      </div>
    </div>
  );
}
