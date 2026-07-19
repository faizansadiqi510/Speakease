import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GUIDES } from "../data";
import { GuideBook } from "../types";
import { BookOpen, Check, Lock, Unlock, PlayCircle, X, Download } from "lucide-react";
import speakeaseGuideCover from "../assets/images/speakease_main_guide_cover.png";
import globalAccentGuideCover from "../assets/images/global_accent_guide_cover.png";

interface ProductInsideProps {
  unlocked: boolean;
  onOpenCheckout: () => void;
}

export default function ProductInside({ unlocked, onOpenCheckout }: ProductInsideProps) {
  const [selectedGuide, setSelectedGuide] = useState<GuideBook | null>(null);
  const [activeChapterIdx, setActiveChapterIdx] = useState<number>(0);

  return (
    <section id="system" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Eyebrow label */}
      <div className="flex justify-center mb-6">
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8CDD4] bg-white text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE]">
          THE SPEAKEASE SYSTEM
        </span>
      </div>

      {/* Two-tone headline */}
      <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
        Taking you from <span className="text-[#8A9BAE] italic font-normal">unclear to unstoppable.</span>
      </h2>

      <p className="text-center font-sans text-sm md:text-base text-[#8A9BAE] max-w-xl mx-auto mb-16">
        Here is what you will receive inside the premium digital download package.
      </p>

      {/* Two-guide layout cards */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {GUIDES.map((guide, idx) => (
          <motion.div
            key={guide.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white rounded-2xl border border-[#C8CDD4]/15 p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-stretch hover:border-[#8A9BAE]/30 transition-all group"
          >
            {/* Guide Thumbnail Left Graphic - book cover illustration */}
            <div
              onClick={() => {
                setSelectedGuide(guide);
                setActiveChapterIdx(0);
              }}
              className="w-full md:w-64 bg-[#1E2023] rounded-xl shrink-0 relative overflow-hidden text-white min-h-[320px] shadow-lg border border-white/5 cursor-pointer group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {guide.id === "guide-1" ? (
                <img 
                  src={speakeaseGuideCover} 
                  alt={guide.title} 
                  className="w-full h-full object-cover block absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://i.postimg.cc/g2cnCpqv/Chat-GPT-Image-Jul-4-2026-12-23-39-AM.png";
                  }}
                />
              ) : guide.id === "guide-2" ? (
                <img 
                  src={globalAccentGuideCover} 
                  alt={guide.title} 
                  className="w-full h-full object-cover block absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://i.postimg.cc/Pqgf5nZy/Chat-GPT-Image-Jul-4-2026-12-37-36-AM.png";
                  }}
                />
              ) : (
                <>
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <BookOpen size={160} />
                  </div>
                  <div className="flex items-center justify-between z-10 p-6 w-full">
                    <span className="font-mono text-[9px] font-bold text-[#8A9BAE] uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {guide.badge}
                    </span>
                    
                    {unlocked ? (
                      <Unlock size={14} className="text-emerald-400" />
                    ) : (
                      <Lock size={14} className="text-neutral-500" />
                    )}
                  </div>
                  
                  <div className="z-10 mt-8 px-6">
                    <p className="font-mono text-[10px] text-[#8A9BAE] uppercase tracking-wider">SPEAKEASE METHOD</p>
                    <h4 className="font-serif text-2xl font-bold leading-tight mt-1">{guide.title}</h4>
                  </div>

                  <div className="pt-8 border-t border-white/5 mt-auto flex items-center justify-between z-10 px-6 pb-6 w-full">
                    <span className="font-sans text-[10px] text-[#8A9BAE] uppercase tracking-widest font-semibold">
                      {unlocked ? "Click to Read" : "Click to Preview"}
                    </span>
                    <span className="font-mono text-[9px] text-[#8A9BAE]">© QORR LABS</span>
                  </div>
                </>
              )}

              {/* Realistic 3D Book Spine & Crease Shadows */}
              <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/50 via-black/15 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 left-4 w-[1px] bg-white/5 z-10 pointer-events-none" />
              <div className="absolute inset-y-0 left-5 w-[1px] bg-black/25 z-10 pointer-events-none" />
              
              {/* Luxury Reflection Diagonal Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none" />

              {/* Translucent overlay layer on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 z-10" />

              {/* Floating indicators for interactive covers */}
              {(guide.id === "guide-1" || guide.id === "guide-2") && (
                <>
                  {/* Top Badges overlay */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none">
                    <span className="font-mono text-[9px] font-bold text-white uppercase tracking-widest bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                      {guide.badge}
                    </span>
                    
                    {unlocked ? (
                      <div className="p-1.5 bg-emerald-500/90 backdrop-blur-sm text-white rounded-full border border-emerald-400/20 shadow">
                        <Unlock size={11} strokeWidth={2.5} />
                      </div>
                    ) : (
                      <div className="p-1.5 bg-black/75 backdrop-blur-sm text-neutral-200 rounded-full border border-white/10 shadow">
                        <Lock size={11} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>

                  {/* Bottom Interactive Trigger Overlay */}
                  <div className="absolute bottom-4 inset-x-4 flex flex-col gap-1 z-20">
                    <div className="bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between shadow-lg">
                      <span className="font-sans text-[10px] text-neutral-100 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                        {unlocked ? (
                          <>
                            <Unlock size={10} className="text-emerald-400" />
                            Read Online
                          </>
                        ) : (
                          <>
                            <Lock size={10} className="text-neutral-400" />
                            Preview Outline
                          </>
                        )}
                      </span>
                      <span className="font-sans text-[10px] text-neutral-300 font-bold">→</span>
                    </div>
                  </div>

                  {/* Normal-state lock indicator to hint exclusivity */}
                  {!unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5 z-10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <div className="p-3 bg-black/75 backdrop-blur-md rounded-xl border border-white/10 text-center flex flex-col items-center gap-1">
                        <Lock size={15} className="text-neutral-300 animate-pulse" />
                        <span className="font-mono text-[8px] text-neutral-400 tracking-wider uppercase font-bold">PREVIEW</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Guide Content Right */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="flex flex-col gap-1.5 mb-4">
                  <span className="font-mono text-[9px] font-bold text-[#8A9BAE] uppercase tracking-widest">
                    PDF GUIDE BUNDLE PACK
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#0D0D0D] leading-tight">
                    {guide.title}
                  </h3>
                </div>

                <p className="font-sans text-xs md:text-sm text-[#8A9BAE] leading-relaxed mb-6 font-medium">
                  {guide.subtitle}
                </p>

                {/* Bullets List */}
                <div className="space-y-3.5 mb-8">
                  {guide.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-[#8A9BAE] shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="font-sans text-sm text-[#0D0D0D]/85 leading-relaxed font-normal">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#C8CDD4]/10">
                <button
                  onClick={() => {
                    setSelectedGuide(guide);
                    setActiveChapterIdx(0);
                  }}
                  className={`font-sans text-xs font-semibold px-6 py-3 rounded-full transition-all cursor-pointer flex items-center gap-2 border-none ${
                    unlocked
                      ? "bg-[#1A1A1A] hover:bg-neutral-800 text-white"
                      : "bg-[#EBECEF] hover:bg-[#DCDDE1] text-[#0d0d0d]"
                  }`}
                >
                  <BookOpen size={14} />
                  {unlocked ? "Open & Read Digital PDF" : "Preview Chapter Outline"}
                </button>
                
                {unlocked ? (
                  <a
                    href={`/api/download-pdf?guideId=${guide.id}`}
                    download
                    className="font-sans text-xs font-semibold px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-all flex items-center gap-1.5 no-underline shadow-md"
                  >
                    <Download size={13} />
                    Download PDF Version
                  </a>
                ) : (
                  <span className="font-sans text-xs text-[#8A9BAE] flex items-center gap-1">
                    <Lock size={12} /> Buy bundle to unlock downloadable PDF
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PDF Reader Overlay Modal */}
      <AnimatePresence>
        {selectedGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0D0D]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-[#C8CDD4]/20 w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-[#C8CDD4]/20 bg-[#F4F5F7] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#1A1A1A] text-white rounded-lg">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-bold text-[#8A9BAE] uppercase tracking-widest">
                      {unlocked ? "READER UNLOCKED" : "CHAPTER OUTLINE PREVIEW"}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#0D0D0D] mt-0.5">
                      {selectedGuide.title}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedGuide(null)}
                  className="p-2 hover:bg-[#C8CDD4]/30 rounded-full text-[#8A9BAE] hover:text-[#0D0D0D] transition-colors border-none cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body - Chapters Split Layout */}
              <div className="flex-grow flex flex-col md:flex-row overflow-hidden min-h-[50vh]">
                {/* Chapters Sidebar */}
                <div className="w-full md:w-64 border-r border-[#C8CDD4]/20 p-4 overflow-y-auto bg-neutral-50 shrink-0">
                  <p className="font-sans text-[10px] font-bold text-[#8A9BAE] uppercase tracking-widest mb-3 px-2">
                    Chapters Table
                  </p>
                  <div className="space-y-1.5">
                    {selectedGuide.chapters.map((chapter, chIdx) => (
                      <button
                        key={chIdx}
                        onClick={() => setActiveChapterIdx(chIdx)}
                        className={`w-full text-left p-3 rounded-lg font-sans text-xs transition-all border-none cursor-pointer flex flex-col gap-1 ${
                          activeChapterIdx === chIdx
                            ? "bg-[#1A1A1A] text-white shadow-sm"
                            : "hover:bg-neutral-100 text-[#0d0d0d]"
                        }`}
                      >
                        <span className="font-semibold block leading-snug">
                          {chapter.title}
                        </span>
                        <span className={`text-[10px] block font-normal leading-normal ${
                          activeChapterIdx === chIdx ? "text-neutral-300" : "text-[#8A9BAE]"
                        }`}>
                          {chapter.description.substring(0, 45)}...
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chapter Content Main */}
                <div className="flex-grow p-6 md:p-8 overflow-y-auto">
                  {unlocked ? (
                    // Unlocked Full Content
                    <div className="prose prose-neutral max-w-none text-[#0D0D0D]">
                      <span className="font-mono text-[9px] font-bold text-[#8A9BAE] uppercase tracking-widest block mb-1">
                        UNLOCKED FULL TEXT
                      </span>
                      <h4 className="font-serif text-xl md:text-2xl font-bold text-[#0D0D0D] mb-4 border-b border-[#C8CDD4]/25 pb-3">
                        {selectedGuide.chapters[activeChapterIdx].title}
                      </h4>
                      <p className="font-sans text-sm text-[#0D0D0D]/90 leading-relaxed font-normal whitespace-pre-line">
                        {selectedGuide.chapters[activeChapterIdx].content}
                      </p>
                    </div>
                  ) : (
                    // Locked Preview Content
                    <div className="flex flex-col items-center justify-center text-center h-full max-w-md mx-auto py-8">
                      <div className="p-4 bg-amber-50 rounded-full border border-amber-200 text-amber-500 mb-6">
                        <Lock size={32} />
                      </div>
                      <h5 className="font-serif text-xl font-bold text-[#0D0D0D] mb-2">
                        This chapter is locked
                      </h5>
                      <p className="font-sans text-xs md:text-sm text-[#8A9BAE] leading-relaxed mb-6">
                        You are reading an outline preview of <span className="font-semibold text-neutral-700">{selectedGuide.chapters[activeChapterIdx].title}</span>. Complete your purchase of ₹399 to unlock all full chapters instantly.
                      </p>

                      <div className="w-full bg-[#F4F5F7] p-4 rounded-xl border border-[#C8CDD4]/25 mb-6 text-left">
                        <span className="font-sans text-[10px] font-bold text-[#8A9BAE] uppercase tracking-widest block">
                          CHAPTER SYNOPSIS
                        </span>
                        <p className="font-sans text-xs font-semibold text-[#0D0D0D] mt-1.5 leading-relaxed">
                          {selectedGuide.chapters[activeChapterIdx].description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                        <button
                          onClick={() => {
                            setSelectedGuide(null);
                            onOpenCheckout();
                          }}
                          className="font-sans text-xs font-bold px-5 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-all border-none cursor-pointer"
                        >
                          Unlock All Guides (₹399)
                        </button>
                        <button
                          onClick={() => setSelectedGuide(null)}
                          className="font-sans text-xs font-semibold px-5 py-3.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 rounded-full transition-all border-none cursor-pointer"
                        >
                          Close Preview
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
