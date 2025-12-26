
import React from 'react';
import { ArrowLeft, Zap, ShieldCheck, DollarSign, Clock, CheckCircle2, ChevronRight, Smartphone, Map } from 'lucide-react';

interface RiderPageProps {
  onBack: () => void;
}

export const RiderPage: React.FC<RiderPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-[#0F3D2E] mb-12 font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F7941D] text-xs font-black uppercase tracking-widest">
              Join the Fleet
            </div>
            <h1 className="text-6xl lg:text-8xl font-[900] text-[#0F3D2E] leading-[0.9] tracking-tighter">
              Be a Nibbo <span className="text-[#F7941D]">Champion.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
              Earn competitive money, set your own schedule, and deliver joy to your city. We provide the tools; you provide the speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#0F3D2E] text-white px-10 py-5 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                Apply Now
              </button>
              <button className="bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] px-10 py-5 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all active:scale-95">
                View Perks
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1626245963212-340794964177?auto=format&fit=crop&q=80&w=800" 
                alt="Nibbo Rider" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-10 left-10 right-10 glass-morphism p-6 rounded-[2rem] border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">Estimated Weekly</div>
                    <div className="text-2xl font-black text-[#0F3D2E]">₦45,000+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
          {[
            { icon: <Clock />, title: "Flexible Hours", desc: "You are the boss. Work whenever you want, as much as you want." },
            { icon: <DollarSign />, title: "Instant Payouts", desc: "Cash out your earnings daily or weekly. No delays, no stress." },
            { icon: <ShieldCheck />, title: "Safety First", desc: "All Nibbo Champions are covered by comprehensive health and accident insurance." }
          ].map((perk, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#F7941D] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {/* Fix: Casting perk.icon to React.ReactElement<any> to fix type mismatch with cloneElement's className prop */}
                {React.cloneElement(perk.icon as React.ReactElement<any>, { className: 'w-7 h-7' })}
              </div>
              <h3 className="text-2xl font-black text-[#0F3D2E] mb-3">{perk.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0F3D2E] rounded-[4rem] p-12 lg:p-24 text-white mb-40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
            <Map className="w-full h-full" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-black mb-12">How to get started</h2>
            <div className="space-y-12">
              {[
                { title: "Register Online", desc: "Fill out the application form with your valid ID and vehicle details." },
                { title: "Attend Briefing", desc: "A quick 30-minute orientation on how to use the Nibbo Champion app." },
                { title: "Start Earning", desc: "Switch on the app, accept orders, and start your journey." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-orange-400 flex items-center justify-center font-black text-xl group-hover:bg-orange-400 transition-colors">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                    <p className="text-green-100/70 text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};