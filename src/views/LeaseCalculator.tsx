import { FileText } from 'lucide-react';
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
    <div className="animate-in fade-in duration-500 max-w-4xl text-[#1A1A1A]">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Financial Tool</span>
          <h2 className="text-xl font-bold mt-2">Lease & Rent Diagnostic</h2>
          <p className="mt-1 text-sm text-[#7D6B5D]">Compute standardized crop-share revenue models against fair cash rent benchmarks.</p>
        </div>
        <FileText className="w-8 h-8 text-[#2A5A7A] opacity-20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-[#E5E2DD] shadow-sm space-y-5">
          <h3 className="text-sm font-bold text-[#1A1A1A] border-b border-[#E5E2DD] pb-2">Production Baselines</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-1">Tillable Acres</label>
              <input type="number" value={acreage} onChange={e => setAcreage(Number(e.target.value))} className="w-full text-sm border-b border-[#E5E2DD] py-1 focus:border-[#2A5A7A] outline-none" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-1">Expected Yield/Ac</label>
              <input type="number" value={yieldPerAcre} onChange={e => setYieldPerAcre(Number(e.target.value))} className="w-full text-sm border-b border-[#E5E2DD] py-1 focus:border-[#2A5A7A] outline-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-1">Commodity Projection ($/unit)</label>
            <input type="number" step="0.1" value={pricePerUnit} onChange={e => setPricePerUnit(Number(e.target.value))} className="w-full text-sm border-b border-[#E5E2DD] py-1 focus:border-[#2A5A7A] outline-none" />
          </div>

          <div className="pt-4 border-t border-[#E5E2DD]">
            <label className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-3">Owner vs Tenant Share ({ownerShare}% / {tenantShare}%)</label>
            <input 
              type="range" 
              min="10" 
              max="90" 
              value={tenantShare} 
              onChange={e => setTenantShare(Number(e.target.value))} 
              className="w-full accent-[#2A5A7A]"
            />
            <div className="flex justify-between text-[10px] font-bold text-[#7D6B5D] mt-1">
              <span>Owner Heavy</span>
              <span>Tenant Heavy</span>
            </div>
          </div>
        </div>

        <div className="bg-[#F9F8F6] border border-[#E5E2DD] p-5 rounded-xl flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-4 border-b border-[#E5E2DD] pb-2">Equivalency Output</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#4B4B4B] font-semibold">Total Gross Revenue</span>
                <span className="font-bold text-[#1A1A1A]">${Math.round(grossRevenue).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#4B4B4B] font-semibold">Landowner Share ({ownerShare}%)</span>
                <span className="font-bold text-[#2A5A7A] text-lg">${Math.round(ownerRevenue).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#E5E2DD] text-center">
            <div className="text-[10px] text-[#7D6B5D] font-bold uppercase tracking-wider mb-1">Implicit Cash Rent Equivalent</div>
            <div className="text-4xl font-bold text-[#2D4A3E]">
               ${Math.round(implicitCashRent).toLocaleString()} <span className="text-sm font-sans font-medium text-[#7D6B5D]">/ acre</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
