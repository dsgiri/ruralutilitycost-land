import { FileText, HelpCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function LeaseCalculator() {
  const [acreage, setAcreage] = useState(100);
  const [yieldPerAcre, setYieldPerAcre] = useState(180);
  const [pricePerUnit, setPricePerUnit] = useState(4.5);
  const [tenantShare, setTenantShare] = useState(60); // percentage

  const totalYield = acreage * yieldPerAcre;
  const grossRevenue = totalYield * pricePerUnit;
  const ownerShare = 100 - tenantShare;
  const ownerRevenue = grossRevenue * (ownerShare / 100);
  const implicitCashRent = ownerRevenue / acreage;

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl text-[#1A1A1A] mx-auto">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Financial Tool</span>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-[#1A1A1A]">Lease & Rent Diagnostic</h1>
          <p className="mt-2 text-sm md:text-base text-[#7D6B5D] max-w-2xl">Compute standardized crop-share revenue models against fair cash rent benchmarks.</p>
        </div>
        <FileText className="w-10 h-10 md:w-12 md:h-12 text-[#2A5A7A] opacity-20 hidden sm:block" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
        <div className="bg-white p-5 md:p-6 rounded-xl border border-[#E5E2DD] shadow-sm space-y-6">
          <h3 className="text-base font-bold text-[#1A1A1A] border-b border-[#E5E2DD] pb-3">Production Baselines</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label htmlFor="tillable-acres" className="block text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider">Tillable Acres</label>
              <input id="tillable-acres" type="number" value={acreage} onChange={e => setAcreage(Number(e.target.value))} className="w-full text-base sm:text-sm border-b border-[#E5E2DD] py-2 focus:border-[#2A5A7A] outline-none transition-colors" />
            </div>
            <div className="space-y-1">
              <label htmlFor="expected-yield" className="block text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider">Expected Yield/Ac</label>
              <input id="expected-yield" type="number" value={yieldPerAcre} onChange={e => setYieldPerAcre(Number(e.target.value))} className="w-full text-base sm:text-sm border-b border-[#E5E2DD] py-2 focus:border-[#2A5A7A] outline-none transition-colors" />
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="unit-price" className="block text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider">Commodity Projection ($/unit)</label>
            <input id="unit-price" type="number" step="0.1" value={pricePerUnit} onChange={e => setPricePerUnit(Number(e.target.value))} className="w-full text-base sm:text-sm border-b border-[#E5E2DD] py-2 focus:border-[#2A5A7A] outline-none transition-colors" />
          </div>

          <div className="pt-5 border-t border-[#E5E2DD]">
            <label htmlFor="share-slider" className="block text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-4 flex justify-between items-center">
              <span>Owner vs Tenant Share</span>
              <span className="text-[#1A1A1A] bg-[#E8F0ED] px-2 py-1 rounded ml-2 font-mono">{ownerShare}% / {tenantShare}%</span>
            </label>
            <input 
              id="share-slider"
              type="range" 
              min="10" 
              max="90" 
              value={tenantShare} 
              onChange={e => setTenantShare(Number(e.target.value))} 
              className="w-full accent-[#2A5A7A] h-2 bg-[#E5E2DD] rounded-lg appearance-none cursor-pointer mb-2"
              aria-valuemin={10}
              aria-valuemax={90}
              aria-valuenow={tenantShare}
            />
            <div className="flex justify-between text-xs font-bold text-[#7D6B5D] mt-2">
              <span>Owner Heavy</span>
              <span>Tenant Heavy</span>
            </div>
          </div>
        </div>

        <div className="bg-[#F9F8F6] border border-[#E5E2DD] p-6 lg:p-8 rounded-xl flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-xs font-bold text-[#7D6B5D] uppercase tracking-wider mb-5 border-b border-[#E5E2DD] pb-3">Equivalency Output</h3>
            
            <div className="space-y-5">
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-[#4B4B4B] font-semibold">Total Gross Revenue</span>
                <span className="font-bold text-[#1A1A1A] text-lg md:text-xl">${Math.round(grossRevenue).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-[#2A5A7A] font-bold bg-[#EBF1F5] px-3 py-1 rounded-full border border-[#D9E6EE]">Landowner Share ({ownerShare}%)</span>
                <span className="font-bold text-[#2A5A7A] text-xl md:text-2xl">${Math.round(ownerRevenue).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#E5E2DD] text-center bg-white rounded-lg p-5 border shadow-sm relative z-10">
            <div className="text-xs text-[#7D6B5D] font-bold uppercase tracking-wider mb-2">Implicit Cash Rent Equivalent</div>
            <div className="text-4xl md:text-5xl font-bold text-[#2D4A3E] tracking-tight">
               ${Math.round(implicitCashRent).toLocaleString()} <span className="text-base font-sans font-medium text-[#7D6B5D]">/ acre</span>
            </div>
            <div className="text-[10px] italic text-[#7D6B5D] mt-3">*This represents the breakeven cash rent mathematically aligned with the {ownerShare}% crop-share structure over {acreage} acres.</div>
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
              This diagnostic converts a traditional crop-share lease agreement into a mathematically equivalent cash rent value, providing landowners with an objective benchmark for negotiation.
            </p>
            <div className="bg-[#F9F8F6] p-4 rounded-lg my-4 font-mono text-xs md:text-sm text-[#2A5A7A] border border-[#E5E2DD] overflow-x-auto">
              Gross Revenue = Total Acres × Yield/Acre × Price/Unit<br/>
              Landowner Revenue = Gross Revenue × Owner Share %<br/>
              Cash Rent Equivalent = Landowner Revenue / Total Acres
            </div>
          </div>
        </section>

        <section className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E2DD] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-5 h-5 text-[#2A5A7A]" aria-hidden="true" />
            <h2 className="text-lg font-bold text-[#1A1A1A]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">Why convert a crop-share to cash rent?</h3>
              <p className="text-sm text-[#4A443F]">
                Cash rent provides a guaranteed, stable income without the commodity price risks and yield variations inherent in crop-share agreements. This equivalence metric helps owners decide if switching to cash rent is financially advantageous based on current yield and price forecasts.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">What is a standard owner vs tenant share?</h3>
              <p className="text-sm text-[#4A443F]">
                Historically, 50/50 splits were common, but modern leases often lean 60/40 or 75/25 in favor of the tenant due to the high input costs of machinery, fertilizer, and labor that the tenant bears.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FDF4F4] p-5 md:p-6 rounded-xl border border-[#EAC9C9] flex gap-4">
          <AlertTriangle className="w-6 h-6 text-[#7D2424] flex-shrink-0" aria-hidden="true" />
          <div className="text-sm text-[#4A443F]">
            <strong className="text-[#7D2424] block mb-1">Disclaimer</strong>
            This tool computes a theoretical revenue equivalent. It does not account for input costs, insurance premiums, or local tax implications. Users should consult agricultural economists or certified land managers before amending lease agreements.
          </div>
        </section>
      </div>
    </div>
  );
}
