import { GitCompare } from 'lucide-react';
import { useState } from 'react';

export default function ParcelComparison() {
  const [parcels] = useState([
    { id: '1', name: 'Alpha Tract', acreage: 120, price: 540000, water: 'Well', road: 'Paved', zoning: 'Ag' },
    { id: '2', name: 'Beta Sector', acreage: 200, price: 780000, water: 'None', road: 'Dirt', zoning: 'Ag' },
    { id: '3', name: 'Gamma Plot', acreage: 45, price: 320000, water: 'Municipal', road: 'Paved', zoning: 'Res' }
  ]);

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl text-[#1A1A1A]">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Comparison Tool</span>
          <h2 className="text-xl font-bold mt-2">Parcel Comparison Grid</h2>
          <p className="mt-1 text-sm text-[#7D6B5D]">Cross-examine multiple property characteristics within a standardized grid.</p>
        </div>
        <GitCompare className="w-8 h-8 text-[#2A5A7A] opacity-20" />
      </div>

      <div className="bg-white border border-[#E5E2DD] rounded-xl shadow-sm overflow-hidden p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold text-[#1A1A1A]">Metrics Analysis</h3>
          <button className="text-[10px] font-bold uppercase tracking-wider text-[#2A5A7A] bg-[#EBF1F5] px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors">+ Add Parcel</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-[#7D6B5D] border-b border-[#E5E2DD] uppercase">
                <th className="text-left pb-2 font-bold whitespace-nowrap">Metric</th>
                {parcels.map(p => (
                  <th key={p.id} className="text-center pb-2 font-bold whitespace-nowrap">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EFED]">
              <tr>
                <td className="py-3 font-semibold text-[#4B4B4B] whitespace-nowrap w-32">Acreage</td>
                {parcels.map(p => <td key={p.id} className="text-center py-3 text-[#1A1A1A]">{p.acreage} ac</td>)}
              </tr>
              <tr>
                <td className="py-3 font-semibold text-[#4B4B4B] whitespace-nowrap">List Price</td>
                {parcels.map(p => <td key={p.id} className="text-center py-3 text-[#1A1A1A]">${p.price.toLocaleString()}</td>)}
              </tr>
              <tr>
                <td className="py-3 font-semibold text-[#4B4B4B] whitespace-nowrap">Price per Acre</td>
                {parcels.map(p => <td key={p.id} className="text-center py-3 text-[#2A5A7A] font-bold">${Math.round(p.price / p.acreage).toLocaleString()}</td>)}
              </tr>
              <tr>
                <td className="py-3 font-semibold text-[#4B4B4B] whitespace-nowrap">Water Access</td>
                {parcels.map(p => (
                  <td key={p.id} className="text-center py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${p.water === 'None' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-[#E8F0ED] text-[#2D4A3E] border border-[#2D4A3E]/20'}`}>
                      {p.water}
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 font-semibold text-[#4B4B4B] whitespace-nowrap">Road Access</td>
                {parcels.map(p => <td key={p.id} className="text-center py-3 text-[#1A1A1A]">{p.road}</td>)}
              </tr>
              <tr>
                <td className="py-3 font-semibold text-[#4B4B4B] whitespace-nowrap">Zoning Constraint</td>
                {parcels.map(p => <td key={p.id} className="text-center py-3 text-[#1A1A1A]">{p.zoning}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
