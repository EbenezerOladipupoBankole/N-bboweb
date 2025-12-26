
import React from 'react';
import { ArrowLeft, Briefcase, MapPin, Sparkles, ChevronRight, Globe, Users } from 'lucide-react';

export const CareersPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const jobs = [
    { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote / Abeokuta", type: "Full-time" },
    { title: "Operations Manager", team: "Logistics", location: "Abeokuta Hub", type: "Full-time" },
    { title: "Product Designer", team: "Product", location: "Remote", type: "Full-time" },
    { title: "Customer Success Lead", team: "Support", location: "Ibara Hub", type: "Full-time" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-32 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#0F3D2E] mb-12 font-black transition-all group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1" /> Back
        </button>
        <div className="space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#F7941D] text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> We're Hiring
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0F3D2E] leading-tight">Help us build the future of logistics.</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">Join a world-class team solving the hardest logistics problems in Africa. We move fast, we care about details, and we empower our people.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
             <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Globe className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-black text-slate-800 mb-2">Remote First</h3>
             <p className="text-slate-500 text-sm">Work from anywhere in the world or join us at our vibrant hubs.</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
             <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Users className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-black text-slate-800 mb-2">Team Ownership</h3>
             <p className="text-slate-500 text-sm">We believe in small teams with large autonomy. You own your impact.</p>
          </div>
        </div>

        <h2 className="text-3xl font-black text-[#0F3D2E] mb-8">Open Roles</h2>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#F7941D] hover:shadow-lg transition-all flex items-center justify-between group cursor-pointer">
              <div>
                <h4 className="text-lg font-black text-slate-800">{job.title}</h4>
                <div className="flex gap-4 mt-1">
                   <span className="text-xs font-bold text-slate-400 uppercase flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.team}</span>
                   <span className="text-xs font-bold text-slate-400 uppercase flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#F7941D] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
