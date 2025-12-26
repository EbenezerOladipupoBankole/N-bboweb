
import React from 'react';
import { ArrowLeft, Briefcase, Zap, Shield, ChevronRight, Code, Layers, Smartphone, Package } from 'lucide-react';

interface BusinessPageProps {
  onBack: () => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-[#0F3D2E] mb-12 font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto text-center mb-32 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-widest">
            Enterprise Logistics
          </div>
          <h1 className="text-6xl lg:text-8xl font-[900] text-[#0F3D2E] leading-[0.9] tracking-tighter">
            Smart Logistics <br /> for <span className="text-[#F7941D]">Business.</span>
          </h1>
          <p className="text-2xl text-slate-500 leading-relaxed font-medium">
            From bulk deliveries to seamless API integrations, Nibbo empowers your operations with world-class logistics technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-[#0F3D2E] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all shadow-2xl active:scale-95">
              Contact Sales
            </button>
            <button className="bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all active:scale-95">
              View API Docs
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-40">
           <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <Package className="w-12 h-12 text-[#F7941D] mb-8" />
                <h3 className="text-3xl font-black text-[#0F3D2E] mb-4">Bulk & Scheduled</h3>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Managing hundreds of deliveries? Use our bulk upload tool or schedule recurring pickups for your corporate needs.
                </p>
              </div>
              <button className="mt-12 text-[#0F3D2E] font-black flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Learn about Bulk <ChevronRight className="w-5 h-5" />
              </button>
           </div>

           <div className="bg-[#0F3D2E] p-12 rounded-[4rem] shadow-xl text-white flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
              <div className="relative z-10">
                <Code className="w-12 h-12 text-orange-400 mb-8" />
                <h3 className="text-3xl font-black mb-4">API Integration</h3>
                <p className="text-lg text-green-100/70 leading-relaxed">
                  Embed Nibbo directly into your checkout process. Our robust API allows for automatic dispatch as soon as an order is placed.
                </p>
              </div>
              <button className="mt-12 text-orange-400 font-black flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Read Documentation <ChevronRight className="w-5 h-5" />
              </button>
           </div>
        </div>

        <div className="bg-white rounded-[4rem] p-16 md:p-24 border border-slate-100 shadow-sm text-center mb-40">
           <h3 className="text-3xl font-black text-[#0F3D2E] mb-12">Trusted by industry leaders</h3>
           <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale">
              <div className="text-3xl font-black">FEDEX</div>
              <div className="text-3xl font-black">DHL</div>
              <div className="text-3xl font-black">JUMIA</div>
              <div className="text-3xl font-black">KUDABANK</div>
           </div>
        </div>
      </div>
    </div>
  );
};
