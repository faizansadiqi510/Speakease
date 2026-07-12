import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ProblemSection from "./components/ProblemSection";
import OldWayVsNewWay from "./components/OldWayVsNewWay";
import VocalLeaks from "./components/VocalLeaks";
import Feedbacks from "./components/Feedbacks";
import ProductInside from "./components/ProductInside";
import WhoItsFor from "./components/WhoItsFor";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CreatorPortal from "./components/CreatorPortal";
import { Unlock, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showCreatorPortal, setShowCreatorPortal] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleUnlockGuides = () => {
    setUnlocked(true);
    setShowNotification(true);
  };

  // Hide the notification after 5 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#0D0D0D] selection:bg-[#8A9BAE]/30 antialiased font-sans">
      
      {/* Floating Navbar */}
      <Navbar 
        onScrollToSection={handleScrollToSection}
        onOpenCheckout={() => handleScrollToSection("pricing")}
      />

      {/* Main Sections */}
      <main>
        {/* Section 01: Hero */}
        <Hero 
          onOpenCheckout={() => handleScrollToSection("pricing")}
          onScrollToSection={handleScrollToSection}
        />

        {/* Section 02: Trust Press Bar */}
        <TrustBar />

        {/* Section 03: The Problem list & Research Tab */}
        <ProblemSection />

        {/* Section 04: Old Way vs SpeakEase Way */}
        <OldWayVsNewWay />

        {/* New Feature: Vocal Opportunity Leaks & Financial Impact Calculator */}
        <VocalLeaks />

        {/* Section 04.5: Short Realistic Feedbacks */}
        <Feedbacks />

        {/* Section 05: What's Inside & Digital PDF Chapters Reader */}
        <ProductInside 
          unlocked={unlocked} 
          onOpenCheckout={() => handleScrollToSection("pricing")}
        />

        {/* Section 06: Who Its For */}
        <WhoItsFor />

        {/* Section 07: Pricing Card & Simulated Checkout Gateway */}
        <Pricing 
          onUnlockGuides={handleUnlockGuides}
          unlocked={unlocked}
        />

        {/* Section 08: FAQ Accordion */}
        <FAQ />
      </main>

      {/* Section 09 & 10: Final CTA and footer policies */}
      <Footer 
        onOpenCheckout={() => handleScrollToSection("pricing")}
        onScrollToSection={handleScrollToSection}
        onOpenCreatorPortal={() => setShowCreatorPortal(true)}
      />

      {/* Creator Dashboard overlay */}
      <AnimatePresence>
        {showCreatorPortal && (
          <CreatorPortal 
            isOpen={showCreatorPortal} 
            onClose={() => setShowCreatorPortal(false)} 
          />
        )}
      </AnimatePresence>

      {/* Persistent floating notification on unlocked guides */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-emerald-50 border border-emerald-200 p-4 rounded-xl shadow-2xl flex items-start gap-3.5"
          >
            <div className="p-2 bg-emerald-500 text-white rounded-lg shrink-0 shadow-md">
              <Unlock size={16} />
            </div>
            <div>
              <h5 className="font-sans text-xs font-bold text-emerald-800 uppercase tracking-wider">
                SpeakEase Guides Unlocked!
              </h5>
              <p className="font-sans text-[11px] text-neutral-600 mt-1 leading-relaxed">
                Thank you for your simulated purchase! Scroll up to **"What's Inside"** and click **"Open & Read Digital PDF"** to browse full educational contents directly.
              </p>
              <button
                onClick={() => {
                  setShowNotification(false);
                  handleScrollToSection("system");
                }}
                className="mt-2 text-[10px] font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-wider border-none bg-transparent cursor-pointer flex items-center gap-1"
              >
                Start Reading Now →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
