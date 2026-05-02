import React, { useState } from 'react';
import { Shield, Smartphone, QrCode } from 'lucide-react';
import trustShieldImg from "./picture/trust shield.jpg";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#1e2329]">
      {/* Main Container */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Visuals */}
          <div className="hidden sm:relative flex justify-center items-center">
            {/* Simple representation of the globe/shield graphic */}
            <div className="flex relative w-80 h-80">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Shield size={200} strokeWidth={1} className="text-blue-500 opacity-80" />
              </div>
              {/* Floating Ethereum-like shape */}
              <div className="absolute right-0 top-1/4 w-12 h-16 bg-gradient-to-br from-blue-400 to-blue-700 clip-path-eth shadow-xl rotate-12"></div>
            </div>
          </div>

          {/* Right Side: Form Content */}
          <div className=" flex flex-col space-y-6 mt-[50px] w-full mx-auto max-w-full sm: mx-0">
            <div className="flex w-full justify-center sm:justify-start items-center space-x-2 mb-4">
             <img src={trustShieldImg} alt="trust shield" className='size-[50px] h-[50px]'/>
              <h1 className="text-4xl font-bold tracking-tight text-blue-700">TRUST <span className="font-extralight">WALLET</span></h1>
            </div>

            <h2 className="text-center text-4xl font-semibold leading-tight text-gray-800 mt-[50px] sm:text-left ">
              Join 200M users in securing their financial future
            </h2>

            <div className="space-y-4 pt-4">
              {/* Checkbox Section */}
              <div className=" flex w-full justify-center sm:justify-start items-center space-x-3 cursor-pointer" onClick={() => setAgreed(!agreed)}>
                <input 
                  type="checkbox" 
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500">
                  I have read and agree to the <span className="text-blue-600 hover:underline">Terms of Use</span> and <span className="text-blue-600 hover:underline">Privacy Policy</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col ml-auto sm:flex flex-col space-y-3">
                <button 
                  disabled={!agreed}
                  onClick={()=> navigate ('/import')}
                  className={`w-full py-4 rounded-full font-semibold transition-all ${
                    agreed ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-200 text-white cursor-not-allowed'
                  }`}
                >
                  I already have a wallet
                </button>
                
                <button 
                  className="w-full py-4 rounded-full font-semibold text-blue-600 border border-transparent hover:bg-blue-50 transition-colors"
                >
                  Create new wallet
                </button>
              </div>
            </div>

            {/* Footer Options */}
            <div className="pt-8 border-t border-gray-100 space-y-4">
              <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                <span>Have the Trust Wallet mobile app?</span>
                <Smartphone size={16} />
              </div>
              
              <button className="flex items-center justify-center space-x-2 w-full text-blue-600 font-medium hover:underline">
                <QrCode size={18} />
                <span>Scan QR to sync</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;