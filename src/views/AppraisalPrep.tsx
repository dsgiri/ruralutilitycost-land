import { ClipboardCheck } from 'lucide-react';
import { useState } from 'react';

export default function AppraisalPrep() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Acquire formalized plat maps and boundary surveys.', done: false },
    { id: 2, text: 'Confirm primary access deeds (ingress/egress).', done: false },
    { id: 3, text: 'Compile recent property tax compliance records.', done: false },
    { id: 4, text: 'Identify all utility easements impacting structural logic.', done: false },
    { id: 5, text: 'Aggregate recent comparable local transactions.', done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const progress = Math.round((tasks.filter(t => t.done).length / tasks.length) * 100);

  return (
    <div className="animate-in fade-in duration-500 max-w-3xl text-[#1A1A1A]">
      <div className="mb-6 pb-4 border-b border-[#E5E2DD] flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D4A3E] bg-[#E8F0ED] px-2 py-0.5 rounded">Compliance Vault</span>
          <h2 className="text-xl font-bold mt-2">Appraisal Readiness Protocol</h2>
          <p className="mt-1 text-sm text-[#7D6B5D]">Enforce strict record collation before archiving to the secure Compliance Vault for formal regulatory processes.</p>
        </div>
        <ClipboardCheck className="w-8 h-8 text-[#2A5A7A] opacity-20" />
      </div>

      <div className="bg-white border border-[#E5E2DD] rounded-xl p-5 shadow-sm mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold text-[#7D6B5D] uppercase tracking-wider">Verification Progress</span>
          <span className="text-xs font-bold text-[#2A5A7A]">{progress}% Documented</span>
        </div>
        <div className="w-full bg-[#E5E2DD] rounded-full h-2">
          <div className="bg-[#2A5A7A] h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="bg-white border border-[#E5E2DD] rounded-xl shadow-sm divide-y divide-[#E5E2DD] overflow-hidden">
        {tasks.map((task) => (
          <label key={task.id} className="flex items-start p-4 hover:bg-[#F9F8F6] transition-colors cursor-pointer group">
            <div className="flex items-center h-5 mt-0.5">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 text-[#2A5A7A] border-[#E5E2DD] rounded focus:ring-[#2A5A7A] cursor-pointer accent-[#2A5A7A]"
              />
            </div>
            <div className="ml-3">
              <span className={`text-sm font-medium transition-colors ${task.done ? 'text-[#7D6B5D] line-through opacity-70' : 'text-[#4B4B4B] group-hover:text-[#1A1A1A]'}`}>
                {task.text}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
