
import React from 'react';
import { ArrowLeft, FileText, Gavel, Shield } from 'lucide-react';

export const LegalPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-32 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-12 font-black transition-all group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1" /> Back
        </button>
        
        <h1 className="text-5xl lg:text-7xl font-black text-[#0F3D2E] mb-16">Legal & Privacy.</h1>

        <div className="space-y-16">
           <section>
              <div className="flex items-center gap-4 mb-6">
                 <Gavel className="w-6 h-6 text-[#F7941D]" />
                 <h2 className="text-3xl font-black text-slate-800">Terms of Service</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                 <p>By using the Nibbo platform, you agree to comply with our core terms regarding order placement, service fees, and user conduct.</p>
                 <p>Nibbo acts as an intermediary for logistics services. While we take every precaution to ensure quality, the fulfillment of specific product qualities (e.g., taste of food) remains the responsibility of our partner vendors.</p>
                 <p>Cancellations made after processing has begun may incur a fee to compensate our partners and Champions for their time.</p>
              </div>
           </section>

           <section>
              <div className="flex items-center gap-4 mb-6">
                 <Shield className="w-6 h-6 text-emerald-600" />
                 <h2 className="text-3xl font-black text-slate-800">Privacy Policy</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                 <p>Your data is yours. We only collect location and contact information necessary to fulfill your deliveries and improve our route algorithms.</p>
                 <p>We never sell your personal information to third parties. All payment processing is handled via secure, encrypted gateways (Paystack/Flutterwave).</p>
                 <p>You can request account deletion and data erasure at any time via the Help Center.</p>
              </div>
           </section>

           <section>
              <div className="flex items-center gap-4 mb-6">
                 <FileText className="w-6 h-6 text-blue-600" />
                 <h2 className="text-3xl font-black text-slate-800">Merchant Agreements</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">Partner merchants agree to maintain the highest hygiene and quality standards. Specific payout cycles and commission structures are detailed in your individual merchant dashboard contract.</p>
           </section>
        </div>
      </div>
    </div>
  );
};
