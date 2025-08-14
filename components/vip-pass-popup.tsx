"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function VipPassPopup({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [open]);

  if (!open) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in">
      <div className="relative bg-zinc-900 border-2 border-green-400/40 rounded-2xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center animate-pop-in overflow-hidden">
        <div className="relative mb-6">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            className="drop-shadow-lg"
            style={{ background: "transparent" }}
          >
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
                  stroke="#22c55e"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
              </pattern>
              <filter id="crownGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
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

            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#FFD700"
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
              stroke="#22c55e"
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
              stroke="#FFD700"
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

            <g transform="translate(100,100)" filter="url(#crownGlow)">
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

            <g opacity="0.8">
              <circle cx="50" cy="50" r="8" fill="#22c55e" opacity="0.7">
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
              <circle cx="150" cy="60" r="7" fill="#FFD700" opacity="0.7">
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
              <circle cx="160" cy="140" r="6" fill="#22c55e" opacity="0.6">
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
              <circle cx="40" cy="150" r="7" fill="#FFD700" opacity="0.7">
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
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-2 text-center">
          Get Your FREE VIP PASS!
        </h2>
        <p className="text-gray-200 mb-6 text-center">
          To get our{" "}
          <span className="text-green-400 font-semibold">FREE VIP signals</span>
          , just follow these 4 simple steps:
        </p>

        <ol className="space-y-4 w-full mb-6">
          {[
            {
              text: "See Trades in our official",
              link: "https://t.me/+NXiTkxZHZbo1Mjk1",
              linkText: "Telegram group",
            },
            {
              text: "Create a",
              link: "https://member.kasperfx.com/register",
              linkText: "Forex Account with us",
            },
            {
              text: "Send a screenshot of your account to our",
              link: "https://t.me/Evanncross",
              linkText: "Admin.",
            },
            {
              text: "Unlock your",
              link: "https://t.me/+AZj-CVnd5843OThl",
              linkText: "Check VIP Access",
              suffix: " and get premium signals!",
            },
          ].map((step, index) => (
            <li
              key={index}
              className={`flex items-start gap-3 transition-all duration-500 ${
                currentStep === index
                  ? "transform scale-110 bg-green-400/10 p-3 rounded-lg border border-green-400/30"
                  : ""
              }`}
            >
              <div className="relative">
                <span
                  className={`font-bold rounded-full w-8 h-8 flex items-center justify-center transition-all duration-500 ${
                    currentStep === index
                      ? "bg-green-400 text-black transform scale-150 shadow-lg shadow-green-400/50 ring-4 ring-green-400/30"
                      : "bg-green-400 text-black"
                  }`}
                >
                  {index + 1}
                </span>
                {currentStep === index && (
                  <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></div>
                )}
              </div>
              <span
                className={`flex-1 transition-all duration-500 ${
                  currentStep === index
                    ? "text-green-100 mx-4 font-medium transform scale-105"
                    : "text-white"
                }`}
              >
                {step.text}{" "}
                <a
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline transition-all duration-500 ${
                    currentStep === index
                      ? "text-green-300 font-semibold"
                      : "text-green-400"
                  }`}
                >
                  {step.linkText}
                </a>
                {step.suffix}
              </span>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3 w-full">
          <a href="/join" className="w-full">
            <Button
              className="w-full mb-2 font-bold py-3 transition-all duration-300 hover:scale-105"
              style={{ background: "#22c55e", color: "#000" }}
              variant="outline"
            >
              See Full Steps
            </Button>
            
          </a>

          <Button
              className="w-full border font-bold py-3 transition-all duration-300 hover:scale-105"
              style={{ background: "#000", color: "#22c55e", borderColor: "#22c55e" }}
              onClick={onClose}
            >
              Close & Explore
            </Button>
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 2
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
}
