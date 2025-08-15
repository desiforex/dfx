"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import MobileNavbar from "@/components/mobile-navbar";
import UniversalTradingIntro from "@/components/universal-trading-intro";
import StepGuideSection from "@/components/step-guide-section";

const successStories = [
  {
    name: "Alex Chen",
    age: 28,
    country: "Singapore",
    course: "Algorithmic Trading Fundamentals",
    achievement: "Landed a quant trader role at Goldman Sachs",
    income: "$180K/year",
    image: "/11-min.jpg",
  },
  {
    name: "Sarah Rodriguez",
    age: 32,
    country: "USA",
    course: "Advanced Quantitative Strategies",
    achievement: "Started her own hedge fund managing $50M",
    income: "$2M/year",
    image: "/22-min.jpg",
  },
  {
    name: "Raj Patel",
    age: 25,
    country: "India",
    course: "Cryptocurrency Trading Bots",
    achievement: "Built a crypto trading platform with 10K users",
    income: "$500K/year",
    image: "/33-min.jpg",
  },
];

function StepCircle(props: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center rounded-full border-2 border-green-400 bg-black p-4 shadow-lg mb-2">
        {props.children}
      </div>
      <span className="text-xs text-gray-200 font-semibold mt-1">
        {props.label}
      </span>
    </div>
  );
}

function StepCard({
  svg,
  label,
  description,
}: {
  svg: React.ReactNode;
  label: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center bg-zinc-900/80 rounded-xl p-4 shadow-lg w-44 min-h-[180px] border border-green-900">
      <div className="mb-2">{svg}</div>
      <div className="text-green-400 font-bold text-base mb-1">{label}</div>
      <div className="text-xs text-gray-300 text-center leading-snug">
        {description}
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentStory, setCurrentStory] = useState(0);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {showIntro && (
        <UniversalTradingIntro
          onComplete={handleIntroComplete}
          pageName="Trading Academy"
        />
      )}

      <MobileNavbar />

      <div
        className={`transition-opacity duration-1000 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Hero Section */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              JOIN THE DFX COMMUNITY{" "}
              <span className="text-green-400">ONBOARDING</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We don't sell courses. Instead, we help you start your trading
              journey with real demo trades, live signals, and a supportive
              community.{" "}
              <span className="text-green-400 font-bold">
                Follow three simple
              </span>{" "}
              onboarding steps to unlock VIP signals and resources.
            </p>
            <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
              <StepCard
                svg={
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <rect
                      x="8"
                      y="14"
                      width="40"
                      height="24"
                      rx="4"
                      fill="#18181b"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                    <rect x="16" y="34" width="3" height="-10" fill="#22c55e" />
                    <rect x="24" y="34" width="3" height="-16" fill="#22c55e" />
                    <rect x="32" y="34" width="3" height="-6" fill="#22c55e" />
                    <rect x="40" y="34" width="3" height="-20" fill="#22c55e" />
                    <rect
                      x="20"
                      y="44"
                      width="16"
                      height="3"
                      rx="1.5"
                      fill="#22c55e"
                    />
                  </svg>
                }
                label="Join Telegram"
                description="Join our Telegram group to see real trades and results."
              />
              <svg
                width="48"
                height="8"
                viewBox="0 0 48 8"
                fill="none"
                className="hidden md:block"
              >
                <rect y="3" width="48" height="2" rx="1" fill="#22c55e" />
              </svg>

              <StepCard
                svg={
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <rect
                      x="10"
                      y="16"
                      width="36"
                      height="20"
                      rx="4"
                      fill="#18181b"
                      stroke="#FFD600"
                      strokeWidth="2"
                    />
                    <rect
                      x="16"
                      y="20"
                      width="24"
                      height="8"
                      rx="2"
                      fill="#FFD600"
                    />
                    <ellipse cx="28" cy="36" rx="7" ry="2.5" fill="#FFD600" />
                  </svg>
                }
                label="Forex"
                description="Open your Forex account with us and start growing your wealth."
              />
              <svg
                width="48"
                height="8"
                viewBox="0 0 48 8"
                fill="none"
                className="hidden md:block"
              >
                <rect y="3" width="48" height="2" rx="1" fill="#22c55e" />
              </svg>
              <StepCard
                svg={
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <rect
                      x="18"
                      y="10"
                      width="20"
                      height="36"
                      rx="5"
                      fill="#18181b"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                    <circle cx="28" cy="42" r="2.5" fill="#22c55e" />
                    <rect
                      x="22"
                      y="18"
                      width="12"
                      height="3"
                      rx="1.5"
                      fill="#22c55e"
                    />
                    <rect
                      x="22"
                      y="24"
                      width="8"
                      height="3"
                      rx="1.5"
                      fill="#22c55e"
                    />
                    <polygon
                      points="38,30 24,26 26,36 30,32 34,36"
                      fill="#22c55e"
                    />
                  </svg>
                }
                label="Onboarding"
                description="Take a screenshot showing you have joined and send it to the Admin."
              />
              <svg
                width="48"
                height="8"
                viewBox="0 0 48 8"
                fill="none"
                className="hidden md:block"
              >
                <rect y="3" width="48" height="2" rx="1" fill="#22c55e" />
              </svg>

              <StepCard
                svg={
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <rect
                      x="16"
                      y="26"
                      width="24"
                      height="12"
                      rx="4"
                      fill="#FFD700"
                      stroke="#22c55e"
                      strokeWidth="2"
                    />
                    <polygon
                      points="18,26 22,18 28,26 34,18 38,26"
                      fill="#FFD700"
                      stroke="#22c55e"
                      strokeWidth="1"
                    />
                    <circle cx="22" cy="18" r="2" fill="#22c55e" />
                    <circle cx="34" cy="18" r="2" fill="#22c55e" />
                    <rect
                      x="24"
                      y="34"
                      width="8"
                      height="3"
                      rx="1.5"
                      fill="#22c55e"
                    />
                  </svg>
                }
                label="VIP Access"
                description="Complete all three steps to receive FREE VIP Access."
              />
            </div>
          </div>
        </section>

        {/* How to join */}
        <section className=" px-6 bg-green-400/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-green-400 text-sm font-semibold mb-2">
                JOINING DFX: STEP-BY-STEP GUIDE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                How to{" "}
                <span className="text-green-400">Join the Community</span>
              </h2>
            </div>
            <StepGuideSection
              steps={[
                {
                  svg: (
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      className="drop-shadow-lg"
                    >
                      {/* Background geometric pattern */}
                      <defs>
                        <pattern
                          id="grid1"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="rgb(34,197,94)"
                            strokeWidth="0.5"
                            opacity="0.3"
                          />
                        </pattern>
                        <filter id="glow1">
                          <feGaussianBlur
                            stdDeviation="3"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <rect width="200" height="200" fill="url(#grid1)" />

                      {/* Outer dashed circle with smooth rotation */}
                      <circle
                        cx="100"
                        cy="100"
                        r="85"
                        fill="none"
                        stroke="rgb(116,116,116)"
                        strokeWidth="2"
                        strokeDasharray="8,4"
                        opacity="0.6"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 100 100;360 100 100"
                          dur="12s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.6;0.9;0.6"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Inner rotating circle with counter-rotation */}
                      <g>
                        <circle
                          cx="100"
                          cy="100"
                          r="65"
                          fill="none"
                          stroke="rgb(34,197,94)"
                          strokeWidth="1.5"
                          strokeDasharray="12,6"
                          opacity="0.8"
                          filter="url(#glow1)"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="360 100 100;0 100 100"
                            dur="8s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>

                      {/* Central monitor/screen with pulsing effect */}
                      <rect
                        x="50"
                        y="70"
                        width="100"
                        height="60"
                        rx="8"
                        fill="#0f172a"
                        stroke="#22c55e"
                        strokeWidth="3"
                        filter="url(#glow1)"
                      >
                        <animate
                          attributeName="stroke-width"
                          values="3;4;3"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        x="60"
                        y="80"
                        width="80"
                        height="40"
                        rx="4"
                        fill="#1e293b"
                      />

                      {/* Animated chart bars with staggered growth */}
                      <rect
                        x="70"
                        y="105"
                        width="8"
                        height="-15"
                        fill="#22c55e"
                      >
                        <animate
                          attributeName="height"
                          values="-15;-25;-15"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        x="85"
                        y="105"
                        width="8"
                        height="-25"
                        fill="#22c55e"
                      >
                        <animate
                          attributeName="height"
                          values="-25;-35;-25"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                      </rect>
                      <rect
                        x="100"
                        y="105"
                        width="8"
                        height="-10"
                        fill="#22c55e"
                      >
                        <animate
                          attributeName="height"
                          values="-10;-20;-10"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1s"
                        />
                      </rect>
                      <rect
                        x="115"
                        y="105"
                        width="8"
                        height="-30"
                        fill="#22c55e"
                      >
                        <animate
                          attributeName="height"
                          values="-30;-40;-30"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1.5s"
                        />
                      </rect>
                      <rect
                        x="130"
                        y="105"
                        width="8"
                        height="-20"
                        fill="#22c55e"
                      >
                        <animate
                          attributeName="height"
                          values="-20;-30;-20"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="2s"
                        />
                      </rect>

                      {/* Monitor stand with subtle movement */}
                      <rect
                        x="90"
                        y="130"
                        width="20"
                        height="8"
                        rx="4"
                        fill="#22c55e"
                      />
                      <rect
                        x="97"
                        y="130"
                        width="6"
                        height="-8"
                        fill="#22c55e"
                      />

                      {/* Floating data points with complex orbital motion */}
                      <circle
                        cx="40"
                        cy="50"
                        r="3"
                        fill="#22c55e"
                        opacity="0.7"
                      >
                        <animateMotion dur="6s" repeatCount="indefinite">
                          <path d="M40,50 Q60,30 80,50 Q60,70 40,50" />
                        </animateMotion>
                        <animate
                          attributeName="r"
                          values="3;5;3"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="160"
                        cy="60"
                        r="2.5"
                        fill="#fbbf24"
                        opacity="0.7"
                      >
                        <animateMotion dur="8s" repeatCount="indefinite">
                          <path d="M160,60 Q140,40 120,60 Q140,80 160,60" />
                        </animateMotion>
                        <animate
                          attributeName="opacity"
                          values="0.7;1;0.7"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="170"
                        cy="140"
                        r="3.5"
                        fill="#22c55e"
                        opacity="0.6"
                      >
                        <animateMotion dur="7s" repeatCount="indefinite">
                          <path d="M170,140 Q150,120 130,140 Q150,160 170,140" />
                        </animateMotion>
                        <animate
                          attributeName="r"
                          values="3.5;6;3.5"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Dynamic connection lines with flowing animation */}
                      <path
                        d="M40,50 Q100,30 160,60"
                        stroke="#22c55e"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                        strokeDasharray="8,4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;12;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0.8;0.4"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </path>
                      <path
                        d="M160,60 Q140,100 170,140"
                        stroke="#fbbf24"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                        strokeDasharray="8,4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="12;0;12"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0.8;0.4"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1s"
                        />
                      </path>

                      {/* Pulsing energy rings */}
                      <circle
                        cx="100"
                        cy="100"
                        r="45"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          values="45;55;45"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.3;0.7;0.3"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                  ),
                  title: "Step 1: Join Our Telegram",
                  description: (
                    <>
                      Preview our real trades and results in the Telegram
                      group.
                      <div className="mt-4">
                        <a
                          href="https://t.me/+NXiTkxZHZbo1Mjk1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-2 rounded transition-colors"
                        >
                          Join Our Telegram
                        </a>
                      </div>
                    </>
                  ),
                },

                {
                  svg: (
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      className="drop-shadow-lg"
                    >
                      {/* Background hexagonal pattern with rotation */}
                      <defs>
                        <pattern
                          id="hexPattern2"
                          width="30"
                          height="26"
                          patternUnits="userSpaceOnUse"
                        >
                          <polygon
                            points="15,2 25,8 25,18 15,24 5,18 5,8"
                            fill="none"
                            stroke="rgb(255,214,0)"
                            strokeWidth="0.5"
                            opacity="0.2"
                          />
                        </pattern>
                        <filter id="goldGlow">
                          <feGaussianBlur
                            stdDeviation="3"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <rect width="200" height="200" fill="url(#hexPattern2)">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 100 100;360 100 100"
                          dur="30s"
                          repeatCount="indefinite"
                        />
                      </rect>

                      {/* Main circular frame with pulsing */}
                      <circle
                        cx="100"
                        cy="100"
                        r="75"
                        fill="none"
                        stroke="rgb(255,214,0)"
                        strokeWidth="2"
                        strokeDasharray="15,5"
                        opacity="0.8"
                        filter="url(#goldGlow)"
                      >
                        <animate
                          attributeName="r"
                          values="75;80;75"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.8;1;0.8"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Multiple rotating elements */}
                      <g>
                        <circle
                          cx="100"
                          cy="100"
                          r="55"
                          fill="none"
                          stroke="rgb(116,116,116)"
                          strokeWidth="1"
                          strokeDasharray="8,4"
                          opacity="0.6"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="0 100 100;-360 100 100"
                            dur="20s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle
                          cx="100"
                          cy="100"
                          r="45"
                          fill="none"
                          stroke="rgb(255,214,0)"
                          strokeWidth="0.5"
                          strokeDasharray="4,2"
                          opacity="0.4"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="360 100 100;0 100 100"
                            dur="15s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      </g>

                      {/* Central platform/card with breathing effect */}
                      <rect
                        x="60"
                        y="80"
                        width="80"
                        height="40"
                        rx="8"
                        fill="#0f172a"
                        stroke="#FFD600"
                        strokeWidth="3"
                        filter="url(#goldGlow)"
                      >
                        <animate
                          attributeName="stroke-width"
                          values="3;5;3"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        x="70"
                        y="90"
                        width="60"
                        height="20"
                        rx="4"
                        fill="#FFD600"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0.8;1"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </rect>

                      <text
                        x="100"
                        y="105"
                        textAnchor="middle"
                        fill="#0f172a"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        FX
                      </text>

                      {/* Golden coins/tokens with complex orbital motion */}
                      <circle
                        cx="40"
                        cy="60"
                        r="6"
                        fill="#FFD600"
                        opacity="0.8"
                      >
                        <animateMotion dur="8s" repeatCount="indefinite">
                          <path d="M40,60 Q20,40 60,30 Q80,50 40,60" />
                        </animateMotion>
                        <animate
                          attributeName="r"
                          values="6;9;6"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.8;1;0.8"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="160"
                        cy="70"
                        r="5"
                        fill="#FFD600"
                        opacity="0.7"
                      >
                        <animateMotion dur="10s" repeatCount="indefinite">
                          <path d="M160,70 Q180,50 140,40 Q120,60 160,70" />
                        </animateMotion>
                        <animate
                          attributeName="r"
                          values="5;8;5"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="170"
                        cy="130"
                        r="4"
                        fill="#FFD600"
                        opacity="0.6"
                      >
                        <animateMotion dur="7s" repeatCount="indefinite">
                          <path d="M170,130 Q190,150 150,160 Q130,140 170,130" />
                        </animateMotion>
                        <animate
                          attributeName="r"
                          values="4;7;4"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="30"
                        cy="140"
                        r="5"
                        fill="#FFD600"
                        opacity="0.7"
                      >
                        <animateMotion dur="9s" repeatCount="indefinite">
                          <path d="M30,140 Q10,160 50,170 Q70,150 30,140" />
                        </animateMotion>
                        <animate
                          attributeName="r"
                          values="5;8;5"
                          dur="2.2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Animated dollar signs */}
                      <text
                        x="40"
                        y="65"
                        textAnchor="middle"
                        fill="#0f172a"
                        fontSize="8"
                        fontWeight="bold"
                      >
                        $
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 40 65;360 40 65"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </text>
                      <text
                        x="160"
                        y="75"
                        textAnchor="middle"
                        fill="#0f172a"
                        fontSize="7"
                        fontWeight="bold"
                      >
                        $
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="360 160 75;0 160 75"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </text>

                      {/* Dynamic connection paths with flowing energy */}
                      <path
                        d="M40,60 Q70,50 100,80"
                        stroke="#FFD600"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                        strokeDasharray="8,4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;12;0"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0.9;0.4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </path>
                      <path
                        d="M160,70 Q130,75 100,80"
                        stroke="#FFD600"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                        strokeDasharray="8,4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="12;0;12"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0.9;0.4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                      </path>
                      <path
                        d="M100,120 Q135,125 170,130"
                        stroke="#FFD600"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                        strokeDasharray="8,4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;12;0"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0.9;0.4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="1s"
                        />
                      </path>
                      <path
                        d="M100,120 Q65,130 30,140"
                        stroke="#FFD600"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.4"
                        strokeDasharray="8,4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="12;0;12"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0.9;0.4"
                          dur="2s"
                          repeatCount="indefinite"
                          begin="1.5s"
                        />
                      </path>

                      {/* Expanding energy rings */}
                      <circle
                        cx="100"
                        cy="100"
                        r="35"
                        fill="none"
                        stroke="#FFD600"
                        strokeWidth="1"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          values="35;50;35"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.3;0.8;0.3"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle
                        cx="100"
                        cy="100"
                        r="25"
                        fill="none"
                        stroke="#FFD600"
                        strokeWidth="0.5"
                        opacity="0.2"
                      >
                        <animate
                          attributeName="r"
                          values="25;40;25"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1s"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.2;0.6;0.2"
                          dur="3s"
                          repeatCount="indefinite"
                          begin="1s"
                        />
                      </circle>

                      {/* Base platform shadow with pulsing */}
                      <ellipse
                        cx="100"
                        cy="125"
                        rx="25"
                        ry="4"
                        fill="#FFD600"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="rx"
                          values="25;30;25"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.3;0.6;0.3"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </ellipse>
                    </svg>
                  ),
                  title: "Step 2: Create Forex Account With Us",
                  description: (
                    <>
                      Create an MT5 account with us to start trading and grow
                      your portfolio.
                      <div className="mt-4">
                        <a
                          href="https://member.kasperfx.com/register"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-2 rounded transition-colors"
                        >
                          Create Account Now
                        </a>
                      </div>
                    </>
                  ),
                },
                {
                  svg: (
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      className="drop-shadow-lg"
                    >
                      {/* Background pattern with animated gradient */}
                      <defs>
                        <radialGradient id="bgGrad2" cx="50%" cy="50%" r="50%">
                          <stop
                            offset="0%"
                            stopColor="rgb(34,197,94)"
                            stopOpacity="0.1"
                          />
                          <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                        <filter id="glow2">
                          <feGaussianBlur
                            stdDeviation="2"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <circle cx="100" cy="100" r="90" fill="url(#bgGrad2)">
                        <animate
                          attributeName="r"
                          values="90;95;90"
                          dur="5s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Multiple orbital rings with different speeds */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="rgb(116,116,116)"
                        strokeWidth="1.5"
                        strokeDasharray="10,5"
                        opacity="0.5"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 100 100;360 100 100"
                          dur="15s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="100"
                        cy="100"
                        r="70"
                        fill="none"
                        stroke="rgb(34,197,94)"
                        strokeWidth="1"
                        strokeDasharray="6,3"
                        opacity="0.4"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="360 100 100;0 100 100"
                          dur="10s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Phone device with breathing animation */}
                      <rect
                        x="75"
                        y="50"
                        width="50"
                        height="100"
                        rx="12"
                        fill="#0f172a"
                        stroke="#22c55e"
                        strokeWidth="3"
                        filter="url(#glow2)"
                      >
                        <animate
                          attributeName="stroke-width"
                          values="3;5;3"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        x="80"
                        y="60"
                        width="40"
                        height="70"
                        rx="6"
                        fill="#1e293b"
                      />
                      <circle cx="100" cy="140" r="4" fill="#22c55e">
                        <animate
                          attributeName="r"
                          values="4;6;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Telegram logo with pulsing effect */}
                      <circle
                        cx="100"
                        cy="95"
                        r="15"
                        fill="#22c55e"
                        opacity="0.9"
                      >
                        <animate
                          attributeName="r"
                          values="15;18;15"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.9;1;0.9"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <path
                        d="M92,88 L108,95 L100,102 L96,98 Z"
                        fill="#0f172a"
                      />

                      {/* Message bubbles with complex floating motion */}
                      <g opacity="0.8">
                        <rect
                          x="130"
                          y="70"
                          width="25"
                          height="12"
                          rx="6"
                          fill="#22c55e"
                          opacity="0.7"
                        >
                          <animateMotion dur="4s" repeatCount="indefinite">
                            <path d="M130,70 Q140,60 150,70 Q140,80 130,70" />
                          </animateMotion>
                          <animate
                            attributeName="opacity"
                            values="0.7;1;0.7"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <circle cx="142" cy="88" r="2" fill="#22c55e">
                          <animateMotion dur="4s" repeatCount="indefinite">
                            <path d="M142,88 Q152,78 162,88 Q152,98 142,88" />
                          </animateMotion>
                        </circle>
                        <circle cx="147" cy="88" r="1.5" fill="#22c55e">
                          <animateMotion
                            dur="4s"
                            repeatCount="indefinite"
                            begin="0.5s"
                          >
                            <path d="M147,88 Q157,78 167,88 Q157,98 147,88" />
                          </animateMotion>
                        </circle>
                      </g>

                      <g opacity="0.8">
                        <rect
                          x="45"
                          y="110"
                          width="20"
                          height="10"
                          rx="5"
                          fill="#fbbf24"
                          opacity="0.7"
                        >
                          <animateMotion dur="5s" repeatCount="indefinite">
                            <path d="M45,110 Q35,100 25,110 Q35,120 45,110" />
                          </animateMotion>
                          <animate
                            attributeName="width"
                            values="20;25;20"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </rect>
                        <circle cx="55" cy="125" r="1.5" fill="#fbbf24">
                          <animateMotion dur="5s" repeatCount="indefinite">
                            <path d="M55,125 Q45,115 35,125 Q45,135 55,125" />
                          </animateMotion>
                        </circle>
                        <circle cx="59" cy="125" r="1" fill="#fbbf24">
                          <animateMotion
                            dur="5s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          >
                            <path d="M59,125 Q49,115 39,125 Q49,135 59,125" />
                          </animateMotion>
                        </circle>
                      </g>

                      {/* Enhanced signal waves with ripple effect */}
                      <g transform="translate(100,40)">
                        <path
                          d="M-15,-10 Q0,-20 15,-10"
                          stroke="#22c55e"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.6;1;0.6"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="stroke-width"
                            values="2;3;2"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                        </path>
                        <path
                          d="M-25,-15 Q0,-30 25,-15"
                          stroke="#22c55e"
                          strokeWidth="1.5"
                          fill="none"
                          opacity="0.4"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.4;0.8;0.4"
                            dur="1.5s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                          <animate
                            attributeName="stroke-width"
                            values="1.5;2.5;1.5"
                            dur="1.5s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                        </path>
                        <path
                          d="M-35,-20 Q0,-40 35,-20"
                          stroke="#22c55e"
                          strokeWidth="1"
                          fill="none"
                          opacity="0.3"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.3;0.6;0.3"
                            dur="1.5s"
                            repeatCount="indefinite"
                            begin="0.6s"
                          />
                          <animate
                            attributeName="stroke-width"
                            values="1;2;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                            begin="0.6s"
                          />
                        </path>
                      </g>

                      {/* Connecting dots with orbital motion */}
                      <circle
                        cx="60"
                        cy="80"
                        r="2"
                        fill="#22c55e"
                        opacity="0.7"
                      >
                        <animateMotion dur="6s" repeatCount="indefinite">
                          <path d="M60,80 Q80,60 100,80 Q80,100 60,80" />
                        </animateMotion>
                      </circle>
                      <circle
                        cx="140"
                        cy="120"
                        r="2"
                        fill="#fbbf24"
                        opacity="0.7"
                      >
                        <animateMotion dur="7s" repeatCount="indefinite">
                          <path d="M140,120 Q120,100 100,120 Q120,140 140,120" />
                        </animateMotion>
                      </circle>

                      {/* Dynamic connection path */}
                      <path
                        d="M60,80 Q100,60 140,120"
                        stroke="#22c55e"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                        strokeDasharray="6,6"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;12;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.3;0.7;0.3"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  ),
                  title: "Step 3: Onboarding",
                  description: (
                    <>
                      Take a screenshot showing you joined us on MT5 and send it
                      to the Admin.
                      <div className="mt-4">
                        <a
                          href="https://t.me/Evanncross"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-2 rounded transition-colors"
                        >
                          Send Screenshot Now
                        </a>
                      </div>
                    </>
                  ),
                },
                {
                  svg: (
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      className="drop-shadow-lg"
                    >
                      {/* Background star pattern with rotation */}
                      <defs>
                        <pattern
                          id="starPattern2"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <polygon
                            points="20,5 22,15 32,15 24,22 27,32 20,26 13,32 16,22 8,15 18,15"
                            fill="none"
                            stroke="rgb(34,197,94)"
                            strokeWidth="0.5"
                            opacity="0.2"
                          />
                        </pattern>
                        <filter id="crownGlow">
                          <feGaussianBlur
                            stdDeviation="4"
                            result="coloredBlur"
                          />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <rect width="200" height="200" fill="url(#starPattern2)">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 100 100;360 100 100"
                          dur="40s"
                          repeatCount="indefinite"
                        />
                      </rect>

                      {/* Multiple energy rings with different speeds */}
                      <circle
                        cx="100"
                        cy="100"
                        r="85"
                        fill="none"
                        stroke="rgb(255,215,0)"
                        strokeWidth="2"
                        strokeDasharray="12,8"
                        opacity="0.7"
                        filter="url(#crownGlow)"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 100 100;360 100 100"
                          dur="12s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.7;1;0.7"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="100"
                        cy="100"
                        r="65"
                        fill="none"
                        stroke="rgb(34,197,94)"
                        strokeWidth="1.5"
                        strokeDasharray="6,4"
                        opacity="0.8"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="360 100 100;0 100 100"
                          dur="8s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="r"
                          values="65;70;65"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      <circle
                        cx="100"
                        cy="100"
                        r="50"
                        fill="none"
                        stroke="rgb(255,215,0)"
                        strokeWidth="1"
                        strokeDasharray="4,2"
                        opacity="0.5"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 100 100;360 100 100"
                          dur="6s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Central crown/VIP symbol with enhanced animation */}
                      <g
                        transform="translate(100,100)"
                        filter="url(#crownGlow)"
                      >
                        {/* Crown base with breathing */}
                        <rect
                          x="-25"
                          y="5"
                          width="50"
                          height="15"
                          rx="5"
                          fill="#FFD700"
                          stroke="#22c55e"
                          strokeWidth="2"
                        >
                          <animate
                            attributeName="width"
                            values="50;55;50"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="x"
                            values="-25;-27.5;-25"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </rect>

                        {/* Crown peaks with individual animations */}
                        <polygon
                          points="-20,-15 -10,-25 -15,5 -25,5"
                          fill="#FFD700"
                          stroke="#22c55e"
                          strokeWidth="1.5"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1;1.1;1"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </polygon>
                        <polygon
                          points="-5,-20 5,-30 0,5 -10,5"
                          fill="#FFD700"
                          stroke="#22c55e"
                          strokeWidth="1.5"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1;1.2;1"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.3s"
                          />
                        </polygon>
                        <polygon
                          points="10,-25 20,-15 25,5 15,5"
                          fill="#FFD700"
                          stroke="#22c55e"
                          strokeWidth="1.5"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            values="1;1.1;1"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.6s"
                          />
                        </polygon>

                        {/* Crown jewels with pulsing */}
                        <circle cx="-10" cy="-25" r="3" fill="#22c55e">
                          <animate
                            attributeName="r"
                            values="3;5;3"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="1;0.7;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle cx="5" cy="-30" r="3.5" fill="#22c55e">
                          <animate
                            attributeName="r"
                            values="3.5;6;3.5"
                            dur="1.5s"
                            repeatCount="indefinite"
                            begin="0.5s"
                          />
                          <animate
                            attributeName="opacity"
                            values="1;0.7;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                            begin="0.5s"
                          />
                        </circle>
                        <circle cx="20" cy="-15" r="3" fill="#22c55e">
                          <animate
                            attributeName="r"
                            values="3;5;3"
                            dur="1.5s"
                            repeatCount="indefinite"
                            begin="1s"
                          />
                          <animate
                            attributeName="opacity"
                            values="1;0.7;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                            begin="1s"
                          />
                        </circle>

                        {/* VIP text with glow effect */}
                        <text
                          y="15"
                          textAnchor="middle"
                          fill="#0f172a"
                          fontSize="8"
                          fontWeight="bold"
                        >
                          VIP
                          <animate
                            attributeName="opacity"
                            values="1;0.8;1"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </text>
                      </g>

                      {/* Floating privilege icons with complex orbital motion */}
                      <g opacity="0.8">
                        <circle
                          cx="50"
                          cy="50"
                          r="8"
                          fill="#22c55e"
                          opacity="0.7"
                        >
                          <animateMotion dur="10s" repeatCount="indefinite">
                            <path d="M50,50 Q30,30 70,20 Q90,40 70,60 Q50,70 50,50" />
                          </animateMotion>
                          <animate
                            attributeName="r"
                            values="8;12;8"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <text
                          x="50"
                          y="55"
                          textAnchor="middle"
                          fill="#0f172a"
                          fontSize="10"
                          fontWeight="bold"
                        >
                          ★
                          <animateMotion dur="10s" repeatCount="indefinite">
                            <path d="M50,55 Q30,35 70,25 Q90,45 70,65 Q50,75 50,55" />
                          </animateMotion>
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="0 50 55;360 50 55"
                            dur="3s"
                            repeatCount="indefinite"
                          />
                        </text>
                      </g>

                      <g opacity="0.8">
                        <circle
                          cx="150"
                          cy="60"
                          r="7"
                          fill="#FFD700"
                          opacity="0.7"
                        >
                          <animateMotion dur="12s" repeatCount="indefinite">
                            <path d="M150,60 Q170,40 130,30 Q110,50 130,70 Q150,80 150,60" />
                          </animateMotion>
                          <animate
                            attributeName="r"
                            values="7;11;7"
                            dur="2.5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <text
                          x="150"
                          y="65"
                          textAnchor="middle"
                          fill="#0f172a"
                          fontSize="9"
                          fontWeight="bold"
                        >
                          ♦
                          <animateMotion dur="12s" repeatCount="indefinite">
                            <path d="M150,65 Q170,45 130,35 Q110,55 130,75 Q150,85 150,65" />
                          </animateMotion>
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="360 150 65;0 150 65"
                            dur="4s"
                            repeatCount="indefinite"
                          />
                        </text>
                      </g>

                      <g opacity="0.8">
                        <circle
                          cx="160"
                          cy="140"
                          r="6"
                          fill="#22c55e"
                          opacity="0.6"
                        >
                          <animateMotion dur="8s" repeatCount="indefinite">
                            <path d="M160,140 Q180,160 140,170 Q120,150 140,130 Q160,120 160,140" />
                          </animateMotion>
                          <animate
                            attributeName="r"
                            values="6;10;6"
                            dur="2.2s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <text
                          x="160"
                          y="145"
                          textAnchor="middle"
                          fill="#0f172a"
                          fontSize="8"
                          fontWeight="bold"
                        >
                          ♠
                          <animateMotion dur="8s" repeatCount="indefinite">
                            <path d="M160,145 Q180,165 140,175 Q120,155 140,135 Q160,125 160,145" />
                          </animateMotion>
                        </text>
                      </g>

                      <g opacity="0.8">
                        <circle
                          cx="40"
                          cy="150"
                          r="7"
                          fill="#FFD700"
                          opacity="0.7"
                        >
                          <animateMotion dur="11s" repeatCount="indefinite">
                            <path d="M40,150 Q20,170 60,180 Q80,160 60,140 Q40,130 40,150" />
                          </animateMotion>
                          <animate
                            attributeName="r"
                            values="7;11;7"
                            dur="2.8s"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <text
                          x="40"
                          y="155"
                          textAnchor="middle"
                          fill="#0f172a"
                          fontSize="9"
                          fontWeight="bold"
                        >
                          ♥
                          <animateMotion dur="11s" repeatCount="indefinite">
                            <path d="M40,155 Q20,175 60,185 Q80,165 60,145 Q40,135 40,155" />
                          </animateMotion>
                          <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="0 40 155;360 40 155"
                            dur="5s"
                            repeatCount="indefinite"
                          />
                        </text>
                      </g>

                      {/* Enhanced energy beams with flowing animation */}
                      <path
                        d="M50,50 Q75,75 100,85"
                        stroke="#22c55e"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.5"
                        strokeDasharray="6,6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.5;1;0.5"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;12;0"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                      <path
                        d="M150,60 Q125,80 100,85"
                        stroke="#FFD700"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.5"
                        strokeDasharray="6,6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.5;1;0.5"
                          dur="1.5s"
                          repeatCount="indefinite"
                          begin="0.3s"
                        />
                        <animate
                          attributeName="stroke-dashoffset"
                          values="12;0;12"
                          dur="1s"
                          repeatCount="indefinite"
                          begin="0.3s"
                        />
                      </path>
                      <path
                        d="M160,140 Q130,120 100,115"
                        stroke="#22c55e"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.5"
                        strokeDasharray="6,6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.5;1;0.5"
                          dur="1.5s"
                          repeatCount="indefinite"
                          begin="0.6s"
                        />
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;12;0"
                          dur="1s"
                          repeatCount="indefinite"
                          begin="0.6s"
                        />
                      </path>
                      <path
                        d="M40,150 Q70,125 100,115"
                        stroke="#FFD700"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.5"
                        strokeDasharray="6,6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.5;1;0.5"
                          dur="1.5s"
                          repeatCount="indefinite"
                          begin="0.9s"
                        />
                        <animate
                          attributeName="stroke-dashoffset"
                          values="12;0;12"
                          dur="1s"
                          repeatCount="indefinite"
                          begin="0.9s"
                        />
                      </path>

                      {/* Expanding power rings */}
                      <circle
                        cx="100"
                        cy="100"
                        r="30"
                        fill="none"
                        stroke="#FFD700"
                        strokeWidth="2"
                        opacity="0.4"
                      >
                        <animate
                          attributeName="r"
                          values="30;45;30"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.4;0.9;0.4"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle
                        cx="100"
                        cy="100"
                        r="20"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          values="20;35;20"
                          dur="2.5s"
                          repeatCount="indefinite"
                          begin="0.8s"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.3;0.8;0.3"
                          dur="2.5s"
                          repeatCount="indefinite"
                          begin="0.8s"
                        />
                      </circle>
                    </svg>
                  ),
                  title: "Step 4: Unlock VIP Signals",
                  description: (
                    <>
                      After completing the first three steps, you will be
                      granted access to our VIP group and unlock premium
                      signals.
                      <div className="mt-4">
                        <a
                          href="https://t.me/+AZj-CVnd5843OThl"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-2 rounded transition-colors"
                        >
                          Check VIP Access
                        </a>
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Hard Work Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-green-400 text-sm font-semibold mb-4">
                  ASK YOURSELF
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  ARE YOU PREPARED TO WORK{" "}
                  <span className="text-green-400">HARD</span>?
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    <span className="text-white font-semibold">
                      Trading is a skill.
                    </span>{" "}
                    Like any other, it can be learned, and the speed at which it
                    is learned depends on the effort you put in, your coaches,
                    and the learning environment you are taught in.
                  </p>
                  <p>
                    Our coaches actively use the trading strategies they teach,
                    they understand what it takes to be successful, and they are
                    the first to identify and utilize new technologies and
                    strategies as they emerge.
                  </p>
                  <p>
                    <span className="text-green-400 font-semibold">
                      DFX is the ultimate place to learn valuable skills for
                      building your online success.
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative">
                <svg
                  width="500"
                  height="400"
                  viewBox="0 0 500 400"
                  fill="none"
                  className="w-full h-auto"
                >
                  <defs>
                    <linearGradient
                      id="hardWorkGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgb(34,197,94)"
                        stopOpacity="0.1"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgb(34,197,94)"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                    <filter id="hardWorkGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                      <stop
                        offset="0%"
                        stopColor="rgb(34,197,94)"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgb(34,197,94)"
                        stopOpacity="0"
                      />
                    </radialGradient>
                  </defs>

                  {/* Enhanced background grid pattern */}
                  <pattern
                    id="workGrid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgb(34,197,94)"
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                    <circle
                      cx="20"
                      cy="20"
                      r="1"
                      fill="rgb(34,197,94)"
                      opacity="0.1"
                    />
                  </pattern>
                  <rect width="500" height="400" fill="url(#workGrid)" />

                  {/* Floating productivity indicators */}
                  <g opacity="0.7">
                    <circle cx="80" cy="60" r="4" fill="#22c55e">
                      <animateMotion dur="8s" repeatCount="indefinite">
                        <path d="M80,60 Q120,40 160,60 Q120,80 80,60" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0.7;1;0.7"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="400" cy="80" r="3" fill="#fbbf24">
                      <animateMotion dur="10s" repeatCount="indefinite">
                        <path d="M400,80 Q360,60 320,80 Q360,100 400,80" />
                      </animateMotion>
                      <animate
                        attributeName="r"
                        values="3;5;3"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="420" cy="300" r="3.5" fill="#22c55e">
                      <animateMotion dur="12s" repeatCount="indefinite">
                        <path d="M420,300 Q380,280 340,300 Q380,320 420,300" />
                      </animateMotion>
                    </circle>
                  </g>

                  {/* Central workspace with enhanced detail */}
                  <g transform="translate(200,150)">
                    {/* Enhanced desk with depth */}
                    <ellipse
                      cx="60"
                      cy="140"
                      rx="80"
                      ry="15"
                      fill="#0f172a"
                      opacity="0.3"
                    />
                    <rect
                      x="0"
                      y="80"
                      width="120"
                      height="60"
                      rx="8"
                      fill="#1e293b"
                      stroke="#22c55e"
                      strokeWidth="2"
                    >
                      <animate
                        attributeName="stroke-width"
                        values="2;3;2"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    {/* Multiple monitors with enhanced screens */}
                    <rect
                      x="10"
                      y="40"
                      width="40"
                      height="30"
                      rx="4"
                      fill="#0f172a"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                    >
                      <animate
                        attributeName="stroke-width"
                        values="1.5;2.5;1.5"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect
                      x="12"
                      y="42"
                      width="36"
                      height="26"
                      rx="2"
                      fill="url(#screenGlow)"
                    />

                    <rect
                      x="70"
                      y="40"
                      width="40"
                      height="30"
                      rx="4"
                      fill="#0f172a"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                    >
                      <animate
                        attributeName="stroke-width"
                        values="1.5;2.5;1.5"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </rect>
                    <rect
                      x="72"
                      y="42"
                      width="36"
                      height="26"
                      rx="2"
                      fill="url(#screenGlow)"
                    />

                    {/* Enhanced animated chart lines with more complexity */}
                    <path
                      d="M15,55 L20,50 L25,60 L30,45 L35,55 L40,50 L45,65"
                      stroke="#22c55e"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#hardWorkGlow)"
                    >
                      <animate
                        attributeName="d"
                        values="M15,55 L20,50 L25,60 L30,45 L35,55 L40,50 L45,65;M15,60 L20,45 L25,55 L30,50 L35,60 L40,45 L45,60;M15,50 L20,55 L25,45 L30,60 L35,50 L40,55 L45,50;M15,55 L20,50 L25,60 L30,45 L35,55 L40,50 L45,65"
                        dur="6s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <path
                      d="M75,55 L80,60 L85,50 L90,65 L95,55 L100,50 L105,60"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#hardWorkGlow)"
                    >
                      <animate
                        attributeName="d"
                        values="M75,55 L80,60 L85,50 L90,65 L95,55 L100,50 L105,60;M75,50 L80,55 L85,65 L90,50 L95,60 L100,55 L105,50;M75,60 L80,50 L85,55 L90,60 L95,50 L100,65 L105,55;M75,55 L80,60 L85,50 L90,65 L95,55 L100,50 L105,60"
                        dur="5s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </path>

                    {/* Animated data points on screens */}
                    <circle cx="20" cy="50" r="1.5" fill="#22c55e">
                      <animate
                        attributeName="cy"
                        values="50;45;55;50"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="1;0.5;1"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="30" cy="55" r="1.5" fill="#22c55e">
                      <animate
                        attributeName="cy"
                        values="55;50;60;55"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="85" cy="52" r="1.5" fill="#fbbf24">
                      <animate
                        attributeName="cy"
                        values="52;47;57;52"
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Person figure with subtle animation */}
                    <g transform="translate(60,20)">
                      {/* Head */}
                      <circle cx="0" cy="0" r="8" fill="#22c55e" opacity="0.8">
                        <animate
                          attributeName="opacity"
                          values="0.8;1;0.8"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      {/* Body */}
                      <rect
                        x="-6"
                        y="8"
                        width="12"
                        height="20"
                        rx="6"
                        fill="#22c55e"
                        opacity="0.7"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.7;0.9;0.7"
                          dur="4s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      {/* Arms */}
                      <line
                        x1="-6"
                        y1="15"
                        x2="-15"
                        y2="25"
                        stroke="#22c55e"
                        strokeWidth="2"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="x2"
                          values="-15;-12;-15"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </line>
                      <line
                        x1="6"
                        y1="15"
                        x2="15"
                        y2="25"
                        stroke="#22c55e"
                        strokeWidth="2"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="x2"
                          values="15;12;15"
                          dur="1s"
                          repeatCount="indefinite"
                          begin="0.5s"
                        />
                      </line>
                    </g>

                    {/* Coffee cup with steam */}
                    <g transform="translate(130,90)">
                      <rect
                        x="0"
                        y="10"
                        width="15"
                        height="20"
                        rx="2"
                        fill="#8b4513"
                        stroke="#22c55e"
                        strokeWidth="1"
                      />
                      <rect
                        x="2"
                        y="12"
                        width="11"
                        height="16"
                        rx="1"
                        fill="#4a2c2a"
                      />
                      <path
                        d="M15,15 Q20,15 20,20 Q20,25 15,25"
                        stroke="#22c55e"
                        strokeWidth="1"
                        fill="none"
                      />

                      {/* Animated steam */}
                      <g opacity="0.6">
                        <path
                          d="M5,8 Q7,5 5,2"
                          stroke="#22c55e"
                          strokeWidth="1"
                          fill="none"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.6;1;0.6"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </path>
                        <path
                          d="M8,8 Q10,5 8,2"
                          stroke="#22c55e"
                          strokeWidth="1"
                          fill="none"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.6;1;0.6"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="0.5s"
                          />
                        </path>
                        <path
                          d="M11,8 Q13,5 11,2"
                          stroke="#22c55e"
                          strokeWidth="1"
                          fill="none"
                        >
                          <animate
                            attributeName="opacity"
                            values="0.6;1;0.6"
                            dur="2s"
                            repeatCount="indefinite"
                            begin="1s"
                          />
                        </path>
                      </g>
                    </g>

                    {/* Keyboard with typing indicators */}
                    <rect
                      x="20"
                      y="100"
                      width="80"
                      height="25"
                      rx="4"
                      fill="#1e293b"
                      stroke="#22c55e"
                      strokeWidth="1"
                    />
                    <g opacity="0.8">
                      <rect
                        x="25"
                        y="105"
                        width="6"
                        height="4"
                        rx="1"
                        fill="#22c55e"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.8;1;0.8"
                          dur="0.5s"
                          repeatCount="indefinite"
                        />
                      </rect>
                      <rect
                        x="35"
                        y="105"
                        width="6"
                        height="4"
                        rx="1"
                        fill="#22c55e"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.8;1;0.8"
                          dur="0.5s"
                          repeatCount="indefinite"
                          begin="0.1s"
                        />
                      </rect>
                      <rect
                        x="45"
                        y="105"
                        width="6"
                        height="4"
                        rx="1"
                        fill="#22c55e"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.8;1;0.8"
                          dur="0.5s"
                          repeatCount="indefinite"
                          begin="0.2s"
                        />
                      </rect>
                    </g>

                    {/* Mouse */}
                    <ellipse
                      cx="110"
                      cy="110"
                      rx="8"
                      ry="12"
                      fill="#1e293b"
                      stroke="#22c55e"
                      strokeWidth="1"
                    />
                    <circle cx="110" cy="105" r="1" fill="#22c55e">
                      <animate
                        attributeName="opacity"
                        values="1;0.5;1"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>

                  {/* Enhanced productivity metrics floating around */}
                  <g opacity="0.7">
                    <text
                      x="50"
                      y="100"
                      fill="#22c55e"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      +247%
                      <animate
                        attributeName="opacity"
                        values="0.7;1;0.7"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </text>
                    <text
                      x="400"
                      y="150"
                      fill="#fbbf24"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      ROI
                      <animate
                        attributeName="opacity"
                        values="0.7;1;0.7"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="1s"
                      />
                    </text>
                    <text
                      x="80"
                      y="320"
                      fill="#22c55e"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      24/7
                      <animate
                        attributeName="opacity"
                        values="0.7;1;0.7"
                        dur="3s"
                        repeatCount="indefinite"
                        begin="2s"
                      />
                    </text>
                  </g>

                  {/* Energy connection lines */}
                  <path
                    d="M100,200 Q200,150 300,200 Q400,250 450,200"
                    stroke="#22c55e"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                    strokeDasharray="6,3"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;9;0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-6 bg-green-400/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              TOOLS TO MAXIMIZE YOUR{" "}
              <span className="text-green-400">GROWTH</span>
            </h2>

            <div className="relative mb-12">
              <svg
                width="600"
                height="400"
                viewBox="0 0 600 400"
                fill="none"
                className="w-full h-auto mx-auto"
              >
                <defs>
                  <linearGradient
                    id="toolsGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="rgb(34,197,94)"
                      stopOpacity="0.1"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(34,197,94)"
                      stopOpacity="0.2"
                    />
                  </linearGradient>
                  <filter id="toolsGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      stopColor="rgb(34,197,94)"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(34,197,94)"
                      stopOpacity="0"
                    />
                  </radialGradient>
                </defs>

                {/* Enhanced background tech pattern */}
                <pattern
                  id="techGrid"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="15"
                    cy="15"
                    r="1"
                    fill="rgb(34,197,94)"
                    opacity="0.2"
                  />
                  <path
                    d="M0,15 L30,15 M15,0 L15,30"
                    stroke="rgb(34,197,94)"
                    strokeWidth="0.5"
                    opacity="0.1"
                  />
                  <circle
                    cx="7.5"
                    cy="7.5"
                    r="0.5"
                    fill="rgb(34,197,94)"
                    opacity="0.1"
                  />
                  <circle
                    cx="22.5"
                    cy="22.5"
                    r="0.5"
                    fill="rgb(34,197,94)"
                    opacity="0.1"
                  />
                </pattern>
                <rect width="600" height="400" fill="url(#techGrid)" />

                {/* Central hub - enhanced with glow effect */}
                <g transform="translate(300,200)">
                  <circle cx="0" cy="0" r="60" fill="url(#hubGlow)" />
                  <circle
                    cx="0"
                    cy="0"
                    r="50"
                    fill="#0f172a"
                    stroke="#22c55e"
                    strokeWidth="3"
                    filter="url(#toolsGlow)"
                  >
                    <animate
                      attributeName="stroke-width"
                      values="3;5;3"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="0"
                    cy="0"
                    r="35"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1"
                    strokeDasharray="8,4"
                    opacity="0.6"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 0 0;360 0 0"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="0"
                    cy="0"
                    r="25"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="0.5"
                    strokeDasharray="4,2"
                    opacity="0.4"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="360 0 0;0 0 0"
                      dur="15s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <text
                    x="0"
                    y="-5"
                    textAnchor="middle"
                    fill="#22c55e"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    DESI
                  </text>
                  <text
                    x="0"
                    y="10"
                    textAnchor="middle"
                    fill="#22c55e"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    FOREX
                  </text>
                </g>

                {/* Tool 1: Chart Analysis - Enhanced */}
                <g transform="translate(150,100)">
                  <rect
                    x="-35"
                    y="-25"
                    width="70"
                    height="50"
                    rx="8"
                    fill="#1e293b"
                    stroke="#22c55e"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="stroke-width"
                      values="2;3;2"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="-30"
                    y="-20"
                    width="60"
                    height="40"
                    rx="4"
                    fill="#0f172a"
                  />

                  {/* Enhanced chart with multiple lines */}
                  <path
                    d="M-25,15 L-15,5 L-5,-5 L5,10 L15,0 L25,-10"
                    stroke="#22c55e"
                    strokeWidth="2"
                    fill="none"
                  >
                    <animate
                      attributeName="d"
                      values="M-25,15 L-15,5 L-5,-5 L5,10 L15,0 L25,-10;M-25,10 L-15,0 L-5,5 L5,-5 L15,10 L25,5;M-25,5 L-15,15 L-5,0 L5,5 L15,-5 L25,0;M-25,15 L-15,5 L-5,-5 L5,10 L15,0 L25,-10"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path
                    d="M-25,10 L-15,0 L-5,10 L5,-5 L15,5 L25,-5"
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.7"
                  >
                    <animate
                      attributeName="d"
                      values="M-25,10 L-15,0 L-5,10 L5,-5 L15,5 L25,-5;M-25,5 L-15,10 L-5,0 L5,10 L15,-5 L25,0;M-25,0 L-15,5 L-5,15 L5,0 L15,10 L25,5;M-25,10 L-15,0 L-5,10 L5,-5 L15,5 L25,-5"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </path>

                  {/* Animated data points */}
                  <circle cx="-5" cy="-5" r="2" fill="#22c55e">
                    <animate
                      attributeName="cy"
                      values="-5;5;-5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="15" cy="0" r="2" fill="#fbbf24">
                    <animate
                      attributeName="cy"
                      values="0;-10;0"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  <text
                    x="0"
                    y="40"
                    textAnchor="middle"
                    fill="#22c55e"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    Technical Analysis
                  </text>

                  {/* Enhanced connection to hub */}
                  <path
                    d="M35,0 Q120,50 150,100"
                    stroke="#22c55e"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                    strokeDasharray="6,3"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;9;0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Data flow particles */}
                  <circle cx="50" cy="20" r="1.5" fill="#22c55e">
                    <animateMotion dur="3s" repeatCount="indefinite">
                      <path d="M50,20 Q120,50 150,100" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="1;0;1"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Tool 2: Risk Calculator - Enhanced */}
                <g transform="translate(450,100)">
                  <circle
                    cx="0"
                    cy="0"
                    r="30"
                    fill="#1e293b"
                    stroke="#fbbf24"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="stroke-width"
                      values="2;3;2"
                      dur="4s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </circle>
                  <circle cx="0" cy="0" r="20" fill="#0f172a" />

                  {/* Enhanced percentage display */}
                  <text
                    x="0"
                    y="-8"
                    textAnchor="middle"
                    fill="#fbbf24"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    2.5%
                    <animate
                      attributeName="opacity"
                      values="1;0.7;1"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </text>
                  <text
                    x="0"
                    y="5"
                    textAnchor="middle"
                    fill="#fbbf24"
                    fontSize="7"
                  >
                    RISK
                  </text>
                  <text
                    x="0"
                    y="50"
                    textAnchor="middle"
                    fill="#fbbf24"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    Risk Manager
                  </text>

                  {/* Enhanced animated percentage ring */}
                  <circle
                    cx="0"
                    cy="0"
                    r="18"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    strokeDasharray="0,113"
                    opacity="0.7"
                    transform="rotate(-90)"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="0,113;28,85;56,57;28,85;0,113"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Connection to hub with enhanced animation */}
                  <path
                    d="M-30,0 Q-120,50 -150,100"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                    strokeDasharray="6,3"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;9;0"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                  </path>

                  {/* Data flow particles */}
                  <circle cx="-50" cy="20" r="1.5" fill="#fbbf24">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                      <path d="M-50,20 Q-120,50 -150,100" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="1;0;1"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </circle>
                </g>

                {/* Tool 3: Signal Generator - Enhanced */}
                <g transform="translate(150,300)">
                  <rect
                    x="-30"
                    y="-20"
                    width="60"
                    height="40"
                    rx="8"
                    fill="#1e293b"
                    stroke="#ef4444"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="stroke-width"
                      values="2;3;2"
                      dur="4s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </rect>
                  <rect
                    x="-25"
                    y="-15"
                    width="50"
                    height="30"
                    rx="4"
                    fill="#0f172a"
                  />

                  {/* Signal waves */}
                  <g opacity="0.8">
                    <path
                      d="M-20,0 Q-10,-10 0,0 Q10,10 20,0"
                      stroke="#ef4444"
                      strokeWidth="2"
                      fill="none"
                    >
                      <animate
                        attributeName="d"
                        values="M-20,0 Q-10,-10 0,0 Q10,10 20,0;M-20,0 Q-10,10 0,0 Q10,-10 20,0;M-20,0 Q-10,-10 0,0 Q10,10 20,0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <path
                      d="M-15,5 Q-5,-5 5,5 Q15,15 25,5"
                      stroke="#ef4444"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="d"
                        values="M-15,5 Q-5,-5 5,5 Q15,15 25,5;M-15,5 Q-5,15 5,5 Q15,-5 25,5;M-15,5 Q-5,-5 5,5 Q15,15 25,5"
                        dur="1.5s"
                        repeatCount="indefinite"
                        begin="0.5s"
                      />
                    </path>
                  </g>

                  <text
                    x="0"
                    y="35"
                    textAnchor="middle"
                    fill="#ef4444"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    Signal Generator
                  </text>

                  {/* Connection to hub */}
                  <path
                    d="M30,0 Q120,-50 150,-100"
                    stroke="#ef4444"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                    strokeDasharray="6,3"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;9;0"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </path>

                  {/* Signal particles */}
                  <circle cx="50" cy="-20" r="1.5" fill="#ef4444">
                    <animateMotion dur="3s" repeatCount="indefinite" begin="2s">
                      <path d="M50,-20 Q120,-50 150,-100" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="1;0;1"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </circle>
                </g>

                {/* Tool 4: Portfolio Tracker - Enhanced */}
                <g transform="translate(450,300)">
                  <circle
                    cx="0"
                    cy="0"
                    r="25"
                    fill="#1e293b"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                  >
                    <animate
                      attributeName="stroke-width"
                      values="2;3;2"
                      dur="4s"
                      repeatCount="indefinite"
                      begin="3s"
                    />
                  </circle>
                  <circle cx="0" cy="0" r="15" fill="#0f172a" />

                  {/* Portfolio pie segments */}
                  <path
                    d="M0,-15 A15,15 0 0,1 10.6,-10.6 L0,0 Z"
                    fill="#22c55e"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.8;1;0.8"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path
                    d="M10.6,-10.6 A15,15 0 0,1 10.6,10.6 L0,0 Z"
                    fill="#fbbf24"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.8;1;0.8"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </path>
                  <path
                    d="M10.6,10.6 A15,15 0 0,1 -10.6,10.6 L0,0 Z"
                    fill="#ef4444"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.8;1;0.8"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </path>
                  <path
                    d="M-10.6,10.6 A15,15 0 0,1 0,-15 L0,0 Z"
                    fill="#8b5cf6"
                    opacity="0.8"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.8;1;0.8"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                  </path>

                  <text
                    x="0"
                    y="40"
                    textAnchor="middle"
                    fill="#8b5cf6"
                    fontSize="11"
                    fontWeight="bold"
                  >
                    Portfolio Tracker
                  </text>

                  {/* Connection to hub */}
                  <path
                    d="M-30,0 Q-120,-50 -150,-100"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                    strokeDasharray="6,3"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;9;0"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1.5s"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.4;0.8;0.4"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1.5s"
                    />
                  </path>

                  {/* Portfolio data particles */}
                  <circle cx="-50" cy="-20" r="1.5" fill="#8b5cf6">
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2.5s"
                    >
                      <path d="M-50,-20 Q-120,-50 -150,-100" />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="1;0;1"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2.5s"
                    />
                  </circle>
                </g>

                {/* Central energy pulses */}
                <g transform="translate(300,200)">
                  <circle
                    cx="0"
                    cy="0"
                    r="70"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="r"
                      values="70;80;70"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.2;0.5;0.2"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="0"
                    cy="0"
                    r="90"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="0.5"
                    opacity="0.1"
                  >
                    <animate
                      attributeName="r"
                      values="90;100;90"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.1;0.3;0.1"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </svg>
            </div>

            <div className="relative">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-green-400/20 animate-pulse"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: "3s",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative z-10 space-y-12">
                <Card className="bg-black/40 border-green-400/20">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="text-left">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl mr-3">🎓</span>
                          <h3 className="text-2xl font-bold text-white">
                            VITAL LIFE LESSONS
                          </h3>
                        </div>
                        <div className="space-y-4 text-lg">
                          <div className="flex items-center p-3 bg-green-400/10 rounded-lg">
                            <span className="text-green-400 mr-4 text-xl">
                              ✓
                            </span>
                            <span className="text-white font-medium">
                              Advanced custom-built learning application
                            </span>
                          </div>
                          <div className="flex items-center p-3 bg-green-400/10 rounded-lg">
                            <span className="text-green-400 mr-4 text-xl">
                              ✓
                            </span>
                            <span className="text-white font-medium">
                              Learn how to leverage your expertise
                            </span>
                          </div>
                          <div className="flex items-center p-3 bg-green-400/10 rounded-lg">
                            <span className="text-green-400 mr-4 text-xl">
                              ✓
                            </span>
                            <span className="text-white font-medium">
                              Develop the skills required for long-term success
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <svg
                          width="500"
                          height="400"
                          viewBox="0 0 500 400"
                          fill="none"
                          className="w-full h-auto"
                        >
                          <defs>
                            <linearGradient
                              id="hardWorkGrad"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor="rgb(34,197,94)"
                                stopOpacity="0.1"
                              />
                              <stop
                                offset="100%"
                                stopColor="rgb(34,197,94)"
                                stopOpacity="0.3"
                              />
                            </linearGradient>
                            <filter id="hardWorkGlow">
                              <feGaussianBlur
                                stdDeviation="3"
                                result="coloredBlur"
                              />
                              <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                            <radialGradient
                              id="screenGlow"
                              cx="50%"
                              cy="50%"
                              r="50%"
                            >
                              <stop
                                offset="0%"
                                stopColor="rgb(34,197,94)"
                                stopOpacity="0.3"
                              />
                              <stop
                                offset="100%"
                                stopColor="rgb(34,197,94)"
                                stopOpacity="0"
                              />
                            </radialGradient>
                          </defs>

                          {/* Enhanced background grid pattern */}
                          <pattern
                            id="workGrid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 40 0 L 0 0 0 40"
                              fill="none"
                              stroke="rgb(34,197,94)"
                              strokeWidth="0.5"
                              opacity="0.2"
                            />
                            <circle
                              cx="20"
                              cy="20"
                              r="1"
                              fill="rgb(34,197,94)"
                              opacity="0.1"
                            />
                          </pattern>
                          <rect
                            width="500"
                            height="400"
                            fill="url(#workGrid)"
                          />

                          {/* Floating productivity indicators */}
                          <g opacity="0.7">
                            <circle cx="80" cy="60" r="4" fill="#22c55e">
                              <animateMotion dur="8s" repeatCount="indefinite">
                                <path d="M80,60 Q120,40 160,60 Q120,80 80,60" />
                              </animateMotion>
                              <animate
                                attributeName="opacity"
                                values="0.7;1;0.7"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                            </circle>
                            <circle cx="400" cy="80" r="3" fill="#fbbf24">
                              <animateMotion dur="10s" repeatCount="indefinite">
                                <path d="M400,80 Q360,60 320,80 Q360,100 400,80" />
                              </animateMotion>
                              <animate
                                attributeName="r"
                                values="3;5;3"
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            </circle>
                            <circle cx="420" cy="300" r="3.5" fill="#22c55e">
                              <animateMotion dur="12s" repeatCount="indefinite">
                                <path d="M420,300 Q380,280 340,300 Q380,320 420,300" />
                              </animateMotion>
                            </circle>
                          </g>

                          {/* Central workspace with enhanced detail */}
                          <g transform="translate(200,150)">
                            {/* Enhanced desk with depth */}
                            <ellipse
                              cx="60"
                              cy="140"
                              rx="80"
                              ry="15"
                              fill="#0f172a"
                              opacity="0.3"
                            />
                            <rect
                              x="0"
                              y="80"
                              width="120"
                              height="60"
                              rx="8"
                              fill="#1e293b"
                              stroke="#22c55e"
                              strokeWidth="2"
                            >
                              <animate
                                attributeName="stroke-width"
                                values="2;3;2"
                                dur="4s"
                                repeatCount="indefinite"
                              />
                            </rect>

                            {/* Multiple monitors with enhanced screens */}
                            <rect
                              x="10"
                              y="40"
                              width="40"
                              height="30"
                              rx="4"
                              fill="#0f172a"
                              stroke="#22c55e"
                              strokeWidth="1.5"
                            >
                              <animate
                                attributeName="stroke-width"
                                values="1.5;2.5;1.5"
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect
                              x="12"
                              y="42"
                              width="36"
                              height="26"
                              rx="2"
                              fill="url(#screenGlow)"
                            />

                            <rect
                              x="70"
                              y="40"
                              width="40"
                              height="30"
                              rx="4"
                              fill="#0f172a"
                              stroke="#22c55e"
                              strokeWidth="1.5"
                            >
                              <animate
                                attributeName="stroke-width"
                                values="1.5;2.5;1.5"
                                dur="3s"
                                repeatCount="indefinite"
                                begin="1s"
                              />
                            </rect>
                            <rect
                              x="72"
                              y="42"
                              width="36"
                              height="26"
                              rx="2"
                              fill="url(#screenGlow)"
                            />

                            {/* Enhanced animated chart lines with more complexity */}
                            <path
                              d="M15,55 L20,50 L25,60 L30,45 L35,55 L40,50 L45,65"
                              stroke="#22c55e"
                              strokeWidth="2"
                              fill="none"
                              filter="url(#hardWorkGlow)"
                            >
                              <animate
                                attributeName="d"
                                values="M15,55 L20,50 L25,60 L30,45 L35,55 L40,50 L45,65;M15,60 L20,45 L25,55 L30,50 L35,60 L40,45 L45,60;M15,50 L20,55 L25,45 L30,60 L35,50 L40,55 L45,50;M15,55 L20,50 L25,60 L30,45 L35,55 L40,50 L45,65"
                                dur="6s"
                                repeatCount="indefinite"
                              />
                            </path>
                            <path
                              d="M75,55 L80,60 L85,50 L90,65 L95,55 L100,50 L105,60"
                              stroke="#fbbf24"
                              strokeWidth="2"
                              fill="none"
                              filter="url(#hardWorkGlow)"
                            >
                              <animate
                                attributeName="d"
                                values="M75,55 L80,60 L85,50 L90,65 L95,55 L100,50 L105,60;M75,50 L80,55 L85,65 L90,50 L95,60 L100,55 L105,50;M75,60 L80,50 L85,55 L90,60 L95,50 L100,65 L105,55;M75,55 L80,60 L85,50 L90,65 L95,55 L100,50 L105,60"
                                dur="5s"
                                repeatCount="indefinite"
                                begin="1s"
                              />
                            </path>

                            {/* Animated data points on screens */}
                            <circle cx="20" cy="50" r="1.5" fill="#22c55e">
                              <animate
                                attributeName="cy"
                                values="50;45;55;50"
                                dur="2s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="1;0.5;1"
                                dur="1.5s"
                                repeatCount="indefinite"
                              />
                            </circle>
                            <circle cx="30" cy="55" r="1.5" fill="#22c55e">
                              <animate
                                attributeName="cy"
                                values="55;50;60;55"
                                dur="2.5s"
                                repeatCount="indefinite"
                              />
                            </circle>
                            <circle cx="85" cy="52" r="1.5" fill="#fbbf24">
                              <animate
                                attributeName="cy"
                                values="52;47;57;52"
                                dur="2.2s"
                                repeatCount="indefinite"
                              />
                            </circle>

                            {/* Person figure with subtle animation */}
                            <g transform="translate(60,20)">
                              {/* Head */}
                              <circle
                                cx="0"
                                cy="0"
                                r="8"
                                fill="#22c55e"
                                opacity="0.8"
                              >
                                <animate
                                  attributeName="opacity"
                                  values="0.8;1;0.8"
                                  dur="4s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                              {/* Body */}
                              <rect
                                x="-6"
                                y="8"
                                width="12"
                                height="20"
                                rx="6"
                                fill="#22c55e"
                                opacity="0.7"
                              >
                                <animate
                                  attributeName="opacity"
                                  values="0.7;0.9;0.7"
                                  dur="4s"
                                  repeatCount="indefinite"
                                />
                              </rect>
                              {/* Arms - typing motion */}
                              <line
                                x1="-6"
                                y1="15"
                                x2="-15"
                                y2="25"
                                stroke="#22c55e"
                                strokeWidth="2"
                                opacity="0.8"
                              >
                                <animate
                                  attributeName="x2"
                                  values="-15;-12;-15"
                                  dur="1s"
                                  repeatCount="indefinite"
                                />
                              </line>
                              <line
                                x1="6"
                                y1="15"
                                x2="15"
                                y2="25"
                                stroke="#22c55e"
                                strokeWidth="2"
                                opacity="0.8"
                              >
                                <animate
                                  attributeName="x2"
                                  values="15;12;15"
                                  dur="1s"
                                  repeatCount="indefinite"
                                  begin="0.5s"
                                />
                              </line>
                            </g>

                            {/* Coffee cup with steam */}
                            <g transform="translate(130,90)">
                              <rect
                                x="0"
                                y="10"
                                width="15"
                                height="20"
                                rx="2"
                                fill="#8b4513"
                                stroke="#22c55e"
                                strokeWidth="1"
                              />
                              <rect
                                x="2"
                                y="12"
                                width="11"
                                height="16"
                                rx="1"
                                fill="#4a2c2a"
                              />
                              <path
                                d="M15,15 Q20,15 20,20 Q20,25 15,25"
                                stroke="#22c55e"
                                strokeWidth="1"
                                fill="none"
                              />

                              {/* Animated steam */}
                              <g opacity="0.6">
                                <path
                                  d="M5,8 Q7,5 5,2"
                                  stroke="#22c55e"
                                  strokeWidth="1"
                                  fill="none"
                                >
                                  <animate
                                    attributeName="opacity"
                                    values="0.6;1;0.6"
                                    dur="2s"
                                    repeatCount="indefinite"
                                  />
                                </path>
                                <path
                                  d="M8,8 Q10,5 8,2"
                                  stroke="#22c55e"
                                  strokeWidth="1"
                                  fill="none"
                                >
                                  <animate
                                    attributeName="opacity"
                                    values="0.6;1;0.6"
                                    dur="2s"
                                    repeatCount="indefinite"
                                    begin="0.5s"
                                  />
                                </path>
                                <path
                                  d="M11,8 Q13,5 11,2"
                                  stroke="#22c55e"
                                  strokeWidth="1"
                                  fill="none"
                                >
                                  <animate
                                    attributeName="opacity"
                                    values="0.6;1;0.6"
                                    dur="2s"
                                    repeatCount="indefinite"
                                    begin="1s"
                                  />
                                </path>
                              </g>
                            </g>

                            {/* Keyboard with typing indicators */}
                            <rect
                              x="20"
                              y="100"
                              width="80"
                              height="25"
                              rx="4"
                              fill="#1e293b"
                              stroke="#22c55e"
                              strokeWidth="1"
                            />
                            <g opacity="0.8">
                              <rect
                                x="25"
                                y="105"
                                width="6"
                                height="4"
                                rx="1"
                                fill="#22c55e"
                              >
                                <animate
                                  attributeName="opacity"
                                  values="0.8;1;0.8"
                                  dur="0.5s"
                                  repeatCount="indefinite"
                                />
                              </rect>
                              <rect
                                x="35"
                                y="105"
                                width="6"
                                height="4"
                                rx="1"
                                fill="#22c55e"
                              >
                                <animate
                                  attributeName="opacity"
                                  values="0.8;1;0.8"
                                  dur="0.5s"
                                  repeatCount="indefinite"
                                  begin="0.1s"
                                />
                              </rect>
                              <rect
                                x="45"
                                y="105"
                                width="6"
                                height="4"
                                rx="1"
                                fill="#22c55e"
                              >
                                <animate
                                  attributeName="opacity"
                                  values="0.8;1;0.8"
                                  dur="0.5s"
                                  repeatCount="indefinite"
                                  begin="0.2s"
                                />
                              </rect>
                            </g>

                            {/* Mouse */}
                            <ellipse
                              cx="110"
                              cy="110"
                              rx="8"
                              ry="12"
                              fill="#1e293b"
                              stroke="#22c55e"
                              strokeWidth="1"
                            />
                            <circle cx="110" cy="105" r="1" fill="#22c55e">
                              <animate
                                attributeName="opacity"
                                values="1;0.5;1"
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          </g>

                          {/* Enhanced productivity metrics floating around */}
                          <g opacity="0.7">
                            <text
                              x="50"
                              y="100"
                              fill="#22c55e"
                              fontSize="12"
                              fontWeight="bold"
                            >
                              +247%
                              <animate
                                attributeName="opacity"
                                values="0.7;1;0.7"
                                dur="3s"
                                repeatCount="indefinite"
                              />
                            </text>
                            <text
                              x="400"
                              y="150"
                              fill="#fbbf24"
                              fontSize="12"
                              fontWeight="bold"
                            >
                              ROI
                              <animate
                                attributeName="opacity"
                                values="0.7;1;0.7"
                                dur="3s"
                                repeatCount="indefinite"
                                begin="1s"
                              />
                            </text>
                            <text
                              x="80"
                              y="320"
                              fill="#22c55e"
                              fontSize="12"
                              fontWeight="bold"
                            >
                              24/7
                              <animate
                                attributeName="opacity"
                                values="0.7;1;0.7"
                                dur="3s"
                                repeatCount="indefinite"
                                begin="2s"
                              />
                            </text>
                          </g>

                          {/* Energy connection lines */}
                          <path
                            d="M100,200 Q200,150 300,200 Q400,250 450,200"
                            stroke="#22c55e"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.4"
                            strokeDasharray="6,3"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              values="0;9;0"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="opacity"
                              values="0.4;0.8;0.4"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-green-400">Trading Journey</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of successful traders who have transformed their
              careers with DFX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-400 hover:bg-green-500 text-black font-bold px-8 py-4 text-lg"
              >
                JOIN THE DFX ACADEMY
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-4 text-lg bg-transparent"
              >
                Schedule Consultation
              </Button>
            </div>
            <div className="flex items-center justify-center mt-6">
              <div className="flex -space-x-2">
                {[
                  "/student-profile-1.png",
                  "/diverse-student-profiles.png",
                  "/diverse-student-profiles-3.png",
                  "/diverse-students-studying.png",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src || "/placeholder.svg"}
                    alt={`Client ${i + 1}`}
                    className="w-8 h-8 bg-green-400 rounded-full border-2 border-black object-cover"
                  />
                ))}
              </div>
              <span className="ml-3 text-green-400 font-semibold">
                1300+ like-minded students
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
