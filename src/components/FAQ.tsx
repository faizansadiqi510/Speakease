import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 bg-neutral-100/50 border-t border-[#C8CDD4]/15">
      <div className="max-w-4xl mx-auto">
        
        {/* Eyebrow Label */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8CDD4] bg-white text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE]">
            QUESTIONS
          </span>
        </div>

        {/* Two-Tone Headline */}
        <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-16 max-w-xl mx-auto">
          Everything you <span className="text-[#8A9BAE] italic font-normal">want to know.</span>
        </h2>

        {/* Accordion wrapper */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#C8CDD4]/15 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center gap-4 bg-transparent border-none cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-sm md:text-lg font-semibold text-[#0D0D0D]">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors flex items-center justify-center text-[#8A9BAE] shrink-0">
                    {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 md:px-8 md:pb-8 text-neutral-600 font-sans text-xs md:text-sm leading-relaxed border-t border-[#C8CDD4]/10 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
