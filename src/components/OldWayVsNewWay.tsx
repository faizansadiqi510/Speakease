import { motion } from "motion/react";
import { XCircle, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { OLD_WAY_STEPS, SPEAKEASE_WAY_STEPS } from "../data";

export default function OldWayVsNewWay() {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-100/50 border-t border-[#C8CDD4]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Two-Tone Headline */}
        <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
          A new way to <span className="text-[#8A9BAE] italic font-normal">speak globally.</span>
        </h2>
        
        <p className="text-center font-sans text-sm md:text-base text-[#8A9BAE] max-w-xl mx-auto mb-16 font-normal">
          Most communication advice is generic. SpeakEase is built specifically for Indian professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1 - The Old Way (White Card, Gray Icon) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#C8CDD4]/15 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <XCircle size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#0D0D0D]">The old way</h3>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A9BAE] mt-0.5">Trial & Error</p>
                </div>
              </div>

              <div className="space-y-6">
                {OLD_WAY_STEPS.map((item) => (
                  <div key={item.step} className="flex items-start gap-4 border-b border-neutral-100 pb-4 last:border-none last:pb-0">
                    <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-[#8A9BAE] shrink-0 pt-1">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-[#0D0D0D]">{item.title}</h4>
                      <p className="font-sans text-xs text-[#8A9BAE] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 - The SpeakEase Way (Dark Card, SpeakEase Logo) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-between text-white"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">The SpeakEase way</h3>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A9BAE] mt-0.5">Syllable stress & rhythm maps</p>
                </div>
              </div>

              <div className="space-y-6">
                {SPEAKEASE_WAY_STEPS.map((item) => (
                  <div key={item.step} className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-none last:pb-0">
                    <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-[#8A9BAE] shrink-0 pt-1">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-white">{item.title}</h4>
                      <p className="font-sans text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
