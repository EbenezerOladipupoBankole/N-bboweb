
import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, UserCheck, Eye, MapPin } from 'lucide-react';

export const SafetyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-12 font-black transition-all group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1" /> Back
        </button>
        <div className="space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Safety First
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0F3D2E] leading-tight">Your safety is our priority.</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">We've built a multi-layered trust ecosystem to ensure every interaction on Nibbo is safe and secure.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100">
              <Lock className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-2xl font-black text-slate-800 mb-3">Contact Masking</h3>
              <p className="text-slate-500 leading-relaxed">Your phone number is never shared directly with riders. Our in-app call system keeps your identity private.</p>
           </div>
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100">
              <UserCheck className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-2xl font-black text-slate-800 mb-3">Vetted Champions</h3>
              <p className="text-slate-500 leading-relaxed">Every rider undergoes rigorous background checks and criminal record verification before joining the fleet.</p>
           </div>
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100">
              <Eye className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-black text-slate-800 mb-3">Real-time Oversight</h3>
              <p className="text-slate-500 leading-relaxed">Our logistics center monitors every active delivery to identify and resolve anomalies instantly.</p>
           </div>
           <div className="bg-white p-10 rounded-[3rem] border border-slate-100">
              <MapPin className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-black text-slate-800 mb-3">SOS Integration</h3>
              <p className="text-slate-500 leading-relaxed">The Champion app features an emergency button that alerts our security response team and local authorities.</p>
           </div>
        </div>
      </div>
    </div>
  );
};
