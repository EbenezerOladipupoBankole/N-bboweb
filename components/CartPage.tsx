
import React, { useMemo, useState } from 'react';
import { 
  ArrowLeft, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, 
  Truck, CreditCard, ChevronRight, Banknote, CheckCircle2, Wallet,
  Tag, XCircle
} from 'lucide-react';

interface CartPageProps {
  cart: any[];
  onBack: () => void;
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
  onExplore: () => void;
}

type PaymentMethod = 'online' | 'cod';

export const CartPage: React.FC<CartPageProps> = ({ cart, onBack, addToCart, removeFromCart, onExplore }) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('online');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  
  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);
  const deliveryFee = subtotal > 0 ? 500 : 0;
  const serviceFee = subtotal > 0 ? 200 : 0;
  
  const handleApplyPromo = () => {
    setPromoError('');
    const code = promoCode.toUpperCase().trim();
    
    if (code === 'NIBBOFIRST') {
      const discount = subtotal * 0.5; // 50% discount as mentioned in notifications
      setAppliedDiscount(discount);
      setIsPromoApplied(true);
    } else if (code === 'WELCOME') {
      setAppliedDiscount(1000); // Fixed ₦1,000 discount
      setIsPromoApplied(true);
    } else if (!code) {
      setPromoError('Please enter a code');
    } else {
      setPromoError('Invalid promo code');
      setAppliedDiscount(0);
      setIsPromoApplied(false);
    }
  };

  const handleRemovePromo = () => {
    setPromoCode('');
    setAppliedDiscount(0);
    setIsPromoApplied(false);
    setPromoError('');
  };

  const total = useMemo(() => {
    return Math.max(0, subtotal + deliveryFee + serviceFee - appliedDiscount);
  }, [subtotal, deliveryFee, serviceFee, appliedDiscount]);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-12 font-black transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Continue Shopping
        </button>

        <h1 className="text-4xl lg:text-5xl font-black text-[#0F3D2E] mb-12">Your Basket</h1>

        {cart.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-[2rem] p-6 flex flex-col sm:flex-row items-center gap-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 bg-slate-100 rounded-2xl flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-[#0F3D2E] font-black text-2xl bg-orange-50">
                      {item.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-black text-slate-800">{item.name}</h3>
                    <p className="text-[#F7941D] font-bold">₦{item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-white rounded-xl text-slate-400 hover:text-red-500 transition-all"
                    >
                      {item.quantity === 1 ? <Trash2 className="w-5 h-5" /> : <Minus className="w-5 h-5" />}
                    </button>
                    <span className="text-lg font-black w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="p-2 hover:bg-white rounded-xl text-[#F7941D] transition-all"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="text-right min-w-[100px]">
                    <p className="text-xl font-black text-[#0F3D2E]">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}

              <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
                    <ShieldCheck className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-black text-emerald-900">Buyer Protection Enabled</h4>
                    <p className="text-sm text-emerald-700/70 font-medium">Your payment is held in escrow until you confirm delivery.</p>
                 </div>
              </div>
            </div>

            {/* Order Summary & Payment */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl sticky top-32">
                <h2 className="text-2xl font-black text-[#0F3D2E] mb-6">Order Summary</h2>
                
                {/* Promo Code Input Section */}
                <div className="mb-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Tag className="w-4 h-4" /> Promo Code
                  </h3>
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <input 
                        type="text" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code..."
                        disabled={isPromoApplied}
                        className={`w-full bg-white border rounded-xl px-4 py-3 text-sm font-bold focus:outline-none transition-all ${isPromoApplied ? 'border-emerald-200 text-emerald-600 bg-emerald-50/50' : 'border-slate-200 focus:ring-2 focus:ring-[#F7941D]'}`}
                      />
                      {isPromoApplied && <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />}
                    </div>
                    {isPromoApplied ? (
                      <button 
                        onClick={handleRemovePromo}
                        className="px-4 py-3 bg-red-50 text-red-500 rounded-xl font-black text-xs hover:bg-red-100 transition-all uppercase tracking-tight"
                      >
                        Remove
                      </button>
                    ) : (
                      <button 
                        onClick={handleApplyPromo}
                        className="px-4 py-3 bg-[#0F3D2E] text-white rounded-xl font-black text-xs hover:bg-slate-800 transition-all uppercase tracking-tight"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                  {promoError && (
                    <div className="mt-2 flex items-center gap-1 text-red-500 text-[10px] font-black uppercase tracking-wider">
                      <XCircle className="w-3 h-3" /> {promoError}
                    </div>
                  )}
                  {isPromoApplied && (
                    <div className="mt-2 text-emerald-600 text-[10px] font-black uppercase tracking-wider">
                      Promotion applied successfully!
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-500 font-bold">
                    <span>Subtotal</span>
                    <span className="text-slate-900 font-black">₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 font-bold">
                    <span>Delivery Fee</span>
                    <span className="text-slate-900 font-black">₦{deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 font-bold">
                    <span>Service Fee</span>
                    <span className="text-slate-900 font-black">₦{serviceFee.toLocaleString()}</span>
                  </div>
                  {isPromoApplied && (
                    <div className="flex justify-between text-emerald-600 font-bold animate-in fade-in slide-in-from-top-2">
                      <span>Discount Applied</span>
                      <span className="font-black">-₦{appliedDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                    <span className="text-lg font-black text-slate-800">Total</span>
                    <span className="text-3xl font-black text-[#F7941D]">₦{total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Payment Method</h3>
                  
                  <div className="grid gap-3">
                    <button 
                      onClick={() => setPaymentMethod('online')}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left group ${paymentMethod === 'online' ? 'border-[#0F3D2E] bg-emerald-50/30' : 'border-slate-100 hover:border-slate-200'}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${paymentMethod === 'online' ? 'bg-[#0F3D2E] text-white' : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'}`}>
                        <CreditCard className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-black text-slate-800">Online Payment</div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Card, Transfer, USSD</div>
                      </div>
                      {paymentMethod === 'online' && <CheckCircle2 className="w-5 h-5 text-[#0F3D2E]" />}
                    </button>

                    <button 
                      onClick={() => setPaymentMethod('cod')}
                      className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left group ${paymentMethod === 'cod' ? 'border-[#0F3D2E] bg-emerald-50/30' : 'border-slate-100 hover:border-slate-200'}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${paymentMethod === 'cod' ? 'bg-[#0F3D2E] text-white' : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'}`}>
                        <Banknote className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-black text-slate-800">Pay on Delivery</div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Cash or POS</div>
                      </div>
                      {paymentMethod === 'cod' && <CheckCircle2 className="w-5 h-5 text-[#0F3D2E]" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <Truck className="w-4 h-4" /> Delivery to
                  </div>
                  <p className="font-black text-slate-800 leading-tight">
                    Panseke, Abeokuta <br />
                    <span className="text-slate-400 font-medium normal-case">Arriving in 15-20 mins</span>
                  </p>
                </div>

                <button className="w-full nibbo-gradient text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-orange-200 hover:shadow-orange-300 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3">
                  {paymentMethod === 'online' ? <CreditCard className="w-6 h-6" /> : <Wallet className="w-6 h-6" />}
                  {paymentMethod === 'online' ? 'Pay & Order' : 'Confirm Order'}
                </button>
                
                <p className="text-center text-slate-400 text-xs mt-6 font-medium leading-relaxed">
                  By placing your order, you agree to Nibbo's <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[4rem] p-20 text-center shadow-xl border border-slate-100 max-w-4xl mx-auto">
            <div className="w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-10">
              <ShoppingBag className="w-16 h-16 text-slate-200" />
            </div>
            <h2 className="text-3xl font-black text-[#0F3D2E] mb-4">Your basket is empty</h2>
            <p className="text-xl text-slate-500 mb-10 max-w-md mx-auto font-medium">
              Looks like you haven't added anything to your basket yet. Let's find some great deals for you!
            </p>
            <button 
              onClick={onExplore}
              className="nibbo-gradient text-white px-12 py-5 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-3 mx-auto"
            >
              Start Ordering <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
