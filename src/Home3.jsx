import React from "react";
import trustShieldImg from "./picture/trust shield.jpg";
import trust from "./video/laptopvid.mp4";
import { useNavigate } from "react-router-dom";

const Home3 = () => {
  const navigate = useNavigate();
  const wallets = [{ name: "Trust Wallet Mobile", img: trustShieldImg }];
  return (
    <div className=" sm:flex h-full w-full bg-white text-gray-900 font-sans overflow-hidden">
      {/* Left Sidebar Section */}
      <div className="  sm:flex-1 bg-gradient-to-br to-violet-200 p-12 flex flex-col justify-between">
        <div className="">
          {/* Logo */}
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

          {/* Heading */}
          <div className="mt-[50px]">
          <p className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wide">
            Step 2 of 3
          </p>
          <h1 className="text-3xl text-center sm:text-4xl text-start font-bold text-gray-800 tracking-tight">
            Import a wallet
          </h1>
        </div>
        </div>

        {/* Laptop Illustration Component */}
        <div className=" hidden sm:flex mr-[20px] justify-center opacity-80 mt-[120px] transition-all">
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
      <div className=" flex-[1.6] p-16 pt-32 relative flex flex-col justify-center items-start bg-white">
        {/* Back Button */}
        <div className=" flex flex-col gap-4 w-full  max-w-md ">
          <h3 className="text-2xl font-semibold">select a method</h3>
          <a
            href="/home"
            className="flex item-center  justify-between p-4 bg-gray-50 border
                   border-gray-100 rounded-xl hover:bg-gray-100 transition-all w-full flex-shrink-0"
          >
            <div className="flex items-center gap-3">
              <div className="p-2  bg-gray-300 rounded-full shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">
                Import with QR code from mobile
              </span>
              <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold uppercase">
                Recommended
              </span>
            </div>
          </a>
          <a
            href="/home"
            className="flex item-center  justify-between p-4 bg-gray-50 border
                   border-gray-100 rounded-xl hover:bg-gray-100 transition-all w-full flex-shrink-0"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-300 rounded-full shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">
                Import with QR code from mobile
              </span>
            </div>
          </a>
        </div>
        <button
          onClick={() => navigate("/import")}
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
      </div>
    </div>
  );
};

export default Home3;
