import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, ArrowRight, Layout, Sparkles, Check, CheckCircle } from "lucide-react";

interface Worksheet {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const WORKSHEETS: Worksheet[] = [
  {
    id: "syllable",
    number: "Worksheet 04",
    title: "Syllable Stress Planner",
    subtitle: "Map standard pronunciation weights dynamically to eliminate translation lag.",
    description: "Our core planning worksheet designed to map commonly stressed-forward words in regional Indian accents into Western stress cadences. Standardizing these 40 critical corporate words immediately upgrades your professional presentation authority.",
    tags: ["Speech Tuning", "40 Words Drill", "Vowel Shift Maps"]
  },
  {
    id: "pacing",
    number: "Worksheet 07",
    title: "130 WPM Pacing Clamp",
    subtitle: "A step-by-step physical transcription script with integrated breath intervals.",
    description: "The official calibration script that clamps speech output precisely to 130 words per minute. Practice marking speech pauses dynamically with our custom bracket delimiters, stopping rapid articulation dead in its tracks.",
    tags: ["Speed Control", "Breath Interval Mapping", "US Client Sync"]
  },
  {
    id: "pitch",
    number: "Worksheet 11",
    title: "The Pitch Terminal Script",
    subtitle: "Rewire ascending inflection (upspeaking) on pricing declarations.",
    description: "A specialized blueprint designed to train a falling vocal tone during price quotes or rate cards. Eliminates the subconscious signal of submissiveness or insecurity, saving thousands of rupees in lowball rates.",
    tags: ["Inflection Tuning", "Rate Card Negotiation", "Assertive Cadence"]
  }
];

export default function WorkbookPreview() {
  const [activeTab, setActiveTab] = useState<string>("syllable");

  const currentWorksheet = WORKSHEETS.find((w) => w.id === activeTab) || WORKSHEETS[0];

  return (
    <section 
      id="workbook-preview"
      className="py-24 bg-[#111111] border-t border-b border-white/5 relative overflow-hidden px-4 sm:px-6 md:px-12"
    >
      {/* Decorative grids or background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
            <BookOpen size={13} className="text-[#8A9BAE]" />
            <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE]">
              Interactive Preview
            </span>
          </div>
          
          <h2 className="font-serif text-3.5xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Inside the SpeakEase <span className="text-[#8A9BAE] italic">Guide & Workbooks</span>
          </h2>
          
          <p className="font-sans text-sm md:text-base text-neutral-400">
            Real pages from our active workbook & guides, built specifically to help you audit regional speech patterns, map client interactions, and unlock premium contracts.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Worksheet Interactive Visualizer (Skeuomorphic Worksheet Page) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="bg-white text-[#111111] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden aspect-[4/5] sm:aspect-[4/5.2] flex flex-col justify-between border-t border-neutral-200">
              
              {/* Paper background grid accent */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Header of paper */}
                <div className="flex justify-between items-start border-b-2 border-[#111111]/10 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      {currentWorksheet.number} • WORKSHEET PAGE
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mt-0.5">
                      {currentWorksheet.title}
                    </h3>
                  </div>
                  <span className="bg-neutral-100 text-neutral-600 font-mono text-[9px] font-bold px-2 py-1 rounded border border-neutral-200">
                    PDF 1.4 MB
                  </span>
                </div>

                {/* Simulated Content Based on Worksheet Type */}
                <AnimatePresence mode="wait">
                  {activeTab === "syllable" && (
                    <motion.div
                      key="syllable"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 font-sans"
                    >
                      <p className="text-xs text-neutral-500 leading-relaxed italic border-l-2 border-neutral-300 pl-3 mb-4">
                        "Correcting syllable stress patterns aligns your speech with the listener's internal vocabulary indexing, instantly removing client translation friction."
                      </p>

                      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/60 shadow-sm space-y-2.5">
                        <div className="grid grid-cols-3 text-[10px] font-bold text-neutral-400 uppercase tracking-wider pb-1.5 border-b border-neutral-200">
                          <span>Common Word</span>
                          <span className="text-red-500">Incorrect Stress</span>
                          <span className="text-emerald-600">Standard Stress</span>
                        </div>
                        
                        <div className="grid grid-cols-3 text-xs font-medium text-neutral-700 py-1 border-b border-neutral-100">
                          <span className="font-mono text-neutral-900">Developer</span>
                          <span className="line-through text-neutral-400">DE-vel-op-er</span>
                          <span className="font-bold text-neutral-900">de-VEL-op-er</span>
                        </div>

                        <div className="grid grid-cols-3 text-xs font-medium text-neutral-700 py-1 border-b border-neutral-100">
                          <span className="font-mono text-neutral-900">Schedule</span>
                          <span className="line-through text-neutral-400">SHE-dule</span>
                          <span className="font-bold text-neutral-900">SKED-jule</span>
                        </div>

                        <div className="grid grid-cols-3 text-xs font-medium text-neutral-700 py-1 border-b border-neutral-100">
                          <span className="font-mono text-neutral-900">Comment</span>
                          <span className="line-through text-neutral-400">co-MENT</span>
                          <span className="font-bold text-neutral-900">CO-ment</span>
                        </div>

                        <div className="grid grid-cols-3 text-xs font-medium text-neutral-700 py-1">
                          <span className="font-mono text-neutral-900">Determine</span>
                          <span className="line-through text-neutral-400">de-ter-MINE</span>
                          <span className="font-bold text-neutral-900">de-TER-mine</span>
                        </div>
                      </div>

                      <div className="mt-4 p-3.5 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-900 leading-relaxed flex gap-2.5">
                        <span className="text-sky-600 font-bold shrink-0 mt-0.5">💡 Rule:</span>
                        <span>Stressing verbs usually places emphasis on the second syllable, whereas nouns/adjectives place it on the first. The worksheets map 40 such freelancer-specific pivot words.</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "pacing" && (
                    <motion.div
                      key="pacing"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 font-sans text-neutral-800"
                    >
                      <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                        Pacing isn't just speaking slowly. It is organizing words into logical chunk units separated by micro-breaks. Read this drill template out loud:
                      </p>

                      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/60 font-mono text-xs leading-relaxed space-y-3 shadow-inner">
                        <p className="text-neutral-500 border-b border-neutral-200 pb-2 text-[10px] font-bold uppercase">
                          SCRIPT DRILL #03 (130 WPM CALIBRATION)
                        </p>
                        <p className="text-neutral-800">
                          "Our team <span className="text-neutral-400">[pause 0.2s]</span> has designed <span className="text-neutral-400">[pause 0.2s]</span> a scalable API architecture <span className="text-sky-600 font-bold">[breath 0.5s]</span> that streamlines client checkouts."
                        </p>
                        <p className="text-neutral-800">
                          "We can deploy this <span className="text-neutral-400">[pause]</span> next Tuesday <span className="text-sky-600 font-bold">[breath]</span> if we align our scope today."
                        </p>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-amber-900 text-xs flex gap-2.5">
                        <span className="text-amber-600 font-bold shrink-0">⚡ Focus:</span>
                        <span>Slamming the brakes on conjunctions (and, but, that, if) to maintain US clients' attention spans seamlessly.</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "pitch" && (
                    <motion.div
                      key="pitch"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 font-sans text-neutral-800"
                    >
                      <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                        Rising pitch at sentence endings sounds like you are checking if you are in trouble. Practice dropping your final syllable pitch by 2 steps:
                      </p>

                      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/60 space-y-3 text-xs shadow-sm">
                        <div className="flex justify-between text-neutral-400 text-[10px] font-bold uppercase pb-1.5 border-b border-neutral-200">
                          <span>Vocal Cadence Flow</span>
                          <span>Perceived Value</span>
                        </div>

                        <div className="flex justify-between items-center py-1">
                          <div>
                            <span className="font-mono text-red-500 font-bold">"The cost is ₹50,000?" ↗</span>
                            <p className="text-[10px] text-neutral-400 mt-0.5">High upspeak inflection</p>
                          </div>
                          <span className="bg-red-50 text-red-600 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                            Defensive / Soft
                          </span>
                        </div>

                        <div className="flex justify-between items-center py-1 border-t border-neutral-100">
                          <div>
                            <span className="font-mono text-emerald-600 font-bold">"The cost is ₹50,000." ↘</span>
                            <p className="text-[10px] text-neutral-400 mt-0.5">Downward final terminal tone</p>
                          </div>
                          <span className="bg-emerald-50 text-emerald-600 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded">
                            Confident / Firm
                          </span>
                        </div>
                      </div>

                      <div className="bg-neutral-100 border border-neutral-200 p-3 rounded-xl text-neutral-700 text-xs">
                        This downward pitch transition instantly triggers standard Western "executive authority", signaling that your pricing is solid and non-negotiable.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer of paper */}
              <div className="border-t border-neutral-200 pt-4 mt-6 flex justify-between items-center text-[10px] text-neutral-400 font-mono relative z-10">
                <span>© SPEAKEASE PRINTABLE SYSTEM</span>
                <span>PAGE 24 OF 72</span>
              </div>

            </div>

          </div>

          {/* Right: Worksheet Descriptions & Toggles */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h3 className="font-sans font-semibold text-[#8A9BAE] text-xs uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={12} className="text-sky-400" />
                Select Workbook Page
              </h3>

              {/* Toggles (Buttons that look like screenshot elements) */}
              <div className="space-y-3">
                {WORKSHEETS.map((w) => {
                  const isActive = w.id === activeTab;
                  return (
                    <button
                      key={w.id}
                      onClick={() => setActiveTab(w.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex gap-4 items-center group ${
                        isActive 
                          ? "bg-white/5 border-white/10 shadow-lg text-white" 
                          : "bg-transparent border-transparent text-[#8A9BAE] hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-all ${
                        isActive 
                          ? "bg-[#8A9BAE] text-neutral-900" 
                          : "bg-white/5 text-neutral-400 group-hover:bg-white/10"
                      }`}>
                        {w.number.slice(-2)}
                      </div>
                      
                      <div className="grow">
                        <div className="flex items-center justify-between">
                          <span className={`font-sans font-bold text-sm ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                            {w.title}
                          </span>
                          {isActive && <CheckCircle size={14} className="text-sky-400 shrink-0" />}
                        </div>
                        <p className="font-sans text-xs text-neutral-500 mt-0.5 leading-snug">
                          {w.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Detailed active worksheet summary */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-6 bg-white/[0.02] border border-white/5 rounded-2xl"
              >
                <p className="font-sans text-xs text-neutral-400 leading-relaxed mb-4">
                  {currentWorksheet.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {currentWorksheet.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[9px] font-medium tracking-wide text-neutral-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Section Link */}
            <div className="pt-8 border-t border-white/5 mt-8">
              <button
                onClick={() => {
                  const el = document.getElementById("pricing");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-sans text-xs font-semibold text-white hover:text-neutral-300 flex items-center gap-1.5 group cursor-pointer transition-all"
              >
                <span>Unlock All Worksheets Inside the Bundle (₹399)</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
