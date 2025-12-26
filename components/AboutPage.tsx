
import React from 'react';
import { 
  ArrowLeft, Target, Eye, Shield, Zap, Users, 
  Linkedin, Twitter, Github, Globe, ArrowRight, 
  Award, MapPin, Sparkles, Rocket, Heart, 
  Quote, Smartphone, Map, Package, Store
} from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const VALUES = [
  { 
    icon: <Zap className="w-6 h-6" />, 
    title: "Relentless Speed", 
    desc: "In a world that never sleeps, we race against the clock. Every second saved is a moment returned to our customers.",
    color: "bg-orange-50 text-[#F7941D]"
  },
  { 
    icon: <Shield className="w-6 h-6" />, 
    title: "Fortress Security", 
    desc: "Trust is our currency. From life-saving meds to luxury meals, we handle every item as if it were our own.",
    color: "bg-emerald-50 text-emerald-600"
  },
  { 
    icon: <Users className="w-6 h-6" />, 
    title: "Empowering People", 
    desc: "We don't just hire riders; we build Champions. We don't just list vendors; we accelerate local businesses.",
    color: "bg-blue-50 text-blue-600"
  },
  { 
    icon: <Target className="w-6 h-6" />, 
    title: "AI-Driven Precision", 
    desc: "Our technology doesn't just predict routes; it masters the urban landscape to eliminate friction.",
    color: "bg-purple-50 text-purple-600"
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-[#0F3D2E] mb-12 font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        {/* Brand Hero */}
        <div className="relative mb-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F7941D] text-xs font-black uppercase tracking-widest mb-8 animate-in slide-in-from-left duration-700">
              <Sparkles className="w-3 h-3" /> Logistics Reimagined
            </div>
            <h1 className="text-6xl lg:text-[9rem] font-[900] text-[#0F3D2E] leading-[0.85] tracking-tighter mb-12">
              We are the <span className="text-[#F7941D]">Future</span> of Flow.
            </h1>
            <p className="text-2xl lg:text-3xl text-slate-500 leading-tight font-medium max-w-2xl">
              Nibbo is more than a delivery app. We are the digital infrastructure connecting the desires of a city to the hands of its people.
            </p>
          </div>
          
          {/* Absolute decorative element */}
          <div className="hidden lg:block absolute -top-10 -right-20 w-96 h-96 opacity-10 pointer-events-none">
             <Rocket className="w-full h-full text-[#0F3D2E] rotate-12" />
          </div>
        </div>

        {/* The Manifesto Section */}
        <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white mb-40 relative overflow-hidden group">
           <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#F7941D 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           </div>
           <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
              <Quote className="w-16 h-16 text-[#F7941D] mx-auto opacity-50" />
              <h2 className="text-3xl lg:text-5xl font-black leading-tight italic">
                "Our mission is to make logistics invisible. When the things you need move effortlessly, you have more time for the things you love."
              </h2>
              <div className="flex items-center justify-center gap-4 text-orange-200/60 font-black uppercase tracking-widest text-sm">
                <span>Speed</span>
                <div className="w-1 h-1 rounded-full bg-orange-200/30"></div>
                <span>Trust</span>
                <div className="w-1 h-1 rounded-full bg-orange-200/30"></div>
                <span>Precision</span>
              </div>
           </div>
        </div>

        {/* Heritage Section (Abeokuta Focus) */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
           <div className="relative">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1590038767624-dac5740a997b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Abeokuta City" 
                  className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/80 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                   <div className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs">
                     <MapPin className="w-4 h-4 text-[#F7941D]" /> Our Roots
                   </div>
                   <h3 className="text-3xl text-white font-black">Born in the Ancient City.</h3>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 glass-morphism p-8 rounded-[2.5rem] border-slate-200 hidden md:block">
                 <div className="text-4xl font-black text-[#0F3D2E]">1st</div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Digital-First Hub</div>
              </div>
           </div>
           <div className="space-y-6">
              <h2 className="text-4xl font-black text-[#0F3D2E]">Abeokuta's Digital Pulse.</h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                We chose Abeokuta as our launchpad because of its unique blend of history and untapped modern energy. From the rocky heights of Olumo to the bustling markets of Kuto, we've mapped every street to ensure Nibbo feels like a local friend, not just a service.
              </p>
              <div className="flex gap-4">
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-black text-[#F7941D]">100%</span>
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">City Coverage</span>
                 </div>
                 <div className="w-px h-10 bg-slate-100 mt-2"></div>
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-black text-[#F7941D]">15min</span>
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Avg Response</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Value Grid */}
        <div className="mb-40">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-4xl font-black text-[#0F3D2E]">Our Core Values</h2>
             <p className="text-slate-500 font-medium">The principles that keep us moving at Nibbo speed.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className={`w-16 h-16 ${val.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  {val.icon}
                </div>
                <h4 className="text-xl font-black text-[#0F3D2E] mb-4">{val.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Founders Section */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
                <div className="text-[#F7941D] font-black uppercase tracking-widest text-xs mb-4">Leadership</div>
                <h2 className="text-5xl font-black text-[#0F3D2E]">Architects of Efficiency.</h2>
             </div>
             <p className="text-slate-500 font-medium max-w-sm">
                The minds engineering the future of hyper-local logistics in Africa.
             </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
             {/* CEO */}
             <div className="group/ceo">
                <div className="relative rounded-[4rem] overflow-hidden mb-10 shadow-2xl aspect-[4/5] bg-slate-100">
                   <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Oladeinde Segun" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/ceo:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E] via-transparent to-transparent opacity-80"></div>
                   <div className="absolute bottom-12 left-12 right-12 text-white">
                      <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Chief Executive Officer</div>
                      <h3 className="text-4xl font-black">Oladeinde Segun</h3>
                   </div>
                </div>
                <div className="space-y-6 px-4">
                   <p className="text-xl text-slate-500 leading-relaxed font-medium">
                      "Hyper-local logistics isn't about moving boxes; it's about solving the problem of distance. We are reclaiming time for our city's residents."
                   </p>
                   <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-[#F7941D] hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                      <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-[#F7941D] hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
                   </div>
                </div>
             </div>

             {/* CTO */}
             <div className="group/cto lg:translate-y-24">
                <div className="relative rounded-[4rem] overflow-hidden mb-10 shadow-2xl aspect-[4/5] bg-slate-100">
                   <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
                    alt="Bankole Ebenezer" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/cto:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E] via-transparent to-transparent opacity-80"></div>
                   <div className="absolute bottom-12 left-12 right-12 text-white">
                      <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">Chief Technology Officer</div>
                      <h3 className="text-4xl font-black">Bankole Ebenezer</h3>
                   </div>
                </div>
                <div className="space-y-6 px-4">
                   <p className="text-xl text-slate-500 leading-relaxed font-medium">
                      "Our algorithms are the heart of Nibbo. We are transforming the chaos of city traffic into an elegant dance of optimized delivery."
                   </p>
                   <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-[#0F3D2E] hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                      <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-[#0F3D2E] hover:text-white transition-all"><Github className="w-5 h-5" /></a>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Dashboard-style Stats */}
        <div className="mt-64 bg-[#0F3D2E] rounded-[4rem] p-12 lg:p-24 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
              <Map className="w-full h-full" />
           </div>
           
           <div className="relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {[
                   { icon: <Package />, value: "5M+", label: "Delivered", color: "text-orange-400" },
                   { icon: <Store />, value: "12k", label: "Partners", color: "text-emerald-400" },
                   { icon: <Smartphone />, value: "2M+", label: "Active Users", color: "text-blue-400" },
                   { icon: <Award />, value: "4.9", label: "Avg Rating", color: "text-purple-400" }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-4">
                      <div className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center ${stat.color}`}>
                         {React.cloneElement(stat.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                      </div>
                      <div>
                         <div className="text-5xl font-black text-white">{stat.value}</div>
                         <div className="text-xs font-black uppercase text-white/40 tracking-widest">{stat.label}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* CTA */}
        <div className="mt-40 text-center space-y-12">
           <h2 className="text-4xl lg:text-7xl font-black text-[#0F3D2E] leading-none">
             Ready to join <br /> the <span className="text-[#F7941D]">Movement?</span>
           </h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#0F3D2E] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                Download App <ArrowRight className="w-6 h-6" />
              </button>
              <button className="bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all active:scale-95">
                Become a Partner
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};