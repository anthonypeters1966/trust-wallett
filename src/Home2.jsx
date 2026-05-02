import React, { useState } from "react";
import trustShieldImg from "./picture/trust shield.jpg";
import trust from "./video/laptopvid.mp4";
import { useNavigate } from "react-router-dom";
import metaMask from "./picture/metaMask.jpg";
import phantom from "./picture/phantom.jpg";
import coinbase from "./picture/coinbase.jpg";

const Home2 = () => {
  const navigate = useNavigate();

  const wallets = [
    { name: "Trust Wallet Mobile", img: trustShieldImg },
    { name: "MetaMask", img: metaMask },
    { name: "Phantom", img: phantom },
    { name: "Coinbase", img: coinbase },
    { name: "Other mobile wallet or extension", emoji: "📦" },
  ];

  return (
    <div className="sm:flex h-full w-full bg-white text-gray-900 font-sans overflow-hidden">
      {/* Left Sidebar Section */}
      <div className="sm:flex-1 bg-gradient-to-br to-blue-200 p-12 flex flex-col justify-between">
        <div className="">
          {/* Logo */}
          <div className="flex items-center gap-3 text-blue-700 font-bold text-xl tracking-tight">
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
        </div>

        {/* Heading */}
        <div className="mt-[50px]">
          <p className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wide">
            Step 2 of 3
          </p>
          <h1 className="text-3xl text-center sm:text-4xl text-start font-bold text-gray-800 tracking-tight">
            Import a wallet
          </h1>
        </div>

        {/* Laptop Illustration Component */}
        <div className="hidden sm:flex mb-[40px] mr-[20px] justify-center opacity-80 transition-all">
          <video
            src={trust}
            autoPlay
            loop
            muted
            playsInline
            className="h-[200px] rounded-[100px] bg-slate-200 shadow-slate-200/50"
          />
        </div>
      </div>

      {/* Right Main Content Section */}
      <div className="flex-[1.6] p-16 pt-32 relative flex flex-col justify-center items-center bg-white">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-25 left-16 text-gray-400 hover:text-gray-600 flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-10 text-gray-800">
            Select your existing wallet
          </h2>

          {/* Wallet List */}
          <div className="flex flex-col gap-3">
            {wallets.map((wallet, index) => (
              <div
                key={index}
                onClick={() => navigate("/switch")}
                className="group flex items-center p-4 border border-gray-100 rounded-2xl cursor-pointer hover:bg-gray-50 hover:border-gray-200 transition"
              >
                <div
                  className={`w-12 h-10 ${wallet.iconBg} rounded-xl flex items-center justify-center mr-5 transition-transform group-hover:scale-110`}
                >
                  {wallet.emoji ? (
                    <span className="text-xl">{wallet.emoji}</span>
                  ) : (
                    <img
                      src={wallet.img}
                      alt={wallet.name}
                      className="w-7 h-7 object-contain rounded-sm"
                    />
                  )}
                </div>
                <span className="flex-1 font-semibold text-gray-700 text-lg">
                  {wallet.name}
                </span>
                <svg
                  className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
