import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Sparkles, Mail, Phone, MapPin, X } from "lucide-react";

interface FooterProps {
  onOpenCheckout: () => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenCreatorPortal: () => void;
}

export default function Footer({ onOpenCheckout, onScrollToSection, onOpenCreatorPortal }: FooterProps) {
  const [modalType, setModalType] = useState<"privacy" | "refund" | "terms" | "contact" | null>(null);

  const policyContent = {
    privacy: {
      title: "Privacy Policy",
      text: `Your privacy is incredibly important to us.

At SpeakEase, we operate with the following core commitments:
- **Audio Privacy**: All recorded voice data processed via our AI Vocal Evaluator is sent securely to the Google Gemini API solely for instant analysis. We do not store, distribute, or train any models on your recorded voice files.
- **Personal Information**: We collect only your email address and name during the checkout flow to deliver your PDF guides. We will never sell, rent, or distribute your email to third parties.
- **Analytics**: We use standard, anonymous, privacy-compliant cookies to optimize page loading performance.`
    },
    refund: {
      title: "Refund Policy",
      text: `We stand by the absolute quality of the SpeakEase Method.

- **14-Day Money Back Guarantee**: If you practice the daily metronome drills and complete the consonant drills in Guide 01 and Guide 02 for 10 minutes a day, and feel your verbal clarity hasn't improved, you are entitled to a full, immediate refund.
- **Hassle-Free Processing**: Simply email us at refunds@speakease.co within 14 days of purchase with your email address. We will return your ₹399 payment instantly, no questions asked.`
    },
    terms: {
      title: "Terms of Service",
      text: `By accessing SpeakEase, you agree to comply with the following terms:
      
- **License**: Your purchase grants you a personal, perpetual, non-transferable single-user license to download and read the SpeakEase Guide books. Reselling or distributing the materials without written permission is strictly prohibited.
- **AI Tool Usage**: The AI Vocal Evaluator is provided as-is for self-assessment and training guidance. It is not a professional diagnostic or clinical speech pathology service.`
    },
    contact: {
      title: "Contact SpeakEase Team",
      text: `We'd love to hear from you! Our team of speech specialists and support staff is available.

- **Email Support**: support@speakease.co (average response time is less than 3 hours)
- **Technical Desk**: Qorr Labs, Bangalore, India.
- **WhatsApp Support Desk**: +91 98765 43210 (Mon-Sat, 9 AM - 6 PM IST)`
    }
  };

  return (
    <>
      {/* Section 09 — Final CTA (Dark background - matches hero) */}
      <section className="relative bg-[#1A1A1A] py-24 px-6 md:px-12 text-white overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 Q50,100 100,0" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10"
          >
            <Sparkles size={12} className="text-[#8A9BAE]" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#8A9BAE]">
              Sound Ready.
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight"
          >
            Your next client call could change everything.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={onOpenCheckout}
              className="font-sans text-sm font-semibold px-8 py-4 bg-white hover:bg-neutral-200 text-[#0D0D0D] rounded-full active:scale-98 transition-all duration-200 shadow-2xl border-none cursor-pointer"
            >
              Get SpeakEase — ₹399
            </button>
            <span className="font-sans text-[11px] text-[#8A9BAE] uppercase tracking-wider flex items-center gap-1 justify-center">
              <Shield size={12} /> Instant Delivery • 14-Day Money Back Guarantee
            </span>
          </motion.div>
        </div>
      </section>

      {/* Section 10 — Footer (Soft gray background) */}
      <footer className="bg-[#EBECEF] border-t border-[#C8CDD4]/20 py-12 px-6 md:px-12 text-[#0D0D0D]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#C8CDD4]/20 pb-8 mb-8">
          
          {/* Wordmark Left */}
          <div 
            onClick={() => onScrollToSection("hero")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="font-sans font-bold text-lg tracking-tight text-[#0D0D0D] flex items-center gap-1">
              <span className="text-[#8A9BAE]">●</span> SpeakEase
            </span>
          </div>

          {/* Links Right */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <button
              onClick={() => setModalType("privacy")}
              className="bg-transparent border-none text-xs font-semibold uppercase tracking-wider text-[#8A9BAE] hover:text-[#0D0D0D] transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={() => setModalType("refund")}
              className="bg-transparent border-none text-xs font-semibold uppercase tracking-wider text-[#8A9BAE] hover:text-[#0D0D0D] transition-colors cursor-pointer"
            >
              Refund
            </button>
            <button
              onClick={() => setModalType("terms")}
              className="bg-transparent border-none text-xs font-semibold uppercase tracking-wider text-[#8A9BAE] hover:text-[#0D0D0D] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => setModalType("contact")}
              className="bg-transparent border-none text-xs font-semibold uppercase tracking-wider text-[#8A9BAE] hover:text-[#0D0D0D] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[#8A9BAE] text-[11px] font-medium uppercase tracking-wider gap-4">
          <p>© 2026 SpeakEase • Qorr Labs. All rights reserved.</p>
          <button
            onClick={onOpenCreatorPortal}
            className="flex items-center gap-1.5 bg-neutral-200/60 hover:bg-neutral-300/80 text-neutral-600 px-3 py-1.5 rounded-lg border-none cursor-pointer text-[10px] font-bold tracking-widest uppercase transition-colors"
          >
            🔒 Creator Portal
          </button>
          <p className="mt-2 sm:mt-0 font-mono">CRAFTED FOR INDIA'S FREELANCE COMMUNITY</p>
        </div>
      </footer>

      {/* Info Modals */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0D0D]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-[#C8CDD4]/20 w-full max-w-md p-6 shadow-2xl relative"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full text-[#8A9BAE] hover:text-[#0D0D0D] transition-colors border-none cursor-pointer"
              >
                <X size={16} />
              </button>

              <h4 className="font-serif text-xl font-bold text-[#0D0D0D] mb-4 border-b border-[#C8CDD4]/10 pb-2">
                {policyContent[modalType].title}
              </h4>

              <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed font-normal whitespace-pre-line">
                {policyContent[modalType].text}
              </p>

              {modalType === "contact" && (
                <div className="mt-6 pt-4 border-t border-[#C8CDD4]/10 space-y-2 text-xs text-[#0D0D0D]">
                  <div className="flex items-center gap-2">
                    <Mail size={12} className="text-[#8A9BAE]" />
                    <span className="font-semibold">support@speakease.co</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="text-[#8A9BAE]" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#8A9BAE]" />
                    <span>Bangalore, Karnataka, India</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => setModalType(null)}
                className="w-full mt-8 font-sans text-xs font-bold py-3 bg-[#1A1A1A] hover:bg-neutral-800 text-white rounded-full transition-colors border-none cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
