import { motion } from "motion/react";
import { VolumeX, MessageSquare, Globe, Activity, Shield, ArrowRight, Clock } from "lucide-react";
import { ComponentType } from "react";

interface LeakItem {
  id: string;
  label: string;
  dailyTime: string;
  weeklyTime: string;
  colorClass: string;
  percentage: number;
  icon: ComponentType<any>;
  iconBg: string;
  iconColor: string;
}

const DAILY_LEAK_ITEMS: LeakItem[] = [
  {
    id: "articulation",
    label: "Unclear articulation",
    dailyTime: "10 min / day",
    weeklyTime: "1.1 hrs / week",
    colorClass: "bg-blue-500",
    percentage: 75,
    icon: VolumeX,
    iconBg: "bg-blue-50 text-blue-600",
    iconColor: "text-blue-600"
  },
  {
    id: "filler-words",
    label: "Filler words (umm, uh, like)",
    dailyTime: "8 min / day",
    weeklyTime: "56 min / week",
    colorClass: "bg-purple-500",
    percentage: 60,
    icon: MessageSquare,
    iconBg: "bg-purple-50 text-purple-600",
    iconColor: "text-purple-600"
  },
  {
    id: "accent-drills",
    label: "Accent drills",
    dailyTime: "10 min / day",
    weeklyTime: "1.1 hrs / week",
    colorClass: "bg-rose-500",
    percentage: 75,
    icon: Globe,
    iconBg: "bg-rose-50 text-rose-600",
    iconColor: "text-rose-600"
  },
  {
    id: "fluency-practice",
    label: "Fluency practice",
    dailyTime: "7 min / day",
    weeklyTime: "49 min / week",
    colorClass: "bg-amber-500",
    percentage: 52,
    icon: Activity,
    iconBg: "bg-amber-50 text-amber-600",
    iconColor: "text-amber-600"
  },
  {
    id: "confidence-exercises",
    label: "Confidence exercises",
    dailyTime: "5 min / day",
    weeklyTime: "35 min / week",
    colorClass: "bg-emerald-500",
    percentage: 38,
    icon: Shield,
    iconBg: "bg-emerald-50 text-emerald-600",
    iconColor: "text-emerald-600"
  }
];

export default function VocalLeaks() {
  const handleScrollToPricing = () => {
    const el = document.getElementById("pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="vocal-leaks"
      className="py-24 bg-[#F8F9FA] border-t border-b border-neutral-200/60 relative overflow-hidden px-4 sm:px-6 md:px-12"
    >
      {/* Soft abstract background blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.02] blur-3xl pointer-events-none" />

      {/* Lined paper grid effect to match visual language */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#fbfbfc_95%,#e5e7eb_95%)] bg-[size:100%_40px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white mb-4 shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0A1A3A] animate-pulse"></span>
            <span className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#5A6B7E]">
              WHAT'S INSIDE THE SYSTEM
            </span>
          </div>
          
          <h2 className="font-serif text-3.5xl md:text-4xl font-bold tracking-tight text-[#0D0D0D] mb-4">
            Identify & fix daily <span className="text-[#5A6B7E] italic font-normal">vocal leakage</span>
          </h2>
          
          <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed">
            Standardizing pronunciation is not about complex, hours-long training. It is about sealing the micro-leaks in articulation and rhythm that dilute your senior positioning on zoom calls.
          </p>
        </div>

        {/* Centered high-fidelity card (mirroring the screenshot exactly) */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            
            {/* Card Header (mirroring "Weekly Time Leaks") */}
            <div className="flex items-center gap-4 mb-8 pb-5 border-b border-neutral-100">
              <div className="w-12 h-12 rounded-2xl bg-[#0A1A3A] flex items-center justify-center text-white shadow-md shadow-[#0A1A3A]/10 shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="font-sans font-bold text-[#0D0D0D] text-lg">Your Daily Speech Leaks</h3>
                <p className="font-sans text-xs text-[#5A6B7E] font-medium mt-0.5">Where your impact, clarity, and authority quietly drain away</p>
              </div>
            </div>

            {/* List Rows */}
            <div className="space-y-6 mb-8">
              {DAILY_LEAK_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="group flex flex-col gap-2">
                    
                    {/* Label and Info Row */}
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                          <IconComponent size={16} />
                        </div>
                        <span className="font-sans font-semibold text-neutral-800 text-sm group-hover:text-[#0D0D0D] transition-colors">
                          {item.label}
                        </span>
                      </div>
                      
                      {/* Frequencies (Right Side) */}
                      <div className="text-right flex flex-col sm:flex-row sm:items-baseline sm:gap-2 shrink-0">
                        <span className="font-sans text-xs font-medium text-neutral-500">
                          {item.dailyTime}
                        </span>
                        <span className="hidden sm:inline text-neutral-300 font-sans text-xs">•</span>
                        <span className="font-sans text-xs font-bold text-neutral-800">
                          {item.weeklyTime}
                        </span>
                      </div>
                    </div>

                    {/* Colored Progress Bar Container */}
                    <div className="pl-12">
                      <div className="h-1.5 w-full bg-neutral-100/80 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className={`h-full ${item.colorClass} rounded-full`}
                        />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Button (Dark Navy, Full Width) */}
            <button
              onClick={handleScrollToPricing}
              className="w-full font-sans text-sm font-bold py-4.5 px-6 bg-[#0A1A3A] hover:bg-[#122A54] text-white rounded-2xl active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer border-none shadow-lg shadow-[#0A1A3A]/10 mt-2"
            >
              Get SpeakEase — ₹399
              <ArrowRight size={16} className="text-white" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
