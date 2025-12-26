
import React from 'react';
import { Star, Quote, ShieldCheck, Heart } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Tunde Afolayan',
    role: 'Loyal Customer',
    text: "Nibbo has completely changed how I manage my lunch breaks. The speed is actually scary sometimes—I've had orders arrive in 12 minutes!",
    img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'Amaka Eze',
    role: 'Restaurant Owner',
    text: "Partnering with Nibbo was the best decision for my kitchen. Their dashboard gives me insights I never had, and the riders are professional.",
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    name: 'Seyi Bakare',
    role: 'Nibbo Champion',
    text: "I love the flexibility. I ride whenever I'm free, and the payouts are instant. It's the most reliable gig in the city right now.",
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
  }
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F7941D] text-xs font-black uppercase tracking-widest">
            Loved by thousands
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0F3D2E]">Don't just take our word for it.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
              <div>
                <Quote className="w-10 h-10 text-orange-200 mb-6 group-hover:text-[#F7941D] transition-colors" />
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#F7941D]/20" />
                <div>
                  <div className="font-black text-[#0F3D2E]">{t.name}</div>
                  <div className="text-xs text-slate-400 font-bold uppercase">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-12 text-center">
           <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-[#0F3D2E]">Goods Insured</h4>
              <p className="text-slate-500">Every order is protected. If something goes wrong, we make it right—instantly.</p>
           </div>
           <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#F7941D] mx-auto mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-[#0F3D2E]">Top Rated</h4>
              <p className="text-slate-500">Consistently rated 4.9/5 by our community for speed and reliability.</p>
           </div>
           <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-[#0F3D2E]">24/7 Support</h4>
              <p className="text-slate-500">A human is always available to help. No endless bots, just real support.</p>
           </div>
        </div>
      </div>
    </section>
  );
};
