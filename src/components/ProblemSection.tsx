import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROBLEM_LIST, RESEARCH_TABS } from "../data";
import { TrendingUp, Award, RefreshCw, FileText } from "lucide-react";

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState("finances");

  const currentTab = RESEARCH_TABS.find((tab) => tab.id === activeTab) || RESEARCH_TABS[0];

  return (
    <section id="problem" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Eyebrow Label */}
      <div className="flex justify-center mb-6">
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8CDD4] bg-white text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE]">
          WHAT'S COSTING YOU CLIENTS
        </span>
      </div>

      {/* Two-Tone Headline */}
      <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-16 leading-tight max-w-3xl mx-auto">
        Studies show your voice influences{" "}
        <span className="text-[#8A9BAE] italic font-normal">almost everything.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Numbered List (Left Column) */}
        <div className="lg:col-span-6 space-y-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#8A9BAE] mb-4">
            THE REALITY OF REMOTE OFFSHORE HIRING
          </p>

          <div className="space-y-4">
            {PROBLEM_LIST.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#C8CDD4]/10 hover:border-[#8A9BAE]/30 transition-all shadow-sm"
              >
                {/* Numbered items use [1] [2] [3] bracket format */}
                <span className="font-mono text-sm md:text-base font-bold text-[#8A9BAE] shrink-0 pt-0.5">
                  [{item.id}]
                </span>
                <span className="font-sans text-sm md:text-base text-[#0D0D0D] font-medium leading-relaxed">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Qoves-inspired Interactive Research Panel (Right Column) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-[#C8CDD4]/15 p-6 md:p-8 shadow-sm">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#8A9BAE] mb-6">
            SCIENTIFIC RESEARCH & EVIDENCE
          </p>

          {/* Tab buttons */}
          <div className="flex border-b border-[#C8CDD4]/20 pb-4 mb-6 gap-2 overflow-x-auto no-scrollbar">
            {RESEARCH_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all border-none cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-neutral-100 text-[#8A9BAE] hover:bg-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content with dynamic animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Metric Card */}
              <div className="p-6 bg-[#F4F5F7] rounded-xl border-l-4 border-[#8A9BAE] flex items-center gap-4">
                {activeTab === "finances" && <TrendingUp className="text-[#8A9BAE] shrink-0" size={28} />}
                {activeTab === "dating" && <Award className="text-[#8A9BAE] shrink-0" size={28} />}
                {activeTab === "socializing" && <RefreshCw className="text-[#8A9BAE] shrink-0" size={28} />}
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#0D0D0D]">
                    {currentTab.metric}
                  </span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#8A9BAE] mt-0.5">
                    Impact Metric
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg md:text-xl font-medium text-[#0D0D0D] mb-3">
                  {currentTab.headline}
                </h3>
                <p className="font-sans text-sm text-[#0D0D0D]/75 leading-relaxed font-normal">
                  {currentTab.description}
                </p>
              </div>

              {/* Citation Footer */}
              <div className="pt-6 border-t border-[#C8CDD4]/15 flex items-start gap-2 text-[#8A9BAE]">
                <FileText size={14} className="shrink-0 mt-0.5" />
                <span className="font-mono text-[10px] uppercase tracking-wide leading-relaxed">
                  CITATION: {currentTab.citation}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
