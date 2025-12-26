
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, MapPin, Navigation, Clock, ShieldCheck, 
  Phone, MessageSquare, CheckCircle2, Package, 
  Store, User, ChevronRight, Star, ExternalLink, RefreshCw,
  // Fix: Added missing Truck icon import from lucide-react
  Truck
} from 'lucide-react';

interface TrackingPageProps {
  onBack: () => void;
}

export const TrackingPage: React.FC<TrackingPageProps> = ({ onBack }) => {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);

  const statuses = [
    { label: "Order Confirmed", icon: <CheckCircle2 />, desc: "Restaurant has accepted your order." },
    { label: "Kitchen Preparing", icon: <Store />, desc: "Your meal is being carefully prepared." },
    { label: "Rider Picked Up", icon: <Truck className="w-5 h-5" />, desc: "Musa has collected your items." },
    { label: "On the way", icon: <Navigation className="w-5 h-5" />, desc: "Rider is navigating through Abeokuta." },
    { label: "Arriving Soon", icon: <MapPin className="w-5 h-5" />, desc: "Rider is less than 2 minutes away." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 0.2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 20) setStatusIdx(0);
    else if (progress < 45) setStatusIdx(1);
    else if (progress < 70) setStatusIdx(2);
    else if (progress < 90) setStatusIdx(3);
    else setStatusIdx(4);
  }, [progress]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
           <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] font-black transition-all group mr-auto"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </button>
          
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-sm font-black text-slate-600 uppercase tracking-widest">Live Status: {statuses[statusIdx].label}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Main Map View (3/5 width) */}
          <div className="lg:col-span-3 space-y-8">
             <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 h-[600px] relative">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 bg-[#f8fafc]">
                   <div className="absolute inset-0 opacity-10" style={{ 
                      backgroundImage: 'radial-gradient(#0F3D2E 2px, transparent 2px)', 
                      backgroundSize: '40px 40px' 
                   }}></div>
                   
                   {/* Grid Lines */}
                   <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: 'linear-gradient(#0F3D2E 1px, transparent 1px), linear-gradient(90deg, #0F3D2E 1px, transparent 1px)',
                      backgroundSize: '100px 100px'
                   }}></div>

                   {/* Main Route Line */}
                   <svg className="absolute inset-0 w-full h-full">
                      <path 
                        d="M 100 500 Q 300 450 500 150" 
                        fill="none" 
                        stroke="#e2e8f0" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                      />
                      <path 
                        d="M 100 500 Q 300 450 500 150" 
                        fill="none" 
                        stroke="#F7941D" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeDasharray="800"
                        strokeDashoffset={800 - (progress * 8)}
                        className="transition-all duration-100 ease-linear"
                      />
                   </svg>

                   {/* Landmark Indicators */}
                   <div className="absolute top-[20%] left-[10%] text-[10px] font-black text-slate-300 uppercase">Panseke Market</div>
                   <div className="absolute top-[60%] left-[70%] text-[10px] font-black text-slate-300 uppercase">Ibara Underbridge</div>
                   <div className="absolute top-[40%] left-[40%] text-[10px] font-black text-slate-300 uppercase">Kuto Park</div>

                   {/* Store Marker */}
                   <div className="absolute bottom-[80px] left-[80px] flex flex-col items-center">
                      <div className="bg-white p-2 rounded-xl shadow-xl border-2 border-slate-100 mb-2">
                        <Store className="w-5 h-5 text-slate-600" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase">Chicken Republic</span>
                   </div>

                   {/* Home Marker */}
                   <div className="absolute top-[120px] left-[480px] flex flex-col items-center">
                      <div className="bg-[#0F3D2E] p-3 rounded-2xl shadow-2xl animate-bounce">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-black text-[#0F3D2E] mt-2 uppercase tracking-widest">You</span>
                   </div>

                   {/* Rider Indicator */}
                   <div 
                      className="absolute transition-all duration-100 ease-linear"
                      style={{ 
                        left: `${100 + (progress * 4)}px`, 
                        top: `${500 - (progress * 3.5)}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="relative">
                        <div className="absolute -inset-4 bg-orange-500/20 rounded-full animate-ping"></div>
                        <div className="bg-[#F7941D] p-3 rounded-full shadow-2xl border-4 border-white relative z-10">
                          <Navigation className="w-5 h-5 text-white rotate-45" />
                        </div>
                      </div>
                    </div>
                </div>

                {/* Floating Map Controls */}
                <div className="absolute bottom-10 right-10 flex flex-col gap-3">
                   <button className="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-colors border border-slate-100">
                      <ExternalLink className="w-5 h-5 text-slate-600" />
                   </button>
                   <button 
                     onClick={() => setProgress(0)}
                     className="p-4 bg-white rounded-2xl shadow-xl hover:bg-slate-50 transition-colors border border-slate-100"
                   >
                      <RefreshCw className="w-5 h-5 text-slate-600" />
                   </button>
                </div>

                {/* Arrival Card Overlay */}
                <div className="absolute top-10 left-10 p-6 bg-white/95 backdrop-blur-md rounded-[2rem] shadow-2xl border border-slate-100 min-w-[240px]">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#F7941D]">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Arrival</div>
                         <div className="text-2xl font-black text-[#0F3D2E]">{Math.max(1, 12 - Math.floor(progress/8))} mins</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Sidebar Status (2/5 width) */}
          <div className="lg:col-span-2 space-y-8">
             {/* Order Details */}
             <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
                <div className="flex justify-between items-start mb-8">
                   <div>
                      <h2 className="text-2xl font-black text-[#0F3D2E]">Active Order</h2>
                      <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">#NB-9921-X01</p>
                   </div>
                   <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black">
                      PAID
                   </div>
                </div>

                {/* Progress Stepper */}
                <div className="space-y-8 mb-10">
                   {statuses.map((s, idx) => (
                     <div key={idx} className={`flex gap-6 relative ${idx <= statusIdx ? 'opacity-100' : 'opacity-30'}`}>
                        {idx !== statuses.length - 1 && (
                          <div className={`absolute left-5 top-10 w-0.5 h-10 ${idx < statusIdx ? 'bg-orange-500' : 'bg-slate-100'}`}></div>
                        )}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${idx <= statusIdx ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                           {React.cloneElement(s.icon as React.ReactElement<any>, { className: 'w-5 h-5' })}
                        </div>
                        <div>
                           <h4 className={`text-lg font-black transition-colors ${idx <= statusIdx ? 'text-[#0F3D2E]' : 'text-slate-400'}`}>{s.label}</h4>
                           <p className="text-xs text-slate-400 font-medium">{s.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="pt-8 border-t border-slate-100">
                   <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Items in delivery</h4>
                   <div className="flex gap-3">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                         <Package className="w-5 h-5 text-slate-300" />
                      </div>
                      <div>
                         <div className="text-sm font-black text-slate-800">Citizens Meal + 1pc Chicken</div>
                         <div className="text-[10px] text-slate-400 font-bold">Chicken Republic (Panseke)</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Rider Card */}
             <div className="bg-[#0F3D2E] rounded-[3rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                   <User className="w-32 h-32" />
                </div>
                
                <div className="relative z-10 space-y-6">
                   <div className="flex items-center gap-4">
                      <div className="relative">
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=120" className="w-20 h-20 rounded-3xl object-cover border-2 border-white/20" />
                        <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-1.5 rounded-lg border-2 border-[#0F3D2E]">
                           <ShieldCheck className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div>
                         <div className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1">Your Nibbo Champion</div>
                         <h3 className="text-2xl font-black">Musa O.</h3>
                         <div className="flex items-center gap-1 text-white/60 font-black text-xs">
                            <Star className="w-3 h-3 fill-orange-400 text-orange-400 border-none" /> 4.9 Rating
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <button className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95">
                         <MessageSquare className="w-5 h-5 text-orange-400" />
                         <span className="font-bold">Message</span>
                      </button>
                      <button className="bg-orange-500 hover:bg-orange-600 p-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95">
                         <Phone className="w-5 h-5 text-white" />
                         <span className="font-bold">Call Musa</span>
                      </button>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
