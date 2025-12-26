
import React from 'react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

const CITIES = [
  { 
    name: 'Abeokuta', 
    areas: 'Oke-Mosan, Ibara, Kuto, Camp, Adigbe, Totoro', 
    img: 'https://images.unsplash.com/photo-1590038767624-dac5740a997b?auto=format&fit=crop&q=80&w=1000',
    tag: 'Launch City'
  }
];

export const CitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#F7941D] text-xs font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" /> Exclusive Launch
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F3D2E] mb-4">Proudly serving Abeokuta.</h2>
            <p className="text-xl text-slate-500">We've chosen the Ancient City as our home. From the rocks to the plains, Nibbo delivers with unmatched speed across the capital.</p>
          </div>
        </div>

        <div className="max-w-4xl">
          {CITIES.map((city, i) => (
            <div key={i} className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-default shadow-2xl transition-all">
              <img 
                src={city.img} 
                alt={city.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E] via-[#0F3D2E]/40 to-transparent"></div>
              
              <div className="absolute top-8 left-8">
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-2 rounded-full text-white font-black text-sm uppercase tracking-widest">
                  {city.tag}
                </div>
              </div>

              <div className="absolute bottom-12 left-12 right-12">
                <div className="flex items-center gap-2 text-orange-400 mb-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg font-black uppercase tracking-widest">Active Everywhere</span>
                </div>
                <h3 className="text-5xl lg:text-7xl font-black text-white mb-4">{city.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {city.areas.split(', ').map((area, idx) => (
                    <span key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-xl text-white/90 text-sm font-bold">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-black text-[#0F3D2E]">Want Nibbo in your city next?</h4>
            <p className="text-slate-600">While we focus on Abeokuta, we're planning our next big move. Vote for your city!</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-[#0F3D2E] border-2 border-slate-200 px-8 py-4 rounded-2xl font-black hover:border-[#0F3D2E] transition-all">
              Lagos
            </button>
            <button className="bg-white text-[#0F3D2E] border-2 border-slate-200 px-8 py-4 rounded-2xl font-black hover:border-[#0F3D2E] transition-all">
              Ibadan
            </button>
            <button className="bg-[#0F3D2E] text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl shadow-green-900/20">
              Request Other
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
