
import React from 'react';
import { ArrowLeft, Store, TrendingUp, Users, ShieldCheck, ChevronRight, BarChart3, Globe, Heart } from 'lucide-react';

interface MerchantPageProps {
  onBack: () => void;
}

export const MerchantPage: React.FC<MerchantPageProps> = ({ onBack }) => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black uppercase tracking-widest">
              Nibbo for Merchants
            </div>
            <h1 className="text-6xl lg:text-8xl font-[900] text-[#0F3D2E] leading-[0.9] tracking-tighter">
              Grow your <span className="text-[#F7941D]">Business</span> with Nibbo.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg">
              Join thousands of restaurants and stores reaching more customers. We handle the logistics; you focus on the quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#0F3D2E] text-white px-10 py-5 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                Register Your Store
              </button>
              <button className="bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] px-10 py-5 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all active:scale-95">
                View Pricing
              </button>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl bg-slate-50 flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-6 w-full h-full">
                  <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between border border-slate-100">
                    <TrendingUp className="w-8 h-8 text-[#F7941D]" />
                    <div>
                      <div className="text-3xl font-black text-[#0F3D2E]">+45%</div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Avg Sales Growth</div>
                    </div>
                  </div>
                  <div className="bg-[#0F3D2E] rounded-3xl shadow-lg p-6 flex flex-col justify-between text-white">
                    <Users className="w-8 h-8 text-orange-400" />
                    <div>
                      <div className="text-3xl font-black">2M+</div>
                      <div className="text-xs text-white/50 font-bold uppercase">Active Users</div>
                    </div>
                  </div>
                  <div className="col-span-2 bg-slate-100 rounded-3xl p-6 flex items-center gap-6">
                    <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=200" className="w-20 h-20 rounded-2xl object-cover" />
                    <div>
                      <div className="font-black text-[#0F3D2E]">"Nibbo doubled our delivery radius in 3 months."</div>
                      <div className="text-sm text-slate-500">- Sarah, Gourmet Bites</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#0F3D2E] mb-6">Why partner with us?</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">We provide the most robust merchant tools in the ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-40">
          {[
            { icon: <BarChart3 />, title: "Live Insights", desc: "Track every order, customer trend, and payout in real-time via our Merchant Dashboard." },
            { icon: <Globe />, title: "Infinite Reach", desc: "Access the largest delivery fleet in the city and deliver to thousands of new doorsteps." },
            { icon: <Heart />, title: "Marketing Support", desc: "Get featured in our weekly newsletters and boost your visibility with Nibbo Promos." }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-[#0F3D2E] rounded-2xl flex items-center justify-center text-white mb-8">
                {/* Fix: Casting feature.icon to React.ReactElement<any> to fix cloneElement type mismatch with className prop */}
                {React.cloneElement(feature.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-2xl font-black text-[#0F3D2E] mb-4">{feature.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};