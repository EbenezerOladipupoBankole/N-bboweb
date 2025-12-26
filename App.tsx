
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { SmartAssistant } from './components/SmartAssistant';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { PlayStoreMockup } from './components/PlayStoreMockup';
import { ServicePage } from './components/ServicePage';
import { AboutPage } from './components/AboutPage';
import { ReferralPage } from './components/ReferralPage';
import { RiderPage } from './components/RiderPage';
import { MerchantPage } from './components/MerchantPage';
import { BusinessPage } from './components/BusinessPage';
import { CitiesSection } from './components/CitiesSection';
import { TrustSection } from './components/TrustSection';
import { LiveTrackingPreview } from './components/LiveTrackingPreview';
import { TrackingPage } from './components/TrackingPage';
import { CartPage } from './components/CartPage';
import { CareersPage } from './components/CareersPage';
import { SustainabilityPage } from './components/SustainabilityPage';
import { HelpPage } from './components/HelpPage';
import { SafetyPage } from './components/SafetyPage';
import { ContactPage } from './components/ContactPage';
import { LegalPage } from './components/LegalPage';
import { Truck, Store, Briefcase, ChevronRight, Gift, Bell, X, Sparkles, Tag, ShoppingBag, Info, ShieldCheck, Zap } from 'lucide-react';
import { Notification } from './types';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

type ViewType = 'home' | 'about' | 'referral' | 'rider' | 'merchant' | 'business' | 'cart' | 'tracking' | 'careers' | 'sustainability' | 'help' | 'safety' | 'contact' | 'legal' | string;

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'promo',
      title: 'Welcome to Nibbo!',
      message: 'Get 50% off your first delivery with code NIBBOFIRST.',
      timestamp: new Date(Date.now() - 3600000),
      read: false
    },
    {
      id: '2',
      type: 'system',
      title: 'Service Update',
      message: 'Nibbo Go is now fully operational across Abeokuta.',
      timestamp: new Date(Date.now() - 86400000),
      read: true
    }
  ]);
  const [activeToast, setActiveToast] = useState<Notification | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const addToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing?.quantity === 1) {
        return prev.filter(item => item.id !== productId);
      }
      return prev.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item);
    });
  };

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const addNotification = useCallback((notif: Notification) => {
    setNotifications(prev => [notif, ...prev]);
    setActiveToast(notif);
    setTimeout(() => setActiveToast(null), 6000);
  }, []);

  useEffect(() => {
    const services = [
      { title: "New: Nibbo Laundry", msg: "Fresh clothes from Oke-Mosan to Ibara. Try our premium laundry service today!" },
      { title: "Nibbo Pet Care in Abeokuta", msg: "From vet visits to pet shopping, we've got your furry friends covered in the Ancient City." },
      { title: "Introducing Nibbo Concierge", msg: "Bespoke gifting and personal shopping errands now available at your fingertips." },
      { title: "Nibbo Fuel Delivery", msg: "Skip the station in Kuto. We'll bring the fuel to you. Now live in Abeokuta!" }
    ];
    let count = 0;

    const initialTimer = setTimeout(() => {
      const service = services[0];
      const firstNotif: Notification = {
        id: `service-init-${Date.now()}`,
        type: 'service',
        title: service.title,
        message: service.msg,
        timestamp: new Date(),
        read: false
      };
      addNotification(firstNotif);
      count = 1;
    }, 10000);

    const interval = setInterval(() => {
      const service = services[count % services.length];
      const newNotif: Notification = {
        id: `service-${Date.now()}`,
        type: 'service',
        title: service.title,
        message: service.msg,
        timestamp: new Date(),
        read: false
      };
      addNotification(newNotif);
      count++;
    }, 120000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [addNotification]);

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleGoHome = () => setCurrentView('home');
  const handleAboutClick = () => setCurrentView('about');
  const handleCartClick = () => setCurrentView('cart');
  const handleTrackClick = () => setCurrentView('tracking');
  const handleViewChange = (view: ViewType) => setCurrentView(view);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <section className="py-24 bg-white overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                       <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-black uppercase tracking-widest">
                          Operational Magic
                       </div>
                       <h2 className="text-4xl lg:text-6xl font-black text-[#0F3D2E] leading-tight">
                          Experience delivery <br /> in <span className="text-[#F7941D]">HD Clarity.</span>
                       </h2>
                       <p className="text-xl text-slate-500 leading-relaxed font-medium">
                          We don't just deliver; we keep you in the loop. Our high-fidelity tracking system ensures you know exactly where your package is, from the moment it's picked up until it hits your doorstep in Abeokuta.
                       </p>
                       <div className="grid sm:grid-cols-2 gap-8">
                          <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0"><ShieldCheck className="w-5 h-5 text-[#F7941D]" /></div>
                             <div>
                                <h4 className="font-black text-[#0F3D2E]">Secure Pickups</h4>
                                <p className="text-sm text-slate-400">All riders are vetted and monitored.</p>
                             </div>
                          </div>
                          <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0"><Zap className="w-5 h-5 text-emerald-600" /></div>
                             <div>
                                <h4 className="font-black text-[#0F3D2E]">Route Optimization</h4>
                                <p className="text-sm text-slate-400">AI-driven paths for zero delays.</p>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-green-100 rounded-full blur-[120px] opacity-30"></div>
                      <LiveTrackingPreview />
                    </div>
                  </div>
               </div>
            </section>
            <ServicesGrid onServiceSelect={handleViewChange} />
            <SmartAssistant />
            <CitiesSection />
            <section className="py-24 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden group shadow-2xl shadow-orange-200">
                  <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                    <Gift className="w-96 h-96 text-white" />
                  </div>
                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold backdrop-blur-md">
                         Exclusive Rewards
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-black leading-tight">Share Nibbo and get <br /> ₦2,000 for every friend.</h2>
                      <p className="text-xl text-orange-100/80 leading-relaxed max-w-md">Your friends get their first 3 deliveries free when they sign up with your link. It's a win-win.</p>
                      <button 
                        onClick={() => handleViewChange('referral')}
                        className="bg-white text-[#F7941D] px-10 py-5 rounded-3xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
                      >
                        Start Referring <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="hidden lg:flex justify-center">
                      <div className="relative">
                         <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-3xl animate-pulse"></div>
                         <Gift className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-white drop-shadow-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <TrustSection />
            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                  <h2 className="text-4xl lg:text-5xl font-black mb-6">Partner with the fastest</h2>
                  <p className="text-xl text-slate-400 max-w-2xl mx-auto">Join thousands of businesses and individuals growing their income with Nibbo.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { id: 'rider', icon: <Truck />, title: "Rider", text: "Become a Nibbo Champion. Earn competitive rates, choose your hours, and get paid weekly.", link: "Join the fleet" },
                    { id: 'merchant', icon: <Store />, title: "Merchant", text: "Grow your business. Reach thousands of new customers and manage orders with our powerful dashboard.", link: "Register store" },
                    { id: 'business', icon: <Briefcase />, title: "Business", text: "Enterprise logistics. Bulk deliveries, API integration, and dedicated account management.", link: "Nibbo for Business" }
                  ].map((p, i) => (
                    <div 
                      key={i} 
                      onClick={() => handleViewChange(p.id)}
                      className="bg-slate-800/50 backdrop-blur-md p-10 rounded-[3rem] border border-slate-700 hover:border-[#F7941D] transition-all group cursor-pointer"
                    >
                       <div className="w-16 h-16 bg-[#F7941D]/10 rounded-2xl flex items-center justify-center text-[#F7941D] mb-8 group-hover:scale-110 transition-transform">
                          {React.cloneElement(p.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                       </div>
                       <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                       <p className="text-slate-400 leading-relaxed mb-8">{p.text}</p>
                       <div className="flex items-center gap-2 font-bold text-[#F7941D] group-hover:translate-x-2 transition-transform">
                          {p.link} <ChevronRight className="w-5 h-5" />
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <Features />
            <section className="py-24 px-4 overflow-hidden">
              <div className="max-w-6xl mx-auto bg-white rounded-[4rem] p-12 lg:p-20 shadow-2xl relative border border-slate-100 group">
                 <div className="grid lg:grid-cols-2 gap-16 items-center">
                   <div className="text-center lg:text-left space-y-8">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F7941D] text-sm font-bold animate-pulse">
                        Now available on all platforms
                     </div>
                     <h2 className="text-4xl lg:text-6xl font-black text-[#0F3D2E] leading-tight">
                        Ready to experience <br /> Nibbo speed?
                     </h2>
                     <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
                        Join millions of users who rely on Nibbo for their daily essentials and tasks. Download now and get your first 3 deliveries for free.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                       <button className="bg-[#0F3D2E] text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-800 hover:shadow-2xl hover:shadow-green-900/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group/btn">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" className="w-6 h-6 invert transition-transform duration-300 group-hover/btn:scale-110" alt="App Store" />
                          App Store
                       </button>
                       <button className="bg-white text-[#0F3D2E] border-2 border-[#0F3D2E] px-10 py-5 rounded-3xl font-bold text-lg hover:bg-slate-50 hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 group/btn">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" className="h-6 transition-transform duration-300 group-hover/btn:scale-110" alt="Play Store" />
                          Google Play
                       </button>
                     </div>
                   </div>
                   <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-green-100 rounded-full blur-[100px] opacity-40 transition-opacity duration-1000 group-hover:opacity-60"></div>
                      <PlayStoreMockup />
                   </div>
                 </div>
              </div>
            </section>
          </>
        );
      case 'about': return <AboutPage onBack={handleGoHome} />;
      case 'referral': return <ReferralPage onBack={handleGoHome} />;
      case 'rider': return <RiderPage onBack={handleGoHome} />;
      case 'merchant': return <MerchantPage onBack={handleGoHome} />;
      case 'business': return <BusinessPage onBack={handleGoHome} />;
      case 'cart': return <CartPage cart={cart} onBack={handleGoHome} addToCart={addToCart} removeFromCart={removeFromCart} onExplore={() => handleViewChange('food')} />;
      case 'tracking': return <TrackingPage onBack={handleGoHome} />;
      case 'careers': return <CareersPage onBack={handleGoHome} />;
      case 'sustainability': return <SustainabilityPage onBack={handleGoHome} />;
      case 'help': return <HelpPage onBack={handleGoHome} />;
      case 'safety': return <SafetyPage onBack={handleGoHome} />;
      case 'contact': return <ContactPage onBack={handleGoHome} />;
      case 'legal': return <LegalPage onBack={handleGoHome} />;
      default:
        return <ServicePage serviceId={currentView} onBack={handleGoHome} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        onLogoClick={handleGoHome} 
        onAboutClick={handleAboutClick} 
        onCartClick={handleCartClick}
        onServiceSelect={handleViewChange}
        notifications={notifications}
        onMarkAllAsRead={handleMarkAllAsRead}
        onClearNotifications={handleClearNotifications}
        cartCount={cartCount}
      />
      
      <div className="fixed top-24 right-4 z-[70] w-full max-w-sm pointer-events-none px-4">
        {activeToast && (
          <div className="bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-5 flex gap-4 animate-in slide-in-from-right-full duration-500 pointer-events-auto">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              activeToast.type === 'service' ? 'bg-purple-50 text-purple-600' :
              activeToast.type === 'promo' ? 'bg-orange-50 text-orange-600' :
              activeToast.type === 'order' ? 'bg-emerald-50 text-emerald-600' :
              'bg-blue-50 text-blue-600'
            }`}>
              {activeToast.type === 'service' ? <Sparkles className="w-6 h-6" /> :
               activeToast.type === 'promo' ? <Tag className="w-6 h-6" /> :
               activeToast.type === 'order' ? <ShoppingBag className="w-6 h-6" /> :
               <Bell className="w-6 h-6" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                 <h4 className="font-black text-slate-900 text-sm">{activeToast.title}</h4>
                 <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activeToast.type}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{activeToast.message}</p>
            </div>
            <button onClick={() => setActiveToast(null)} className="p-1 hover:bg-slate-50 rounded-lg self-start transition-colors">
              <X className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        )}
      </div>

      <main>
        {renderCurrentView()}
      </main>

      <Footer onViewChange={handleViewChange} />
      
      {currentView === 'home' && (
        <button 
          onClick={handleTrackClick}
          className="fixed bottom-8 right-8 z-[60] bg-[#0F3D2E] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-90 group"
        >
           <Truck className="w-6 h-6 group-hover:animate-bounce" />
           <span className="absolute right-full mr-4 bg-white text-[#0F3D2E] py-2 px-4 rounded-xl shadow-lg font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Track active order</span>
        </button>
      )}
    </div>
  );
};

export default App;
