
import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, Smartphone, Gift } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onViewChange: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
            <button onClick={() => onViewChange('home')} className="hover:opacity-80 transition-opacity">
              <Logo className="invert brightness-200" />
            </button>
            <p className="text-emerald-100/60 text-lg leading-relaxed max-w-sm">
              Making city life seamless. Premium delivery and errand services for the modern professional.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-emerald-900/50 rounded-full text-emerald-300 hover:text-[#F7941D] hover:bg-emerald-800 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#F7941D]">Company</h4>
            <ul className="space-y-4 text-emerald-100/50">
              <li><button onClick={() => onViewChange('about')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">About Us</button></li>
              <li><button onClick={() => onViewChange('referral')} className="flex items-center gap-2 hover:text-[#F7941D] hover:translate-x-1 transition-all duration-300 text-left"><Gift className="w-4 h-4" /> Refer a Friend</button></li>
              <li><button onClick={() => onViewChange('careers')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Careers</button></li>
              <li><button onClick={() => onViewChange('sustainability')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Sustainability</button></li>
              <li><button onClick={() => onViewChange('business')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Nibbo for Business</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#F7941D]">Services</h4>
            <ul className="space-y-4 text-emerald-100/50">
              <li><button onClick={() => onViewChange('food')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Restaurants</button></li>
              <li><button onClick={() => onViewChange('grocery')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Groceries</button></li>
              <li><button onClick={() => onViewChange('errands')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Errands</button></li>
              <li><button onClick={() => onViewChange('errands')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Concierge</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#F7941D]">Support</h4>
            <ul className="space-y-4 text-emerald-100/50">
              <li><button onClick={() => onViewChange('help')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Help Center</button></li>
              <li><button onClick={() => onViewChange('safety')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Safety</button></li>
              <li><button onClick={() => onViewChange('contact')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Contact Us</button></li>
              <li><button onClick={() => onViewChange('legal')} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-left">Legal</button></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-[#F7941D]">Install App</h4>
            <div className="space-y-4">
               <button className="w-full bg-emerald-900/40 border border-emerald-800/50 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-emerald-800/60 hover:border-emerald-700/50 hover:scale-[1.02] transition-all duration-300 active:scale-95 group">
                 <Smartphone className="w-6 h-6 text-[#F7941D] group-hover:rotate-12 transition-transform duration-300" />
                 <div className="text-left">
                   <div className="text-[10px] uppercase text-emerald-400 font-bold">Download on</div>
                   <div className="text-sm font-bold">App Store</div>
                 </div>
               </button>
               <button className="w-full bg-emerald-900/40 border border-emerald-800/50 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-emerald-800/60 hover:border-emerald-700/50 hover:scale-[1.02] transition-all duration-300 active:scale-95 group">
                 <Smartphone className="w-6 h-6 text-[#F7941D] group-hover:rotate-12 transition-transform duration-300" />
                 <div className="text-left">
                   <div className="text-[10px] uppercase text-emerald-400 font-bold">Get it on</div>
                   <div className="text-sm font-bold">Google Play</div>
                 </div>
               </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/30 text-sm">© 2024 Nibbo Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-8 text-sm text-emerald-100/30">
            <button onClick={() => onViewChange('legal')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onViewChange('legal')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => onViewChange('legal')} className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
