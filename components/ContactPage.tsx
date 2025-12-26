
import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export const ContactPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-12 font-black transition-all group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1" /> Back
        </button>
        <div className="space-y-8 mb-16">
          <h1 className="text-5xl lg:text-7xl font-black text-[#0F3D2E] leading-tight">Get in touch.</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">Have a question or feedback? We'd love to hear from you. Our team is here to help 24/7.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
           <div className="space-y-8">
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#F7941D] flex-shrink-0"><Mail className="w-5 h-5" /></div>
                 <div>
                    <h4 className="font-black text-slate-800">Support Email</h4>
                    <p className="text-slate-500">hello@nibbo.app</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0"><Phone className="w-5 h-5" /></div>
                 <div>
                    <h4 className="font-black text-slate-800">Call Us</h4>
                    <p className="text-slate-500">+234 (0) 800-NIBBO-GO</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                 <div>
                    <h4 className="font-black text-slate-800">Office Hub</h4>
                    <p className="text-slate-500">Ibara, Abeokuta, Ogun State</p>
                 </div>
              </div>
           </div>

           <form className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-[#F7941D] outline-none font-bold" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-[#F7941D] outline-none font-bold" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:ring-2 focus:ring-[#F7941D] outline-none font-bold resize-none"></textarea>
              <button className="w-full nibbo-gradient text-white py-5 rounded-2xl font-black shadow-xl flex items-center justify-center gap-2">
                 <Send className="w-5 h-5" /> Send Message
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};
