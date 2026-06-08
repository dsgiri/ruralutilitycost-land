import { UtilityPole } from 'lucide-react';
import { useState } from 'react';

export default function UtilityImpact() {
  const [distanceToWater, setDistanceToWater] = useState(1);
  const [distanceToPower, setDistanceToPower] = useState(0.5);

  const waterCostBase = 25000;
  const powerCostBase = 15000;

  const totalWaterCost = waterCostBase * distanceToWater;
  const totalPowerCost = powerCostBase * (distanceToPower * 1.5);

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl text-[#1A1A1A]">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Compliance Engine</span>
          <h2 className="text-xl font-bold mt-2">Utility Impact Modeling</h2>
          <p className="mt-1 text-sm text-[#7D6B5D]">Compute overhead liabilities associated with bringing foundational utilities to remote parcels.</p>
        </div>
        <UtilityPole className="w-8 h-8 text-[#2A5A7A] opacity-20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-xl border border-[#E5E2DD] shadow-sm space-y-5">
          <h3 className="text-sm font-bold text-[#1A1A1A] border-b border-[#E5E2DD] pb-2">Distance Inputs</h3>
          
          <div>
            <label className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-1">Distance to Main Water Connection (Miles)</label>
            <input 
              type="number" 
              step="0.1"
              value={distanceToWater} 
              onChange={e => setDistanceToWater(Number(e.target.value))} 
              className="w-full text-sm border-b border-[#E5E2DD] py-2 focus:border-[#2A5A7A] outline-none" 
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider mb-1">Distance to Power Grid (Miles)</label>
            <input 
              type="number" 
              step="0.1"
              value={distanceToPower} 
              onChange={e => setDistanceToPower(Number(e.target.value))} 
              className="w-full text-sm border-b border-[#E5E2DD] py-2 focus:border-[#2A5A7A] outline-none" 
            />
          </div>
        </div>

        <div className="bg-[#2D4A3E] p-6 rounded-xl text-white shadow-sm flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10">
             <UtilityPole className="w-48 h-48" />
          </div>
          <h3 className="text-[11px] font-bold text-white/70 uppercase tracking-widest mb-4">Projected Liability Overhead</h3>
          
          <div className="space-y-4 relative z-10 w-full mb-8">
             <div className="flex justify-between items-end border-b border-white/20 pb-2">
                <span className="text-white/80 text-sm font-medium">Water Extension Est:</span>
                <span className="text-xl font-bold">${Math.round(totalWaterCost).toLocaleString()}</span>
             </div>
             <div className="flex justify-between items-end border-b border-white/20 pb-2">
                <span className="text-white/80 text-sm font-medium">Power Extension Est:</span>
                <span className="text-xl font-bold">${Math.round(totalPowerCost).toLocaleString()}</span>
             </div>
          </div>

          <div className="relative z-10 text-center">
            <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Total Impact Variance</div>
            <div className="text-4xl font-bold text-[#F9F8F6]">
               -${Math.round(totalWaterCost + totalPowerCost).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
