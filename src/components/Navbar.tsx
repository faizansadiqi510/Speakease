import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ShieldCheck, HelpCircle, BookOpen } from "lucide-react";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenCheckout: () => void;
}

export default function Navbar({ onScrollToSection, onOpenCheckout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed left-0 right-0 z-40 px-4 md:px-8 max-w-7xl mx-auto pointer-events-none transition-all duration-300 ${
        isScrolled ? "top-3 sm:top-4" : "top-20 sm:top-14"
      }`}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full pointer-events-auto mx-auto rounded-full transition-all duration-300 border backdrop-blur-md flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3.5 ${
            isScrolled
              ? "bg-[#1A1A1A]/90 border-white/10 shadow-xl"
              : "bg-[#1A1A1A]/85 border-white/5"
          }`}
        >
          {/* Logo */}
          <div 
            onClick={() => onScrollToSection("hero")} 
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1">
              <span className="text-[#8A9BAE]">●</span> SpeakEase
            </span>
          </div>

          {/* Desktop Nav Actions */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onScrollToSection("problem")}
              className="font-sans text-xs font-medium uppercase tracking-widest text-[#8A9BAE] hover:text-white transition-colors cursor-pointer"
            >
              The Problem
            </button>
            <button
              onClick={() => onScrollToSection("testimonials")}
              className="font-sans text-xs font-medium uppercase tracking-widest text-[#8A9BAE] hover:text-white transition-colors cursor-pointer"
            >
              Feedbacks
            </button>
            <button
              onClick={() => onScrollToSection("system")}
              className="font-sans text-xs font-medium uppercase tracking-widest text-[#8A9BAE] hover:text-white transition-colors cursor-pointer"
            >
              What's Inside
            </button>
            <button
              onClick={() => onScrollToSection("faq")}
              className="font-sans text-xs font-medium uppercase tracking-widest text-[#8A9BAE] hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Floating White Pill CTA & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenCheckout}
              className="font-sans text-[11px] sm:text-xs font-semibold px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-[#0D0D0D] rounded-full hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer flex items-center gap-1 border-none shadow-md whitespace-nowrap"
            >
              <span className="hidden sm:inline">Get SpeakEase | </span>
              <span className="inline sm:hidden">Get | </span>
              ₹399
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-white/5 rounded-full text-[#8A9BAE] hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer md:hidden border-none flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-4 right-4 z-40 md:hidden bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col gap-4 backdrop-blur-lg transition-all duration-300 ${
              isScrolled ? "top-16" : "top-32"
            }`}
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onScrollToSection("problem");
                }}
                className="text-left py-2 font-sans text-xs font-medium uppercase tracking-wider text-[#8A9BAE] hover:text-white border-b border-white/5"
              >
                The Problem
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onScrollToSection("testimonials");
                }}
                className="text-left py-2 font-sans text-xs font-medium uppercase tracking-wider text-[#8A9BAE] hover:text-white border-b border-white/5"
              >
                Feedbacks
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onScrollToSection("system");
                }}
                className="text-left py-2 font-sans text-xs font-medium uppercase tracking-wider text-[#8A9BAE] hover:text-white border-b border-white/5"
              >
                What's Inside
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onScrollToSection("faq");
                }}
                className="text-left py-2 font-sans text-xs font-medium uppercase tracking-wider text-[#8A9BAE] hover:text-white border-b border-white/5"
              >
                FAQ
              </button>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCheckout();
                }}
                className="w-full text-center py-2.5 bg-white hover:bg-neutral-100 text-[#0d0d0d] rounded-full font-semibold text-xs transition-colors cursor-pointer border-none"
              >
                Buy 2-Guide Bundle (₹399)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
