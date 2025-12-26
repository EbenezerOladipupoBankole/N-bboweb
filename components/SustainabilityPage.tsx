
import React from 'react';
import { ArrowLeft, Leaf, Zap, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const SustainabilityPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-12 font-black transition-all group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1" /> Back
        </button>
        <div className="space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black uppercase tracking-widest">
            <Leaf className="w-4 h-4" /> Green Logistics
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0F3D2E] leading-tight">Better logistics for a better planet.</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">Nibbo is committed to minimizing our environmental footprint while maximizing social impact in the communities we serve.</p>
        </div>

        <div className="space-y-12">
           <div className="flex gap-8">
              <div className="w-16 h-16 rounded-[2rem] bg-orange-50 text-[#F7941D] flex items-center justify-center flex-shrink-0">
                 <Zap className="w-8 h-8" />
              </div>
              <div>
                 <h3 className="text-2xl font-black text-slate-800 mb-3">Electric Fleet Transition</h3>
                 <p className="text-lg text-slate-500 leading-relaxed">By 2026, 40% of our Abeokuta fleet will be comprised of electric motorcycles, significantly reducing noise and air pollution in the city.</p>
              </div>
           </div>
           <div className="flex gap-8">
              <div className="w-16 h-16 rounded-[2rem] bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                 <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                 <h3 className="text-2xl font-black text-slate-800 mb-3">Sustainable Packaging</h3>
                 <p className="text-lg text-slate-500 leading-relaxed">We are partnering with local vendors to replace single-use plastics with biodegradable alternatives for all Nibbo Go and Nibbo Mart deliveries.</p>
              </div>
           </div>
           <div className="flex gap-8">
              <div className="w-16 h-16 rounded-[2rem] bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0">
                 <Heart className="w-8 h-8" />
              </div>
              <div>
                 <h3 className="text-2xl font-black text-slate-800 mb-3">Economic Empowerment</h3>
                 <p className="text-lg text-slate-500 leading-relaxed">Through the Nibbo Foundation, we provide micro-loans and safety training to our Champions to help them build generational wealth.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
