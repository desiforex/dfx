"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import VipPassPopup from "@/components/vip-pass-popup";
import { DFX3DScene } from "@/components/dfx-3d-scene";
import Link from "next/link";
import MobileNavbar from "@/components/mobile-navbar";

  function HomePage() {
    const [loading, setLoading] = useState(true);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const [showVipPopup, setShowVipPopup] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black">
          <div className="w-16 h-16 rounded-full border-t-4 border-b-4 border-green-400 animate-spin mb-6"></div>
          <h1 className="text-3xl font-bold text-white mb-2">
            DFX<span className="text-green-400 animate-pulse">...</span>
          </h1>
          <p className="text-gray-400 text-sm">Initializing Trading Matrix</p>
        </div>
      );
    }
  
    return (
      <>
        <VipPassPopup open={showVipPopup} onClose={() => setShowVipPopup(false)} />
        <main className="relative w-full h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <DFX3DScene />
          </div>
        </div>
  
        <MobileNavbar />
  
        {/* Main Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-4 pointer-events-none pb-32">
          <div className="max-w-4xl text-center mb-8">
            <div className="flex flex-col sm:flex-row gap-8 justify-center pointer-events-auto">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-green-400 hover:bg-green-500 text-black font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl shadow-green-400/30 transform hover:scale-105 transition-all duration-300"
                >
                  Join Desi Forex
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-400 text-green-400 hover:bg-green-200 px-12 py-6 text-xl rounded-2xl bg-black/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
  
          {/* Feature Cards */}
          <div className="hidden md:flex md:justify-center md:w-full pointer-events-auto">
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/20 backdrop-blur-sm border border-green-400/10 rounded-lg p-4 hover:border-green-400/30 transition-all">
            <h3 className="text-lg font-bold text-white mb-2">
              AI-Powered Learning
            </h3>
            <p className="text-gray-400 text-xs">
              Personalized curriculum adapts to your learning style
            </p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-green-400/10 rounded-lg p-4 hover:border-green-400/30 transition-all">
            <h3 className="text-lg font-bold text-white mb-2">
              Live Trading Lab
            </h3>
            <p className="text-gray-400 text-xs">
              Practice with real market data in simulation
            </p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-green-400/10 rounded-lg p-4 hover:border-green-400/30 transition-all">
            <h3 className="text-lg font-bold text-white mb-2">
              Expert Mentorship
            </h3>
            <p className="text-gray-400 text-xs">
              Learn from professional traders and analysts
            </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    );
  }
  
  export default HomePage;