import { FileText, Send, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContentPage({ view }: { view: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setIsSubmitted(true);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'contact_form',
          event_label: 'submitted'
        });
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in duration-500 py-8">
      <div className="mb-8 border-b border-[#E5E2DD] pb-5">
        <h2 className="text-3xl font-bold text-[#1A1A1A] flex items-center">
          <FileText className="w-8 h-8 mr-4 text-[#2A5A7A]" aria-hidden="true" />
          {view} - Rural Ops Tools
        </h2>
      </div>

      <div className="prose prose-slate max-w-none text-[#4A443F] text-lg leading-relaxed">
        {view === 'About' && (
          <p>
            The Land Compliance Ledger, an operational arm of the Rural Ops Tools network, serves to standardize preliminary land valuation, utility overhead modeling, and lease structuring. Our goal is to provide reliable, deterministic models for verifying rural property assumptions before committing to formal audits or appraisals.
          </p>
        )}
        
        {view === 'Legal' && (
          <div>
            <p className="font-medium text-[#7D2424] bg-[#FDF4F4] p-4 border border-[#EAC9C9] rounded-md mb-6" role="alert">
              Disclaimer: All computational estimates are informational only. Users must verify local market data and execute independent reviews utilizing certified personnel.
            </p>
            <p>
              This computational software does not replace legal, accounting, tax, or formal appraisal certifications. Environmental constraints, easement legalities, and utility availability must be confirmed directly with local regulatory entities.
            </p>
          </div>
        )}
        
        {view === 'Contact' && (
          <div>
            <p className="mb-6">
              For engineering audits or to submit validated local benchmark data to our verification chain, please communicate via the official Rural Ops Tools liaison channels or use the form below.
            </p>
            
            {isSubmitted ? (
              <div className="bg-[#EBF1F5] border border-[#2A5A7A] p-6 rounded-lg text-center" role="alert">
                <h3 className="text-xl font-bold text-[#2A5A7A] mb-2">Message Sent Successfully!</h3>
                <p className="text-[#4A443F]">Thank you for reaching out. Our liaison team will get back to you shortly.</p>
                <button 
                  onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="mt-4 px-4 py-2 bg-white border border-[#E5E2DD] rounded-md text-[#2A5A7A] font-bold hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-[#2A5A7A]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-[#E5E2DD] shadow-sm space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#1A1A1A] mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-3 py-2 border rounded-md min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#2A5A7A] ${errors.name ? 'border-red-500' : 'border-[#E5E2DD]'}`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-sm text-red-600 mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#1A1A1A] mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-3 py-2 border rounded-md min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#2A5A7A] ${errors.email ? 'border-red-500' : 'border-[#E5E2DD]'}`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-sm text-red-600 mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#1A1A1A] mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A5A7A] ${errors.message ? 'border-red-500' : 'border-[#E5E2DD]'}`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && <p id="message-error" className="text-sm text-red-600 mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 min-h-[48px] bg-[#2A5A7A] text-white font-bold rounded-lg hover:bg-[#1f425a] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2A5A7A] focus:ring-offset-2"
                >
                  <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        )}
        
        {view === 'License' && (
          <p>
            This application is proprietary to Rural Ops Tools and operates strictly within authorized compliance environments.
          </p>
        )}
      </div>
    </div>
  );
}
