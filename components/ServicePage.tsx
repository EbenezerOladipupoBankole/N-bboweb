
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Star, Clock, ChevronRight, Zap, ShieldCheck, MapPin, Search, ShoppingBag, Utensils, Package, Plus, Minus, ShoppingCart, X, Info, Filter } from 'lucide-react';
import { SERVICES } from '../constants';

interface ServicePageProps {
  serviceId: string;
  onBack: () => void;
  cart: any[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
}

const MENU_DATA: Record<string, any[]> = {
  "Chicken Republic": [
    { id: 'cr1', name: "Citizens Meal", desc: "Fried Rice, 1pc Chicken and Coleslaw", price: 3500, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400" },
    { id: 'cr2', name: "Refuel Max", desc: "Jollof Rice with 1pc Chicken and a beverage", price: 2800, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&q=80&w=400" },
    { id: 'cr3', name: "Chicken Pie", desc: "Flaky crust with savory chicken filling", price: 900, img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=400" },
    { id: 'cr4', name: "Zappy Burger", desc: "Crunchy chicken fillet with spicy sauce", price: 2500, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=400" }
  ],
  "Foodco Eatery & Bakery": [
    { id: 'fc1', name: "Special Family Loaf", desc: "Freshly baked sweet milk bread", price: 1200, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
    { id: 'fc2', name: "Meat Pie (Classic)", desc: "Rich buttery crust with minced meat", price: 850, img: "https://images.unsplash.com/photo-1619149600530-b099984247d1?auto=format&fit=crop&q=80&w=400" },
    { id: 'fc3', name: "Whole Grilled Chicken", desc: "Spiced and slow-roasted to perfection", price: 7500, img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=400" }
  ],
  "Foodco (Ibara)": [
    { id: 'fci1', name: "Kellogg's Corn Flakes", desc: "450g Pack", price: 4200, img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400" },
    { id: 'fci2', name: "Peak Milk Powder", desc: "400g Sachet", price: 3800, img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400" },
    { id: 'fci3', name: "Golden Morn", desc: "600g Large Pack", price: 2500, img: "https://images.unsplash.com/photo-1586444248902-2f64eddf13cf?auto=format&fit=crop&q=80&w=400" }
  ],
  "Vanguard Pharmacy": [
    { id: 'vp1', name: "Panadol Extra", desc: "Pack of 10 tablets", price: 1500, img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400" },
    { id: 'vp2', name: "Emzor Paracetamol", desc: "Pack of 12 tablets", price: 500, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=400" },
    { id: 'vp3', name: "Vitamin C (1000mg)", desc: "Effervescent tablets - 20 count", price: 4500, img: "https://images.unsplash.com/photo-1616671285441-1f600f13c235?auto=format&fit=crop&q=80&w=400" }
  ],
  "Precious Pharmacy": [
    { id: 'pp1', name: "Multivitamins Syrup", desc: "Kids health boost - 200ml", price: 2800, img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400" },
    { id: 'pp2', name: "Hand Sanitizer (Purell)", desc: "Travel size 50ml", price: 1200, img: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=400" }
  ],
  "Green Legacy Resort (OOPL)": [
    { id: 'gl1', name: "Grilled Fish & Plantain", desc: "Large Catfish with fried ripe plantain", price: 8500, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400" },
    { id: 'gl2', name: "Special Fried Rice", desc: "Garnished with shrimp and vegetables", price: 4500, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=400" }
  ]
};

const MOCK_DATA: Record<string, any> = {
  food: {
    title: "Best Eateries in Abeokuta",
    items: [
      { name: "Chicken Republic", rating: 4.5, time: "15-20 min", location: "Panseke", img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400" },
      { name: "Green Legacy Resort (OOPL)", rating: 4.9, time: "20-30 min", location: "Oke-Mosan", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400" },
      { name: "Foodco Eatery & Bakery", rating: 4.8, time: "15-25 min", location: "Ibara", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400" },
      { name: "Amala Halal", rating: 4.8, time: "15-25 min", location: "Kuto", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=400" },
      { name: "Gourmet Bites", rating: 4.7, time: "25-35 min", location: "Ibara", img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80&w=400" },
      { name: "Iwe Iroyin Kitchen", rating: 4.4, time: "10-20 min", location: "Oke-Ilewo", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  grocery: {
    title: "Fresh Groceries & Supermarts",
    items: [
      { name: "Foodco Supermarket", rating: 4.9, time: "15-30 min", location: "Ibara", img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400" },
      { name: "Shoprite (Abeokuta Mall)", rating: 4.7, time: "30-45 min", location: "Oke-Mosan", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" },
      { name: "Nibbo Fresh Mart", rating: 4.9, time: "15-20 min", location: "Kuto", img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400" },
      { name: "Pansheke Stores", rating: 4.3, time: "25-40 min", location: "Panseke", img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  pharmacy: {
    title: "Top Pharmacies in Abeokuta",
    items: [
      { name: "Vanguard Pharmacy", rating: 4.9, time: "15-25 min", location: "Ibara/Panseke", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=400" },
      { name: "Precious Pharmacy", rating: 4.8, time: "10-20 min", location: "Ibara", img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400" },
      { name: "Wonderful Direct Pharmacy", rating: 4.7, time: "20-30 min", location: "Kuto", img: "https://images.unsplash.com/photo-1631549916768-4119b255f946?auto=format&fit=crop&q=80&w=400" },
      { name: "Able God Pharmacy", rating: 4.6, time: "15-25 min", location: "Adigbe", img: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  errands: {
    title: "Popular Shopping Hubs in Abeokuta",
    hubs: [
      { name: "Foodco (Ibara)", specialty: "Bakery, Supermarket & Pharmacy", location: "Ibara", rating: 4.9, img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400" },
      { name: "Kuto Market", specialty: "Fresh Foodstuff & Bulk Goods", location: "Kuto, Abeokuta", rating: 4.7, img: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=400" },
      { name: "Omida Market", specialty: "Groceries & Daily Essentials", location: "Omida, Ibara", rating: 4.6, img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=400" },
      { name: "OOPL Wildlife Park & Shops", specialty: "Gifts, Cinema & Upscale Retail", location: "Oke-Mosan", rating: 4.9, img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400" }
    ]
  }
};

const RATING_FILTERS = [
  { label: 'All', value: 0 },
  { label: '4.0+', value: 4.0 },
  { label: '4.5+', value: 4.5 },
  { label: '4.8+', value: 4.8 }
];

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack, cart, addToCart, removeFromCart }) => {
  const [selectedStore, setSelectedStore] = useState<any | null>(null);
  const [minRating, setMinRating] = useState<number>(0);
  const service = SERVICES.find(s => s.id === serviceId);
  const data = MOCK_DATA[serviceId] || { title: "Service Details", items: [] };

  const rawItems = serviceId === 'errands' ? data.hubs : data.items;
  const filteredItems = useMemo(() => {
    return (rawItems || []).filter((item: any) => (item.rating || 4.5) >= minRating);
  }, [rawItems, minRating]);

  // Price calculations including fees for transparency
  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);
  
  const deliveryFee = subtotal > 0 ? 500 : 0;
  const serviceFee = subtotal > 0 ? 200 : 0;
  const finalTotal = subtotal + deliveryFee + serviceFee;

  const handleBack = () => {
    if (selectedStore) {
      setSelectedStore(null);
    } else {
      onBack();
    }
  };

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white pt-24 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-8 font-bold transition-all group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          {selectedStore ? `Back to ${service.name}` : 'Back to Home'}
        </button>

        {!selectedStore ? (
          <>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
              <div className="flex-1 space-y-6">
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                  {service.icon}
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-[#0F3D2E] leading-tight">
                  {service.name}
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                  {service.description} The most reliable partners in Abeokuta, delivered in minutes.
                </p>
              </div>
              
              <div className="w-full lg:w-96 bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                 <div className="relative mb-6">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                   <input 
                     type="text" 
                     placeholder={`Search in ${service.name.split(' ')[1]}...`}
                     className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#F7941D] font-bold"
                   />
                 </div>
                 <h3 className="text-xl font-bold mb-4">Abeokuta Neighborhoods</h3>
                 <div className="flex flex-wrap gap-2">
                    {['Oke-Mosan', 'Kuto', 'Ibara', 'Pansheke', 'Camp'].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-black text-[#0F3D2E] uppercase cursor-pointer hover:border-[#F7941D] transition-colors">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
            </div>

            {/* Content List */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-black text-[#0F3D2E]">{data.title}</h2>
                  <p className="text-slate-500 font-medium">Available for immediate delivery in Abeokuta</p>
                </div>
                
                {/* Rating Filter Chips */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest mr-2">
                    <Filter className="w-3 h-3" /> Filter By
                  </div>
                  {RATING_FILTERS.map((filter) => (
                    <button
                      key={filter.label}
                      onClick={() => setMinRating(filter.value)}
                      className={`px-5 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 border-2 ${
                        minRating === filter.value 
                        ? 'bg-[#0F3D2E] text-white border-[#0F3D2E] shadow-lg shadow-green-900/20' 
                        : 'bg-white text-slate-600 border-slate-100 hover:border-slate-300'
                      }`}
                    >
                      {filter.value > 0 && <Star className={`w-3 h-3 ${minRating === filter.value ? 'fill-white' : 'fill-slate-400'}`} />}
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {filteredItems.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item: any, idx: number) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedStore(item)}
                      className="group cursor-pointer bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="relative h-60">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 font-black text-xs shadow-xl">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {item.rating || '4.5'}
                        </div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          <span className="bg-[#0F3D2E]/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl">
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="text-2xl font-black text-[#0F3D2E] group-hover:text-[#F7941D] transition-colors">{item.name}</h4>
                            <p className="text-sm text-slate-400 font-bold mt-1">
                              {item.specialty || 'Fast Delivery'} • {item.time || '15-25 min'}
                            </p>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200">
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                      <Search className="w-10 h-10 text-slate-200" />
                   </div>
                   <h3 className="text-2xl font-black text-slate-400">No stores found with {minRating}+ rating</h3>
                   <p className="text-slate-400 mt-2 font-medium">Try lowering your filter to see more options in Abeokuta.</p>
                   <button 
                    onClick={() => setMinRating(0)}
                    className="mt-8 text-[#0F3D2E] font-black underline underline-offset-8 decoration-orange-400"
                   >
                     Reset Filters
                   </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Detailed Store Menu View */
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="relative rounded-[3.5rem] overflow-hidden mb-12 shadow-2xl h-80 lg:h-96">
               <img src={selectedStore.img} alt={selectedStore.name} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
               <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div className="text-white space-y-2">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7941D] rounded-full text-[10px] font-black uppercase tracking-widest">
                     Verified Partner
                   </div>
                   <h1 className="text-4xl lg:text-6xl font-black">{selectedStore.name}</h1>
                   <div className="flex items-center gap-4 text-white/80 font-bold">
                     <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {selectedStore.location}</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                     <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400 border-none" /> {selectedStore.rating || '4.5'} Rating</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                     <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {selectedStore.time || '20-30 min'}</span>
                   </div>
                 </div>
               </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-12">
               {/* Menu Section */}
               <div className="lg:col-span-3 space-y-12">
                 <div>
                   <h3 className="text-2xl font-black text-[#0F3D2E] mb-8 flex items-center gap-3">
                     <Utensils className="w-6 h-6 text-[#F7941D]" /> 
                     {serviceId === 'pharmacy' ? 'Medical Inventory' : serviceId === 'grocery' ? 'Store Items' : 'Menu'}
                   </h3>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      {(MENU_DATA[selectedStore.name] || []).length > 0 ? (
                        MENU_DATA[selectedStore.name].map((product) => (
                          <div key={product.id} className="bg-white rounded-3xl border border-slate-100 p-5 flex gap-5 hover:shadow-xl transition-all group">
                             <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                               <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                             </div>
                             <div className="flex-1 flex flex-col justify-between py-1">
                               <div>
                                 <h4 className="text-lg font-black text-[#0F3D2E]">{product.name}</h4>
                                 <p className="text-xs text-slate-400 font-medium mt-1 line-clamp-2">{product.desc}</p>
                               </div>
                               <div className="flex items-center justify-between mt-4">
                                  <span className="text-xl font-black text-[#F7941D]">₦{product.price.toLocaleString()}</span>
                                  <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                                    {cart.find(c => c.id === product.id) ? (
                                      <>
                                        <button onClick={() => removeFromCart(product.id)} className="p-1.5 hover:bg-white rounded-xl text-slate-400 hover:text-red-500 transition-all"><Minus className="w-4 h-4" /></button>
                                        <span className="text-sm font-black w-4 text-center">{cart.find(c => c.id === product.id)?.quantity}</span>
                                        <button onClick={() => addToCart(product)} className="p-1.5 hover:bg-white rounded-xl text-[#F7941D] transition-all"><Plus className="w-4 h-4" /></button>
                                      </>
                                    ) : (
                                      <button 
                                        onClick={() => addToCart(product)}
                                        className="bg-[#0F3D2E] text-white p-2.5 rounded-xl hover:bg-slate-800 transition-all shadow-lg active:scale-90"
                                      >
                                        <Plus className="w-5 h-5" />
                                      </button>
                                    )}
                                  </div>
                               </div>
                             </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 p-12 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                           <X className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                           <h4 className="text-xl font-black text-slate-400">Inventory loading or unavailable</h4>
                           <p className="text-sm text-slate-400 mt-2">Check back in a few minutes or contact support.</p>
                        </div>
                      )}
                   </div>
                 </div>
               </div>

               {/* Cart Summary (Right Sidebar) */}
               <div className="hidden lg:block">
                  <div className="sticky top-32 bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
                    <h4 className="text-xl font-black text-[#0F3D2E] mb-6 flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" /> Your Cart
                    </h4>
                    {cart.length > 0 ? (
                      <div className="space-y-6">
                        <div className="max-h-80 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                          {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center text-sm">
                              <div className="flex-1 pr-4">
                                <div className="font-bold text-slate-800 truncate">{item.name}</div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase">{item.quantity} x ₦{item.price.toLocaleString()}</div>
                              </div>
                              <span className="font-black text-[#0F3D2E]">₦{(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-6 border-t border-slate-200 space-y-3">
                          <div className="flex justify-between text-sm font-bold text-slate-500">
                             <span>Subtotal</span>
                             <span>₦{subtotal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm font-bold text-slate-600">
                             <span className="flex items-center gap-1.5">Delivery Fee <Info className="w-3 h-3 opacity-50" /></span>
                             <span>₦{deliveryFee.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm font-bold text-slate-500">
                             <span>Service Fee</span>
                             <span>₦{serviceFee.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-xl font-black text-[#0F3D2E] pt-2">
                             <span>Total</span>
                             <span>₦{finalTotal.toLocaleString()}</span>
                          </div>
                        </div>
                        <button className="w-full bg-[#0F3D2E] text-white py-5 rounded-3xl font-black shadow-xl hover:bg-slate-800 transition-all active:scale-95">
                          Checkout (₦{finalTotal.toLocaleString()})
                        </button>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                            <ShoppingBag className="w-8 h-8 text-slate-200" />
                         </div>
                         <p className="text-slate-400 font-bold">Your cart is empty</p>
                         <p className="text-xs text-slate-300 mt-1">Add items from the menu to get started.</p>
                      </div>
                    )}
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* Floating Mobile Cart Bar */}
        {cart.length > 0 && (
          <div className="lg:hidden fixed bottom-8 left-4 right-4 z-[100] animate-in slide-in-from-bottom-8 duration-500">
            <button className="w-full nibbo-gradient p-5 rounded-[2rem] shadow-2xl shadow-orange-500/30 text-white flex items-center justify-between group overflow-hidden">
               <div className="relative z-10 flex items-center gap-4">
                 <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center font-black text-lg backdrop-blur-md">
                   {cartCount}
                 </div>
                 <div className="text-left">
                   <div className="text-[10px] font-black uppercase tracking-widest opacity-70">View Cart (Inc. Fees)</div>
                   <div className="text-lg font-black">Checkout</div>
                 </div>
               </div>
               <div className="relative z-10 text-right">
                  <div className="text-2xl font-black">₦{finalTotal.toLocaleString()}</div>
               </div>
               {/* Animated background element */}
               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform">
                  <ShoppingCart className="w-32 h-32" />
               </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
