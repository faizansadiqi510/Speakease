import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Settings, UploadCloud, FileText, TrendingUp, History, 
  DollarSign, CheckCircle, AlertTriangle, Book, File, Copy, 
  Check, Loader2, ArrowRight, ShieldCheck 
} from "lucide-react";

interface Purchase {
  id: string;
  fullName: string;
  email: string;
  amount: number;
  paymentMethod: string;
  date: string;
}

interface CreatorPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatorPortal({ isOpen, onClose }: CreatorPortalProps) {
  const [activeTab, setActiveTab] = useState<"upload" | "pricing" | "history" | "docs">("upload");
  const [price, setPrice] = useState(399);
  const [priceInput, setPriceInput] = useState("399");
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [hasGuide1, setHasGuide1] = useState(false);
  const [hasGuide2, setHasGuide2] = useState(false);
  
  const [isSavingPrice, setIsSavingPrice] = useState(false);
  const [priceSavedSuccess, setPriceSavedSuccess] = useState(false);
  
  // Upload states
  const [isUploading, setIsUploading] = useState<"guide-1" | "guide-2" | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<"guide-1" | "guide-2" | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);

  // Docs instructions state
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const fetchConfigAndHistory = async () => {
    try {
      const res = await fetch("/api/checkout/config");
      if (res.ok) {
        const data = await res.json();
        setPrice(data.price);
        setPriceInput(String(data.price));
        setPurchases(data.purchases || []);
        setHasGuide1(data.hasGuide1);
        setHasGuide2(data.hasGuide2);
      }
    } catch (err) {
      console.error("Error loading admin info", err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchConfigAndHistory();
    }
  }, [isOpen]);

  const handleSavePrice = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseFloat(priceInput);
    if (isNaN(parsed) || parsed <= 0) {
      alert("Please enter a valid positive price");
      return;
    }

    setIsSavingPrice(true);
    setPriceSavedSuccess(false);

    try {
      const res = await fetch("/api/checkout/save-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: parsed })
      });

      if (res.ok) {
        const data = await res.json();
        setPrice(data.price);
        setPriceSavedSuccess(true);
        setTimeout(() => setPriceSavedSuccess(false), 3000);
      } else {
        throw new Error("Failed to save price config");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving pricing config on the backend.");
    } finally {
      setIsSavingPrice(false);
    }
  };

  const handleFileUpload = async (guideId: "guide-1" | "guide-2", file: File) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      setUploadError("Only PDF files are supported for delivery.");
      return;
    }

    setIsUploading(guideId);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      // Convert to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        const base64String = (reader.result as string).split(",")[1];
        
        const res = await fetch("/api/admin/upload-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            guideId,
            fileName: file.name,
            fileBase64: base64String
          })
        });

        if (res.ok) {
          setUploadSuccess(guideId);
          fetchConfigAndHistory();
          setTimeout(() => setUploadSuccess(null), 3500);
        } else {
          const errData = await res.json();
          throw new Error(errData.error || "Failed to upload file");
        }
        setIsUploading(null);
      };
      reader.onerror = () => {
        throw new Error("Failed to read file.");
      };
    } catch (err: any) {
      console.error(err);
      setUploadError(err?.message || "An error occurred during file upload.");
      setIsUploading(null);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const stripeBackendCode = `// Stripe integration implementation inside server.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // or latest
});

app.post('/api/checkout/create-session', async (req, res) => {
  try {
    const { email, fullName } = req.body;
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: 'SpeakEase Digital Guides Bundle',
            description: 'Includes Clear Speech Guide + Global Accent Neutralization Playbook',
          },
          unit_amount: activePrice * 100, // Amount in paise/cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      customer_email: email,
      metadata: { fullName, email },
      success_url: \`\${process.env.APP_URL}/?session_id={CHECKOUT_SESSION_ID}&unlocked=true\`,
      cancel_url: \`\${process.env.APP_URL}/?cancelled=true\`,
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0D0D]/85 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        className="bg-white rounded-2xl border border-[#C8CDD4]/20 w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      >
        
        {/* SIDEBAR NAVIGATION */}
        <div className="w-full md:w-64 bg-neutral-950 text-white p-6 flex flex-col justify-between shrink-0 border-r border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="p-1.5 bg-neutral-800 text-emerald-400 rounded-lg">
                <Settings size={18} />
              </span>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-tight text-white">Creator Hub</h4>
                <p className="font-sans text-[10px] text-neutral-400">SpeakEase Admin Panel</p>
              </div>
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("upload")}
                className={`w-full text-left px-3 py-2.5 rounded-lg font-sans text-xs font-semibold flex items-center gap-2.5 transition-colors border-none cursor-pointer ${
                  activeTab === "upload" 
                    ? "bg-white text-black" 
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <UploadCloud size={14} />
                Upload PDF Assets
              </button>
              <button
                onClick={() => setActiveTab("pricing")}
                className={`w-full text-left px-3 py-2.5 rounded-lg font-sans text-xs font-semibold flex items-center gap-2.5 transition-colors border-none cursor-pointer ${
                  activeTab === "pricing" 
                    ? "bg-white text-black" 
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <DollarSign size={14} />
                Pricing Configuration
              </button>
              <button
                onClick={() => setActiveTab("history")}
                className={`w-full text-left px-3 py-2.5 rounded-lg font-sans text-xs font-semibold flex items-center gap-2.5 transition-colors border-none cursor-pointer ${
                  activeTab === "history" 
                    ? "bg-white text-black" 
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <History size={14} />
                Sales & Transactions
              </button>
              <button
                onClick={() => setActiveTab("docs")}
                className={`w-full text-left px-3 py-2.5 rounded-lg font-sans text-xs font-semibold flex items-center gap-2.5 transition-colors border-none cursor-pointer ${
                  activeTab === "docs" 
                    ? "bg-white text-black" 
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <ShieldCheck size={14} />
                Checkout Setup Guide
              </button>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/5 mt-8 hidden md:block">
            <p className="text-[10px] text-neutral-500 font-mono">QORR PLATFORM v1.4</p>
            <p className="text-[10px] text-neutral-500 font-mono mt-1">SECURE DIGITAL VAULT</p>
          </div>
        </div>

        {/* CONTENT STAGE */}
        <div className="flex-grow flex flex-col overflow-hidden bg-neutral-50 text-[#0d0d0d]">
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 bg-white flex items-center justify-between">
            <div>
              <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                SYSTEM CONTROL STAGE
              </span>
              <h3 className="font-serif text-xl font-semibold text-neutral-900 capitalize">
                {activeTab === "upload" && "Delivery PDF Uploads"}
                {activeTab === "pricing" && "Price Settings"}
                {activeTab === "history" && "Sales Logbook"}
                {activeTab === "docs" && "Stripe Checkout Setup"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-neutral-100 rounded-full text-neutral-500 hover:text-neutral-900 transition-colors border-none cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-grow p-6 overflow-y-auto max-h-[60vh] md:max-h-[none]">
            
            {/* TAB 1: UPLOADS PANEL */}
            {activeTab === "upload" && (
              <div className="space-y-6">
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start gap-3">
                  <Book size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                  <div className="text-xs text-emerald-800 leading-relaxed">
                    <p className="font-bold uppercase tracking-wider text-[10px]">How Delivery Works:</p>
                    <p className="mt-1">When a user purchases the SpeakEase Bundle, their downloadable links point directly to secure, server-side PDF files. Use the controls below to upload and replace the standard guides with your real book assets!</p>
                  </div>
                </div>

                {uploadError && (
                  <div className="bg-red-50 border border-red-100 text-red-700 p-3.5 rounded-xl text-xs flex items-center gap-2">
                    <AlertTriangle size={14} className="shrink-0" />
                    {uploadError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* File Upload 1 */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-wider">GUIDE 01</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans font-semibold ${hasGuide1 ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-neutral-100 text-neutral-500"}`}>
                          {hasGuide1 ? "Active Custom PDF" : "Default Fallback"}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-neutral-900 mb-1">The Clear Speech Guide</h4>
                      <p className="font-sans text-xs text-neutral-500 mb-6 leading-relaxed">This is the main ebook that teaches pronunciation, mouth shapes, and client pitch preparation.</p>
                    </div>

                    <div>
                      <input 
                        type="file" 
                        ref={fileInputRef1}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload("guide-1", file);
                        }}
                        className="hidden" 
                        accept="application/pdf"
                      />
                      
                      {isUploading === "guide-1" ? (
                        <div className="w-full flex items-center justify-center py-3 bg-neutral-100 rounded-full font-sans text-xs text-neutral-600 font-semibold gap-2">
                          <Loader2 size={14} className="animate-spin" /> Uploading Base64 stream...
                        </div>
                      ) : uploadSuccess === "guide-1" ? (
                        <div className="w-full flex items-center justify-center py-3 bg-emerald-500 text-white rounded-full font-sans text-xs font-semibold gap-2">
                          <Check size={14} /> Upload Successful!
                        </div>
                      ) : (
                        <button
                          onClick={() => fileInputRef1.current?.click()}
                          className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-sans text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border-none cursor-pointer shadow-sm"
                        >
                          <UploadCloud size={14} />
                          {hasGuide1 ? "Replace Guide 1 PDF" : "Upload Guide 1 PDF"}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* File Upload 2 */}
                  <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-wider">GUIDE 02</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans font-semibold ${hasGuide2 ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-neutral-100 text-neutral-500"}`}>
                          {hasGuide2 ? "Active Custom PDF" : "Default Fallback"}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-neutral-900 mb-1">The Global Accent Guide</h4>
                      <p className="font-sans text-xs text-neutral-500 mb-6 leading-relaxed">This is the bonus guide that includes the daily metronome pacing chart sheet drills.</p>
                    </div>

                    <div>
                      <input 
                        type="file" 
                        ref={fileInputRef2}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload("guide-2", file);
                        }}
                        className="hidden" 
                        accept="application/pdf"
                      />
                      
                      {isUploading === "guide-2" ? (
                        <div className="w-full flex items-center justify-center py-3 bg-neutral-100 rounded-full font-sans text-xs text-neutral-600 font-semibold gap-2">
                          <Loader2 size={14} className="animate-spin" /> Uploading Base64 stream...
                        </div>
                      ) : uploadSuccess === "guide-2" ? (
                        <div className="w-full flex items-center justify-center py-3 bg-emerald-500 text-white rounded-full font-sans text-xs font-semibold gap-2">
                          <Check size={14} /> Upload Successful!
                        </div>
                      ) : (
                        <button
                          onClick={() => fileInputRef2.current?.click()}
                          className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full font-sans text-xs font-semibold transition-all flex items-center justify-center gap-1.5 border-none cursor-pointer shadow-sm"
                        >
                          <UploadCloud size={14} />
                          {hasGuide2 ? "Replace Guide 2 PDF" : "Upload Guide 2 PDF"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PRICING CONFIG */}
            {activeTab === "pricing" && (
              <div className="space-y-6 max-w-lg">
                <form onSubmit={handleSavePrice} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4">
                  <h4 className="font-serif text-lg font-bold text-neutral-950">Update Active Retail Price</h4>
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                    Set the active price for the SpeakEase Method ebook bundle. This instantly updates the pricing card, subtotal grids, and checkout portal calculations.
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <label className="block font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                      Price Amount (INR - ₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans font-semibold text-neutral-400 text-sm">
                        ₹
                      </span>
                      <input
                        type="number"
                        required
                        value={priceInput}
                        onChange={(e) => setPriceInput(e.target.value)}
                        placeholder="399"
                        className="w-full pl-8 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl font-sans text-sm focus:outline-none focus:border-neutral-400 font-bold"
                      />
                    </div>
                  </div>

                  {priceSavedSuccess && (
                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-3 rounded-xl text-xs flex items-center gap-1.5">
                      <CheckCircle size={14} /> Pricing config updated successfully on server!
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSavingPrice}
                    className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 disabled:bg-neutral-600 text-white rounded-full font-sans text-xs font-semibold transition-all flex items-center justify-center gap-1 border-none cursor-pointer"
                  >
                    {isSavingPrice ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Saving price settings...
                      </>
                    ) : (
                      "Save Price Settings"
                    )}
                  </button>
                </form>

                <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-start gap-3">
                  <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
                  <div className="text-xs text-amber-800 leading-relaxed">
                    <p className="font-bold uppercase tracking-wider text-[10px]">Important currency standard:</p>
                    <p className="mt-1">
                      Currently set in Indian Rupees (₹) as targeted for Indian freelance professionals. If you plan to accept international payments via Stripe Checkout, you can modify the currency code in the backend Stripe handler to <code className="bg-amber-100/60 px-1 py-0.5 rounded text-[10px] font-mono">usd</code>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: TRANSACTION SALES */}
            {activeTab === "history" && (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-semibold block">Total Revenue</span>
                    <span className="font-serif text-2xl font-bold text-neutral-900 mt-1 block">
                      ₹{purchases.reduce((acc, p) => acc + p.amount, 0)}
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-semibold block">Total Sales</span>
                    <span className="font-serif text-2xl font-bold text-neutral-900 mt-1 block">
                      {purchases.length} units
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-semibold block">Conversion Avg</span>
                    <span className="font-serif text-2xl font-bold text-neutral-900 mt-1 block">
                      ₹{purchases.length > 0 ? Math.round(purchases.reduce((acc, p) => acc + p.amount, 0) / purchases.length) : 0}
                    </span>
                  </div>
                </div>

                <div className="bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans text-xs">
                      <thead className="bg-neutral-50 text-neutral-500 uppercase font-mono text-[9px] tracking-wider border-b border-neutral-100">
                        <tr>
                          <th className="p-4">Customer</th>
                          <th className="p-4">Delivery Email</th>
                          <th className="p-4">Method</th>
                          <th className="p-4">Date</th>
                          <th className="p-4 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100 text-neutral-800 font-medium">
                        {purchases.map((purchase) => (
                          <tr key={purchase.id} className="hover:bg-neutral-50">
                            <td className="p-4 font-bold text-neutral-900">{purchase.fullName}</td>
                            <td className="p-4 text-neutral-500">{purchase.email}</td>
                            <td className="p-4 text-neutral-600 font-mono text-[10px]">{purchase.paymentMethod}</td>
                            <td className="p-4 text-neutral-400">
                              {new Date(purchase.date).toLocaleDateString()} {new Date(purchase.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </td>
                            <td className="p-4 text-right font-bold text-neutral-900">₹{purchase.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: DEVELOPER INSTRUCTIONS */}
            {activeTab === "docs" && (
              <div className="space-y-6">
                <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm space-y-4">
                  <h4 className="font-serif text-lg font-bold text-neutral-900">How to Setup Live Payments</h4>
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                    SpeakEase is currently pre-configured to use a seamless simulated payment processor to make testing and demonstration hassle-free. To transition to a live checkout system (such as Stripe Checkout), complete these simple development steps:
                  </p>

                  <div className="space-y-5 pt-2">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                      <div className="text-xs space-y-1">
                        <p className="font-bold text-neutral-900">Install the Stripe client package</p>
                        <p className="text-neutral-500">Run <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[10px] text-neutral-950 font-semibold">npm i stripe</code> to install Stripe SDK on the server side.</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                      <div className="text-xs space-y-1">
                        <p className="font-bold text-neutral-900">Define your Stripe environment keys</p>
                        <p className="text-neutral-500">Add your Stripe credentials to the secret <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[10px] text-neutral-950">.env</code> configuration file:</p>
                        <div className="relative mt-2 bg-neutral-950 text-white p-3 rounded-xl font-mono text-[10px] flex items-center justify-between">
                          <span>STRIPE_SECRET_KEY=sk_live_...<br />VITE_STRIPE_PUBLIC_KEY=pk_live_...</span>
                          <button
                            onClick={() => copyToClipboard("STRIPE_SECRET_KEY=\nVITE_STRIPE_PUBLIC_KEY=", "keys")}
                            className="text-emerald-400 bg-white/5 border border-white/10 hover:bg-white/10 px-2 py-1 rounded text-[9px] uppercase tracking-wider font-semibold cursor-pointer"
                          >
                            {copiedText === "keys" ? "Copied!" : "Copy Template"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
                      <div className="text-xs space-y-1">
                        <p className="font-bold text-neutral-900">Mount Stripe Session API Route</p>
                        <p className="text-neutral-500">Replace the simulated checkout endpoint in <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[10px] text-neutral-950">server.ts</code> with a real Stripe Session creator:</p>
                        <div className="relative mt-2 bg-neutral-950 text-white p-3 rounded-xl font-mono text-[10px] overflow-x-auto max-h-48 whitespace-pre leading-relaxed">
                          {stripeBackendCode}
                          <button
                            onClick={() => copyToClipboard(stripeBackendCode, "code")}
                            className="absolute top-2 right-2 text-emerald-400 bg-white/5 border border-white/10 hover:bg-white/10 px-2.5 py-1.5 rounded text-[9px] uppercase tracking-wider font-semibold cursor-pointer"
                          >
                            {copiedText === "code" ? "Copied!" : "Copy Code"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </motion.div>
    </div>
  );
}
