
import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Phone, MessageCircle } from 'lucide-react';

export const LiveTrackingPreview: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[8px] border-slate-900 aspect-[9/16] font-sans">
      {/* Map Background Simulation */}
      <div className="absolute inset-0 bg-[#f0f4f8] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(#0F3D2E 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
        
        {/* Animated Route Line */}
        <svg className="absolute inset-0 w-full h-full">
          <path 
            d="M 50 400 Q 150 350 250 200" 
            fill="none" 
            stroke="#e2e8f0" 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
          <path 
            d="M 50 400 Q 150 350 250 200" 
            fill="none" 
            stroke="#F7941D" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeDasharray="400"
            strokeDashoffset={400 - (progress * 4)}
          />
        </svg>

        {/* Destination Pin */}
        <div className="absolute top-[180px] left-[240px] animate-bounce">
          <MapPin className="w-8 h-8 text-[#0F3D2E] fill-[#0F3D2E]/20" />
        </div>

        {/* Rider Icon */}
        <div 
          className="absolute transition-all duration-100 ease-linear"
          style={{ 
            left: `${50 + (progress * 2)}px`, 
            top: `${400 - (progress * 2)}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="bg-[#F7941D] p-2 rounded-full shadow-lg border-2 border-white">
            <Navigation className="w-4 h-4 text-white rotate-45" />
          </div>
        </div>
      </div>

      {/* Top Floating Status */}
      <div className="absolute top-10 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
          <Clock className="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Arrival</div>
          <div className="text-lg font-black text-[#0F3D2E]">8 - 12 mins</div>
        </div>
      </div>

      {/* Bottom Order Card */}
      <div className="absolute bottom-4 left-4 right-4 bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-100 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="text-sm font-black text-[#0F3D2E]">Musa (Champion)</div>
              <div className="text-[10px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" /> Verified Rider
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-[#0F3D2E]"><MessageCircle className="w-5 h-5" /></button>
            <button className="p-2 bg-[#0F3D2E] rounded-xl text-white"><Phone className="w-5 h-5" /></button>
          </div>
        </div>
        
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#F7941D] transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {progress < 40 ? "Rider is at the store" : progress < 80 ? "Rider is on the way" : "Rider is nearby"}
        </div>
      </div>
    </div>
  );
};
