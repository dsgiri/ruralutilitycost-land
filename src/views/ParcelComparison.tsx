import { GitCompare, FileText, HelpCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function ParcelComparison() {
  const [parcels] = useState([
    { id: '1', name: 'Alpha Tract', acreage: 120, price: 540000, water: 'Well', road: 'Paved', zoning: 'Ag' },
    { id: '2', name: 'Beta Sector', acreage: 200, price: 780000, water: 'None', road: 'Dirt', zoning: 'Ag' },
    { id: '3', name: 'Gamma Plot', acreage: 45, price: 320000, water: 'Municipal', road: 'Paved', zoning: 'Res' }
  ]);

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl text-[#1A1A1A] mx-auto">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Comparison Tool</span>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 text-[#1A1A1A]">Parcel Comparison Grid</h1>
          <p className="mt-2 text-sm md:text-base text-[#7D6B5D] max-w-2xl">Cross-examine multiple property characteristics within a standardized grid.</p>
        </div>
        <GitCompare className="w-10 h-10 md:w-12 md:h-12 text-[#2A5A7A] opacity-20 hidden sm:block" aria-hidden="true" />
      </div>

      <div className="bg-white border border-[#E5E2DD] rounded-xl shadow-sm overflow-hidden p-5 mb-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-5">
          <h3 className="text-base font-bold text-[#1A1A1A]">Metrics Analysis</h3>
          <button className="text-[10px] font-bold uppercase tracking-wider text-[#2A5A7A] bg-[#EBF1F5] px-4 py-2 min-h-[48px] rounded-lg sm:rounded-full hover:bg-[#D9E6EE] transition-colors focus-visible:ring-2 focus-visible:ring-[#2A5A7A]">+ Add Parcel</button>
        </div>
        <div className="overflow-x-auto -mx-5 px-5 pb-2">
          <table className="w-full text-xs sm:text-sm min-w-[600px]">
            <thead>
              <tr className="text-[#7D6B5D] border-b border-[#E5E2DD] uppercase">
                <th scope="col" className="text-left pb-3 px-2 font-bold whitespace-nowrap sticky left-0 bg-white shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)] z-10 w-32 md:w-auto md:shadow-none md:static">Metric</th>
                {parcels.map(p => (
                  <th key={p.id} scope="col" className="text-center pb-3 px-4 font-bold whitespace-nowrap bg-[#F9F8F6] rounded-t-md mx-1">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EFED]">
              <tr>
                <th scope="row" className="py-4 px-2 font-semibold text-[#4B4B4B] whitespace-nowrap text-left sticky left-0 bg-white shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)] z-10 md:shadow-none md:static">Acreage</th>
                {parcels.map(p => <td key={p.id} className="text-center py-4 px-4 text-[#1A1A1A]">{p.acreage} ac</td>)}
              </tr>
              <tr>
                <th scope="row" className="py-4 px-2 font-semibold text-[#4B4B4B] whitespace-nowrap text-left sticky left-0 bg-white shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)] z-10 md:shadow-none md:static">List Price</th>
                {parcels.map(p => <td key={p.id} className="text-center py-4 px-4 text-[#1A1A1A]">${p.price.toLocaleString()}</td>)}
              </tr>
              <tr>
                <th scope="row" className="py-4 px-2 font-semibold text-[#4B4B4B] whitespace-nowrap text-left sticky left-0 bg-white shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)] z-10 md:shadow-none md:static">Price per Acre</th>
                {parcels.map(p => <td key={p.id} className="text-center py-4 px-4 text-[#2A5A7A] font-bold text-base bg-[#F9F8F6]">${Math.round(p.price / p.acreage).toLocaleString()}</td>)}
              </tr>
              <tr>
                <th scope="row" className="py-4 px-2 font-semibold text-[#4B4B4B] whitespace-nowrap text-left sticky left-0 bg-white shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)] z-10 md:shadow-none md:static">Water Access</th>
                {parcels.map(p => (
                  <td key={p.id} className="text-center py-4 px-4">
                    <span className={`inline-flex px-3 py-1 rounded text-[10px] sm:text-xs font-bold leading-none ${p.water === 'None' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-[#E8F0ED] text-[#2D4A3E] border border-[#2D4A3E]/20'}`}>
                      {p.water}
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row" className="py-4 px-2 font-semibold text-[#4B4B4B] whitespace-nowrap text-left sticky left-0 bg-white shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)] z-10 md:shadow-none md:static">Road Access</th>
                {parcels.map(p => <td key={p.id} className="text-center py-4 px-4 text-[#1A1A1A]">{p.road}</td>)}
              </tr>
              <tr>
                <th scope="row" className="py-4 px-2 font-semibold text-[#4B4B4B] whitespace-nowrap text-left sticky left-0 bg-white shadow-[2px_0_4px_-2px_rgba(0,0,0,0.1)] z-10 md:shadow-none md:static rounded-bl-xl">Zoning Constraint</th>
                {parcels.map(p => <td key={p.id} className="text-center py-4 px-4 text-[#1A1A1A]">{p.zoning}</td>)}
              </tr>
            </tbody>
          </table>
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
              This comparison tool normalizes disparate properties by calculating their price per acre and aggregating qualitative metrics side-by-side for rapid evaluation.
            </p>
            <div className="bg-[#F9F8F6] p-4 rounded-lg my-4 font-mono text-xs md:text-sm text-[#2A5A7A] border border-[#E5E2DD]">
              Price per Acre = List Price / Total Acreage
            </div>
            <p>
              Qualitative metrics like Zoning and Road Access are presented unmodified to allow for subjective grading against the buyer's operational requirements.
            </p>
          </div>
        </section>

        <section className="bg-white p-6 md:p-8 rounded-xl border border-[#E5E2DD] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-5 h-5 text-[#2A5A7A]" aria-hidden="true" />
            <h2 className="text-lg font-bold text-[#1A1A1A]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">Why focus on Price per Acre instead of Total Price?</h3>
              <p className="text-sm text-[#4A443F]">
                Total price can be misleading when tracts vary wildly in size. Price per Acre normalizes the financial ask, allowing you to quickly spot overpriced land or hidden discounts.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-2">How should I weight Water Access?</h3>
              <p className="text-sm text-[#4A443F]">
                If your intent is agricultural or immediate residential development, "None" should be treated as a major liability requiring significant capital to remediate. For recreational hunting or timber, it may be a non-issue.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FDF4F4] p-5 md:p-6 rounded-xl border border-[#EAC9C9] flex gap-4">
          <AlertTriangle className="w-6 h-6 text-[#7D2424] flex-shrink-0" aria-hidden="true" />
          <div className="text-sm text-[#4A443F]">
            <strong className="text-[#7D2424] block mb-1">Disclaimer</strong>
            This tool provides a structural comparison of listed attributes. Information is not guaranteed and should be independently verified through county assessor records, zoning maps, and physical inspections.
          </div>
        </section>
      </div>
    </div>
  );
}
