import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Zap } from "lucide-react";

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 16, minutes: 22, seconds: 22 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to simulate continuous urgency
          return { hours: 16, minutes: 22, seconds: 22 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const padZero = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="relative w-full bg-[#0A0D14] text-white py-2.5 px-4 border-b border-white/5 z-50 text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs font-sans select-none">
      <div className="flex items-center gap-1.5">
        <span className="bg-emerald-500/10 text-emerald-400 font-bold uppercase tracking-widest text-[9px] px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
          <Zap size={10} className="fill-emerald-400" />
          INDIA FREELANCERS SPECIAL
        </span>
        <span className="text-neutral-300 font-medium">50% discount applied:</span>
        <span className="font-bold text-white">₹399</span>
      </div>

      <div className="hidden sm:inline-block text-neutral-500">|</div>

      <div className="flex items-center gap-1">
        <span className="text-neutral-400">Offer ends in</span>
        <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-white font-bold text-[11px]">
          {padZero(timeLeft.hours)}
        </span>
        <span className="text-neutral-500 font-bold">:</span>
        <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-white font-bold text-[11px]">
          {padZero(timeLeft.minutes)}
        </span>
        <span className="text-neutral-500 font-bold">:</span>
        <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-white font-bold text-[11px]">
          {padZero(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
}
