
import React from 'react';
import { ArrowLeft, Search, HelpCircle, MessageCircle, Phone, ChevronRight } from 'lucide-react';

export const HelpPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const faqs = [
    { q: "How do I track my order?", a: "Go to the dashboard and click the 'Track active order' button at the bottom right." },
    { q: "What is Nibbo Go?", a: "Nibbo Go is our specialized errand service that handles everything from package pick-ups to personal shopping." },
    { q: "Can I cancel my order?", a: "Orders can be cancelled before the restaurant or store starts preparing them." },
    { q: "How do I pay on delivery?", a: "Select 'Pay on Delivery' during checkout. You can pay via cash or the rider's POS machine." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-12 font-black transition-all group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1" /> Back
        </button>
        
        <div className="text-center mb-16 space-y-6">
           <h1 className="text-5xl font-black text-[#0F3D2E]">How can we help?</h1>
           <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="text" placeholder="Search for articles, orders..." className="w-full pl-14 pr-6 py-5 rounded-3xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-[#F7941D] outline-none font-bold" />
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center gap-6 cursor-pointer hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                 <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="font-black text-slate-800">Live Chat</h4>
                 <p className="text-xs text-slate-400">Response in &lt; 2 mins</p>
              </div>
              <ChevronRight className="ml-auto w-5 h-5 text-slate-200 group-hover:text-[#F7941D]" />
           </div>
           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center gap-6 cursor-pointer hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                 <Phone className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="font-black text-slate-800">Call Support</h4>
                 <p className="text-xs text-slate-400">Speak to an agent</p>
              </div>
              <ChevronRight className="ml-auto w-5 h-5 text-slate-200 group-hover:text-[#F7941D]" />
           </div>
        </div>

        <h3 className="text-2xl font-black text-[#0F3D2E] mb-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
           {faqs.map((faq, i) => (
             <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100">
                <h4 className="text-lg font-black text-slate-800 mb-2">{faq.q}</h4>
                <p className="text-slate-500 leading-relaxed">{faq.a}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
