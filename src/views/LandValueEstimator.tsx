import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function LandValueEstimator() {
  const [acreage, setAcreage] = useState<number>(100);
  const [basePrice, setBasePrice] = useState<number>(5000);
  const [qualityFactor, setQualityFactor] = useState<number>(1);
  const [roadFactor, setRoadFactor] = useState<number>(1);

  const estimatedValue = acreage * basePrice * qualityFactor * roadFactor;

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl text-[#1A1A1A]">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Valuation Tool</span>
          <h2 className="text-xl font-bold mt-2">Land Value Estimator</h2>
          <p className="mt-1 text-sm text-[#7D6B5D]">Compute baseline market projections based on acreage and standard modifiers.</p>
        </div>
        <Calculator className="w-8 h-8 text-[#2A5A7A] opacity-20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-[#E5E2DD] shadow-sm space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider">Total Acreage</label>
              <input 
                type="number" 
                value={acreage} 
                onChange={e => setAcreage(Number(e.target.value))} 
                className="w-full text-sm border-b border-[#E5E2DD] py-2 focus:border-[#2A5A7A] outline-none" 
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider">Benchmark ($/Acre)</label>
              <input 
                type="number" 
                value={basePrice} 
                onChange={e => setBasePrice(Number(e.target.value))} 
                className="w-full text-sm border-b border-[#E5E2DD] py-2 focus:border-[#2A5A7A] outline-none" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-2">Soil/Land Quality</label>
            <div className="flex space-x-2">
              {[0.8, 1, 1.2].map(score => (
                <button 
                  key={score}
                  onClick={() => setQualityFactor(score)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded border transition-colors ${qualityFactor === score ? 'bg-[#EBF1F5] border-[#2A5A7A] text-[#2A5A7A]' : 'bg-[#F9F8F6] border-[#E5E2DD] text-[#7D6B5D] hover:bg-white'}`}
                >
                  {score === 0.8 ? 'Poor' : score === 1 ? 'Average' : 'Prime'}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-2">Access Verification</label>
            <div className="flex space-x-2">
              {[0.7, 1, 1.15].map(score => (
                <button 
                  key={score}
                  onClick={() => setRoadFactor(score)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded border transition-colors ${roadFactor === score ? 'bg-[#EBF1F5] border-[#2A5A7A] text-[#2A5A7A]' : 'bg-[#F9F8F6] border-[#E5E2DD] text-[#7D6B5D] hover:bg-white'}`}
                >
                  {score === 0.7 ? 'Landlocked' : score === 1 ? 'Dirt/Gravel' : 'Paved'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="p-5 bg-[#F9F8F6] rounded-xl border border-[#E5E2DD] space-y-3 flex-1">
            <h3 className="text-[11px] font-bold text-[#7D6B5D] uppercase mb-4 tracking-wider">Adjustment Factors</h3>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#4B4B4B]">Base Value</span>
              <span className="font-bold">${(acreage * basePrice).toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#4B4B4B]">Quality Coefficient</span>
              <span className={`font-bold ${qualityFactor < 1 ? 'text-red-600' : qualityFactor > 1 ? 'text-green-600' : 'text-[#7D6B5D]'}`}>{qualityFactor}x</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#4B4B4B]">Access Coefficient</span>
              <span className={`font-bold ${roadFactor < 1 ? 'text-red-600' : roadFactor > 1 ? 'text-green-600' : 'text-[#7D6B5D]'}`}>{roadFactor}x</span>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#E5E2DD] flex flex-col items-center justify-center">
              <div className="text-[10px] text-[#7D6B5D] uppercase font-bold tracking-widest">Estimated Total Value</div>
              <div className="text-3xl font-bold text-[#2D4A3E] mt-1">
                ${estimatedValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <div className="text-[10px] italic text-[#7D6B5D] mt-2 text-center">*Estimate for decision support only. Not a formal appraisal.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
