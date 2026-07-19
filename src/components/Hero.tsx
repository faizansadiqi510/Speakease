import { motion } from "motion/react";
import { Mic, ArrowRight, Play, CheckCircle } from "lucide-react";
import speakeaseGuideCover from "../assets/images/speakease_main_guide_cover.png";

interface HeroProps {
  onOpenCheckout: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onOpenCheckout, onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero"
      className="relative min-h-screen bg-[#1A1A1A] flex flex-col justify-end pb-16 md:pb-24 pt-36 px-6 md:px-12 overflow-hidden"
    >
      {/* Background visual element - premium sound wave vectors */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg 
          className="w-full max-w-5xl h-auto" 
          viewBox="0 0 1000 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated concentric circles mimicking voice propagation */}
          <circle cx="500" cy="300" r="100" stroke="#8A9BAE" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_120s_linear_infinite]" />
          <circle cx="500" cy="300" r="200" stroke="#8A9BAE" strokeWidth="1" opacity="0.6" strokeDasharray="8 4" className="animate-[spin_90s_linear_infinite_reverse]" />
          <circle cx="500" cy="300" r="300" stroke="#8A9BAE" strokeWidth="1" opacity="0.3" />
          
          {/* Waveforms */}
          <path 
            d="M 100,300 C 200,150 300,450 400,300 C 500,150 600,450 700,300 C 800,150 900,450 1000,300" 
            stroke="#8A9BAE" 
            strokeWidth="1.5" 
            opacity="0.25"
          />
          <path 
            d="M 100,300 C 220,200 280,400 420,300 C 480,200 580,400 720,300 C 780,200 880,400 1000,300" 
            stroke="url(#voice-gradient)" 
            strokeWidth="1" 
            opacity="0.4"
          />
          <defs>
            <linearGradient id="voice-gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8A9BAE" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#C8CDD4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8A9BAE" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-1/4 right-1/10 hidden lg:block pointer-events-none opacity-30">
        <div className="w-96 h-96 rounded-full border border-[#8A9BAE]/10 flex items-center justify-center animate-[pulse_6s_ease-in-out_infinite]">
          <div className="w-80 h-80 rounded-full border border-[#8A9BAE]/15 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-[#8A9BAE]/20 flex items-center justify-center">
              <Mic size={32} className="text-[#8A9BAE]" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content aligned elegantly in a responsive layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-7/12 flex flex-col items-start">
          
          {/* Small muted line with pill border */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8CDD4]/20 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE]">
              Join 2,000+ Indian freelancers
            </span>
          </motion.div>

          {/* Large two-tone Serif Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight flex flex-col"
          >
            <span>Speak clearly,</span>
            <span className="text-[#8A9BAE] italic font-medium">win globally.</span>
          </motion.h1>

          {/* Body Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base md:text-xl text-neutral-300 max-w-2xl mb-10 leading-relaxed font-normal"
          >
            The system that trains Indian freelancers to speak confidently, master standard syllable stress, and close international clients.
          </motion.p>

          {/* Action Button in Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenCheckout}
              className="font-sans text-sm font-semibold px-8 py-4 bg-white text-[#0D0D0D] rounded-full hover:bg-neutral-200 active:scale-98 transition-all duration-200 shadow-xl flex items-center justify-center gap-2.5 cursor-pointer border-none"
            >
              Get SpeakEase — ₹399
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Core metrics bar aligned nicely */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/5 w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-left"
          >
            <div>
              <span className="font-serif text-3xl font-semibold text-white">2+</span>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A9BAE] mt-1">Guide PDF Bundle</p>
            </div>
            <div>
              <span className="font-serif text-3xl font-semibold text-white">2,000+</span>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A9BAE] mt-1">Indian Graduates</p>
            </div>
            <div>
              <span className="font-serif text-3xl font-semibold text-white">₹399</span>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A9BAE] mt-1">One-time Price</p>
            </div>
            <div>
              <span className="font-serif text-3xl font-semibold text-white">100%</span>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A9BAE] mt-1">Risk-Free Guarantee</p>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Premium Guide Cover image (exactly as it is, no crops, no alterations) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-5/12 flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[420px] w-full rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/10 transition-all duration-300 hover:scale-[1.01] hover:border-white/20 bg-[#1A1A1A] group">
            <img 
              src={speakeaseGuideCover} 
              alt="The Clear Speech Guide Cover" 
              className="w-full h-auto object-contain block"
              referrerPolicy="no-referrer"
            />
            {/* Realistic 3D Book Spine & Crease Shadows */}
            <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/50 via-black/15 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 left-5 w-[1px] bg-white/5 z-10 pointer-events-none" />
            <div className="absolute inset-y-0 left-6 w-[1px] bg-black/25 z-10 pointer-events-none" />
            
            {/* Luxury Reflection Diagonal Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
