import { UtilityPole, FileText, HelpCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function UtilityImpact() {
  const [distanceToWater, setDistanceToWater] = useState(1);
  const [distanceToPower, setDistanceToPower] = useState(0.5);

  const waterCostBase = 25000;
  const powerCostBase = 15000;

  const totalWaterCost = waterCostBase * distanceToWater;
  const totalPowerCost = powerCostBase * (distanceToPower * 1.5);

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl text-[#1A1A1A] mx-auto">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Compliance Engine</span>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-[#1A1A1A]">Utility Impact Modeling</h1>
          <p className="mt-2 text-sm md:text-base text-[#7D6B5D] max-w-2xl">Compute overhead liabilities associated with bringing foundational utilities to remote parcels.</p>
        </div>
        <UtilityPole className="w-10 h-10 md:w-12 md:h-12 text-[#2A5A7A] opacity-20 hidden sm:block" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="bg-white p-5 rounded-xl border border-[#E5E2DD] shadow-sm space-y-6 flex flex-col justify-center">
          <h3 className="text-sm font-bold text-[#1A1A1A] border-b border-[#E5E2DD] pb-2">Distance Inputs</h3>
          
          <div className="space-y-1">
            <label htmlFor="water-distance" className="block text-xs font-bold text-[#7D6B5D] uppercase tracking-wider">Distance to Main Water Connection (Miles)</label>
            <input 
              id="water-distance"
              type="number" 
              step="0.1"
              value={distanceToWater} 
              onChange={e => setDistanceToWater(Number(e.target.value))} 
              className="w-full text-base border-b border-[#E5E2DD] py-3 focus:border-[#2A5A7A] focus:ring-0 outline-none transition-colors" 
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="power-distance" className="block text-xs font-bold text-[#7D6B5D] uppercase tracking-wider">Distance to Power Grid (Miles)</label>
            <input 
              id="power-distance"
              type="number" 
              step="0.1"
              value={distanceToPower} 
              onChange={e => setDistanceToPower(Number(e.target.value))} 
              className="w-full text-base border-b border-[#E5E2DD] py-3 focus:border-[#2A5A7A] focus:ring-0 outline-none transition-colors" 
            />
          </div>
        </div>

        <div className="bg-[#2D4A3E] p-8 rounded-xl text-white shadow-sm flex flex-col justify-center relative overflow-hidden h-full">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 pointer-events-none">
             <UtilityPole className="w-64 h-64" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-bold text-white/70 uppercase tracking-widest mb-6">Projected Liability Overhead</h3>
          
          <div className="space-y-5 relative z-10 w-full mb-10">
             <div className="flex justify-between items-end border-b border-white/20 pb-3">
                <span className="text-white/80 text-sm font-medium">Water Extension Est:</span>
                <span className="text-2xl font-bold">${Math.round(totalWaterCost).toLocaleString()}</span>
             </div>
             <div className="flex justify-between items-end border-b border-white/20 pb-3">
                <span className="text-white/80 text-sm font-medium">Power Extension Est:</span>
                <span className="text-2xl font-bold">${Math.round(totalPowerCost).toLocaleString()}</span>
             </div>
          </div>

          <div className="relative z-10 text-center bg-black/20 p-4 rounded-xl border border-white/10">
            <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">Total Impact Variance</div>
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
               -${Math.round(totalWaterCost + totalPowerCost).toLocaleString()}
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
              This engine estimates the capital expenditure required to bring essential utilities across raw land, applying standard per-mile trenching, piping, and line-running costs.
            </p>
            <div className="bg-[#F9F8F6] p-4 rounded-lg my-4 font-mono text-xs md:text-sm text-[#2A5A7A] border border-[#E5E2DD] overflow-x-auto">
              Water Extension = Base Cost/Mile ($25k) × Distance<br/>
              Power Extension = Base Cost/Mile ($15k) × Distance × Terrain Difficulty (1.5x)
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
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">Are these costs exact?</h3>
              <p className="text-sm text-[#4A443F]">
                No. Utility costs are highly localized and subject to geological constraints (e.g., bedrock digging, trenching difficulties). These are generalized benchmarks designed for preliminary budgeting.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">Why is power extension multiplied by 1.5x?</h3>
              <p className="text-sm text-[#4A443F]">
                Rural power extension often requires additional infrastructure such as substations, step-down transformers, and line clearing, which historically incur a premium over straightforward municipal grid tapping.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FDF4F4] p-5 md:p-6 rounded-xl border border-[#EAC9C9] flex gap-4">
          <AlertTriangle className="w-6 h-6 text-[#7D2424] flex-shrink-0" aria-hidden="true" />
          <div className="text-sm text-[#4A443F]">
            <strong className="text-[#7D2424] block mb-1">Disclaimer</strong>
            This model offers baseline estimates for utility integration. It does not reflect actual civil engineering bids, environmental studies, or local municipal hookup fees. Obtain certified contractor quotes before purchasing raw land.
          </div>
        </section>
      </div>
    </div>
  );
}
