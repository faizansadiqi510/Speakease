import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Shield, Download, Lock, CheckCircle2, ChevronRight, AlertCircle, Loader2 } from "lucide-react";

interface PricingProps {
  onUnlockGuides: () => void;
  unlocked: boolean;
}

export default function Pricing({ onUnlockGuides, unlocked }: PricingProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [price, setPrice] = useState(399);

  useEffect(() => {
    fetch("/api/checkout/config")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.price === "number") {
          setPrice(data.price);
        }
      })
      .catch((err) => console.error("Error fetching pricing config:", err));
  }, [unlocked]);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsProcessing(true);
    try {
      const response = await fetch("/api/checkout/record-purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          amount: price,
          paymentMethod: "UPI/Card Web Gateway"
        })
      });
      
      if (response.ok) {
        setIsProcessing(false);
        setIsSuccess(true);
        onUnlockGuides(); // Unlocks full chapters in the app state
      } else {
        throw new Error("Failed to record transaction");
      }
    } catch (err) {
      console.warn("API offline or error. Falling back to mock transaction record.", err);
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
        onUnlockGuides();
      }, 2000);
    }
  };

  const features = [
    "Guide 01: The Clear Speech Guide (PDF)",
    "Guide 02: The Global Accent Guide (Bonus PDF)",
    "All metronome rhythm pacing charts",
    "Pre-call daily vocal workout warmups",
    "Unlimited access to AI Voice Evaluation Tool",
    "Lifetime digital download access",
    "No-questions-asked 14-day refund policy"
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-white border-t border-[#C8CDD4]/20 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Eyebrow label */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8CDD4] bg-white text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE]">
            GET SPEAKEASE TODAY
          </span>
        </div>

        {/* Two-tone headline */}
        <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-4">
          Everything you need <span className="text-[#8A9BAE] italic font-normal">in one system.</span>
        </h2>

        <p className="text-center font-sans text-sm md:text-base text-[#8A9BAE] max-w-xl mx-auto mb-16">
          Invest in your verbal clarity today. One high-ticket client contract closed will pay for this 100x over.
        </p>

        {/* Centered Pricing Card */}
        <div className="max-w-xl mx-auto bg-[#1A1A1A] rounded-2xl border border-white/5 p-8 md:p-12 text-center text-white relative shadow-2xl overflow-hidden">
          {/* Subtle design circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <span className="font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            SPECIAL FREELANCER DISCOUNT
          </span>

          <div className="mt-8 mb-6">
            <div className="flex items-center justify-center gap-3">
              <span className="font-sans text-lg text-neutral-400 line-through">₹799</span>
              <span className="font-serif text-5xl md:text-6xl font-bold text-white">₹{price}</span>
            </div>
            <p className="font-sans text-xs text-[#8A9BAE] mt-2 uppercase tracking-widest">
              ONE-TIME PAYMENT • LIFETIME DIGITAL DOWNLOAD
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 text-left max-w-sm mx-auto space-y-4 mb-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="font-sans text-xs md:text-sm text-neutral-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {unlocked ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-emerald-400 font-sans text-xs font-semibold flex items-center justify-center gap-2 mb-4">
              <CheckCircle2 size={16} />
              You own this bundle! Chapters are fully unlocked.
            </div>
          ) : (
            <a
              href="https://superprofile.bio/vp/speakease-—-the-complete-clear-speech-bundle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-sans text-sm font-semibold px-8 py-4 bg-white hover:bg-neutral-200 text-[#0D0D0D] rounded-full active:scale-[0.98] transition-all duration-200 shadow-xl flex items-center justify-center gap-2 border-none cursor-pointer mb-4 no-underline inline-flex justify-center"
            >
              Get SpeakEase — ₹{price}
            </a>
          )}

          <p className="font-sans text-[10px] text-[#8A9BAE] uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Shield size={12} /> Secure checkout. Instant delivery.
          </p>
        </div>

        {/* Checkout Modal Dialog */}
        <AnimatePresence>
          {isCheckingOut && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0D0D]/80 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl border border-[#C8CDD4]/20 w-full max-w-md p-6 md:p-8 shadow-2xl relative overflow-hidden"
              >
                {!isSuccess ? (
                  <>
                    <h3 className="font-serif text-2xl font-semibold text-[#0D0D0D] mb-2">Secure Checkout</h3>
                    <p className="font-sans text-xs text-[#8A9BAE] mb-6">
                      Provide details to process your simulated UPI/Card payment of ₹{price}.
                    </p>

                    <form onSubmit={handlePay} className="space-y-4">
                      <div>
                        <label className="block font-sans text-[10px] font-bold text-[#8A9BAE] uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g., Rohan Sharma"
                          className="w-full px-4 py-3 bg-[#F4F5F7] border border-[#C8CDD4]/30 rounded-xl font-sans text-xs text-[#0D0D0D] focus:outline-none focus:border-[#8A9BAE]/50 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[10px] font-bold text-[#8A9BAE] uppercase tracking-wider mb-1.5">
                          Email Address (for deliveries)
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g., rohan@sharmacodes.com"
                          className="w-full px-4 py-3 bg-[#F4F5F7] border border-[#C8CDD4]/30 rounded-xl font-sans text-xs text-[#0D0D0D] focus:outline-none focus:border-[#8A9BAE]/50 transition-all"
                        />
                      </div>

                      <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#8A9BAE] font-medium">Subtotal</span>
                          <span className="text-[#0D0D0D] font-semibold line-through">₹{price + 400}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-b border-dashed border-[#C8CDD4]/25 pb-2">
                          <span className="text-emerald-600 font-semibold">Special Freelancer Discount</span>
                          <span className="text-emerald-600 font-bold">-₹400</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-sans text-xs font-bold text-[#0D0D0D]">Total Amount</span>
                          <span className="font-mono text-sm font-bold text-[#0D0D0D]">₹{price}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-[10px] text-[#8A9BAE] leading-relaxed mb-4">
                        <AlertCircle size={14} className="shrink-0 mt-0.5" />
                        <span>This is a secure simulated transaction interface. No real money will be charged. Click below to mock complete.</span>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsCheckingOut(false)}
                          className="w-1/2 font-sans text-xs font-semibold py-3.5 bg-[#EBECEF] hover:bg-[#DCDDE1] text-[#0d0d0d] rounded-full transition-colors border-none cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className="w-1/2 font-sans text-xs font-bold py-3.5 bg-[#1A1A1A] hover:bg-neutral-800 text-white rounded-full transition-all flex items-center justify-center gap-1 border-none cursor-pointer"
                        >
                          {isProcessing ? (
                            <>
                              <Loader2 size={12} className="animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Pay ₹399
                              <ChevronRight size={12} />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#0D0D0D] mb-2">Purchase Successful</h3>
                    <p className="font-sans text-xs text-[#8A9BAE] mb-6">
                      Thank you, <span className="font-semibold text-neutral-700">{fullName}</span>! Your guides are unlocked. You can now read all chapters inside the What's Inside section or save PDFs directly.
                    </p>

                    <div className="space-y-2 mb-6">
                      <a
                        href="/assets/SpeakEase_The_Clear_Speech_Guide.pdf"
                        download
                        onClick={(e) => {
                          e.preventDefault();
                          alert("SpeakEase_The_Clear_Speech_Guide.pdf simulated download initialized successfully!");
                        }}
                        className="w-full py-3 border border-dashed border-[#8A9BAE]/30 bg-neutral-50 hover:bg-neutral-100 text-[#0d0d0d] font-sans text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Download size={14} /> Download Clear Speech Guide (Main)
                      </a>
                      <a
                        href="/assets/SpeakEase_Global_Accent_Drills.pdf"
                        download
                        onClick={(e) => {
                          e.preventDefault();
                          alert("SpeakEase_Global_Accent_Drills.pdf simulated download initialized successfully!");
                        }}
                        className="w-full py-3 border border-dashed border-[#8A9BAE]/30 bg-neutral-50 hover:bg-neutral-100 text-[#0d0d0d] font-sans text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Download size={14} /> Download Global Accent drills (Bonus)
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setIsCheckingOut(false);
                        setIsSuccess(false);
                        setEmail("");
                        setFullName("");
                      }}
                      className="w-full font-sans text-xs font-bold py-3.5 bg-[#1A1A1A] hover:bg-neutral-800 text-white rounded-full transition-colors border-none cursor-pointer"
                    >
                      Start Reading Unlocked Chapters
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
