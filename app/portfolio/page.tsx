"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import MobileNavbar from "@/components/mobile-navbar"
import UniversalTradingIntro from "@/components/universal-trading-intro"
import TradingCandlestickChart from "@/components/trading-candlestick-chart"

const achievementData = [
  {
    year: 2021,
    portfolio: 25000,
    clients: 28,
    returns: 38.2,
    volume: 180000,
    high: 28000,
    low: 22000,
  },
  {
    year: 2022,
    portfolio: 38000,
    clients: 35,
    returns: 36.8,
    volume: 285000,
    high: 42000,
    low: 34000,
  },
  {
    year: 2023,
    portfolio: 54000,
    clients: 47,
    returns: 35.5,
    volume: 405000,
    high: 58000,
    low: 48000,
  },
  {
    year: 2024,
    portfolio: 99000,
    clients: 54,
    returns: 39.7,
    volume: 742000,
    high: 105000,
    low: 89000,
  },
]

const majorAchievements = [
  {
    title: "Portfolio Milestone",
    description: "Reached $99K+ portfolio value",
    year: "2024",
    icon: "💰",
    color: "#00ff88",
  },
  {
    title: "Client Success",
    description: "100+ satisfied clients worldwide",
    year: "2024",
    icon: "👥",
    color: "#ff6b6b",
  },
  {
    title: "Consistent Returns",
    description: "Average 30% annual returns",
    year: "2021-2024",
    icon: "📈",
    color: "#4ecdc4",
  },
  {
    title: "Risk Management",
    description: "Zero major losses in 4 years",
    year: "2021-2024",
    icon: "🛡️",
    color: "#ffd93d",
  },
]

function TradingAchievementScene() {
  return (
    <div className="h-96 w-full">
      <div className="relative h-full">
        <TradingCandlestickChart />
        <div className="absolute bottom-4 left-4 text-green-400 text-sm">Live Market Simulation</div>
      </div>
    </div>
  )
}

export default function TradingDemo() {
  const [showIntro, setShowIntro] = useState(true)
  const [selectedYear, setSelectedYear] = useState(2024)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  const selectedData =
    achievementData.find((data) => data.year === selectedYear) || achievementData[achievementData.length - 1]

  // Animation progress for SVG chart (set to 1 for full visibility, or animate as needed)
  const animationProgress = 1

  return (
    <div className="min-h-screen bg-black text-white relative">
      {showIntro && <UniversalTradingIntro onComplete={handleIntroComplete} pageName="Trading Achievements" />}

      <MobileNavbar />
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-black/40 to-green-900/20" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Portfolio <span className="text-green-400"> Growth Over Time </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect, learn, and grow with fellow traders in real-time
          </p>
          <Link href="/join" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-400 hover:bg-green-500 text-black font-bold px-8 py-3 text-lg">
              Join Now - It's Free!
            </Button>
          </Link>
        </div>
      </section>

      <div
        className={`max-w-7xl mx-auto p-6 transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}
      >
        {/* Responsive Navigation */}

        <Card className="mt-20 bg-black/40 border-green-400/20 mb-12">
          <CardHeader>
            <CardTitle className="text-white">Portfolio Growth Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {achievementData.slice(-5).map((data) => (
                <Button
                  key={data.year}
                  variant={selectedYear === data.year ? "default" : "outline"}
                  className={`${
                    selectedYear === data.year
                      ? "bg-green-400 text-black hover:bg-green-500"
                      : "border-green-400/50 text-black "
                  }`}
                  onClick={() => setSelectedYear(data.year)}
                >
                  {data.year}
                </Button>
              ))}
            </div>

            <div className="h-80 mb-6 flex items-center justify-center ">
              <div className="w-full h-full bg-black/20 rounded-lg flex items-center justify-center">
                <svg className="mt-40 max-w-5xl" viewBox="0 0 900 400">
                  <defs>
                    <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="volumeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Background grid - simplified */}
                  <g opacity="0.3">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                      const y = 60 + i * 35
                      const price = 120000 - i * 15000
                      return (
                        <g key={i}>
                          <line
                            x1="80"
                            y1={y}
                            x2="820"
                            y2={y}
                            stroke="#333"
                            strokeWidth="1"
                            strokeDasharray={i % 2 === 0 ? "none" : "2,2"}
                          />
                          <text x="70" y={y + 4} textAnchor="end" fill="#fff" fontSize="10" fontFamily="monospace">
                            ${Math.round(price / 1000)}K
                          </text>
                        </g>
                      )
                    })}

                    {achievementData.map((_, i) => (
                      <line
                        key={i}
                        x1={80 + i * 120}
                        y1="60"
                        x2={80 + i * 120}
                        y2="305"
                        stroke="#333"
                        strokeWidth="1"
                        opacity="0.2"
                      />
                    ))}
                  </g>

                  {/* Volume bars */}
                  <g>
                    {achievementData.map((data, index) => {
                      const x = 80 + index * 120
                      const volumeHeight = (data.volume / 800000) * 40
                      const y = 305 - volumeHeight

                      return (
                        <rect
                          key={`volume-${index}`}
                          x={x - 15}
                          y={y}
                          width="30"
                          height={volumeHeight * animationProgress}
                          fill="url(#volumeGradient)"
                          opacity="0.7"
                          style={{
                            transition: "height 0.8s ease-out",
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        />
                      )
                    })}
                  </g>

                  {/* High-Low range indicators */}
                  {achievementData.map((data, index) => {
                    const x = 80 + index * 120
                    const highY = 305 - (data.high / 120000) * 200
                    const lowY = 305 - (data.low / 120000) * 200

                    return (
                      <g key={`range-${index}`} opacity={animationProgress}>
                        <line x1={x} y1={highY} x2={x} y2={lowY} stroke="#22c55e" strokeWidth="2" opacity="0.4" />
                        <circle cx={x} cy={highY} r="2" fill="#22c55e" opacity="0.6" />
                        <circle cx={x} cy={lowY} r="2" fill="#ef4444" opacity="0.6" />
                      </g>
                    )
                  })}

                  {/* Main chart line */}
                  <polyline
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="4"
                    points={achievementData
                      .map((data, i) => `${80 + i * 120},${305 - (data.portfolio / 120000) * 200}`)
                      .join(" ")}
                    style={{
                      strokeDasharray: animationProgress ? "none" : "1000",
                      strokeDashoffset: animationProgress ? "0" : "1000",
                      transition: "stroke-dashoffset 2s ease-out",
                    }}
                  />

                  {/* Moving average line */}
                  <polyline
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2"
                    opacity="0.7"
                    strokeDasharray="5,5"
                    points={achievementData
                      .map((data, i) => {
                        const avgValue = data.portfolio * 0.9
                        return `${80 + i * 120},${305 - (avgValue / 120000) * 200}`
                      })
                      .join(" ")}
                  />

                  {/* Fill area */}
                  <polygon
                    fill="url(#portfolioGradient)"
                    points={`${achievementData
                      .map((data, i) => `${80 + i * 120},${305 - (data.portfolio / 120000) * 200}`)
                      .join(" ")} 800,305 80,305`}
                    opacity={animationProgress * 0.8}
                    style={{ transition: "opacity 1s ease-out" }}
                  />

                  {/* Data points */}
                  {achievementData.map((data, index) => {
                    const x = 80 + index * 120
                    const y = 305 - (data.portfolio / 120000) * 200
                    const bubbleSize = Math.max(6, (data.portfolio / 120000) * 15)

                    // Calculate growth percentage from previous year
                    let growth = ""
                    if (index > 0) {
                      const prev = achievementData[index - 1].portfolio
                      const percent = ((data.portfolio - prev) / prev) * 100
                      growth = `+${percent.toFixed(0)}%`
                    } else {
                      growth = "+0%"
                    }

                    return (
                      <g key={data.year}>
                        {/* Simple pulsing ring */}
                        <circle
                          cx={x}
                          cy={y}
                          r={bubbleSize + 5}
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          opacity="0.3"
                          style={{
                            animation: `pulse 2s infinite ${index * 0.2}s`,
                          }}
                        />

                        {/* Main data point */}
                        <circle
                          cx={x}
                          cy={y}
                          r={bubbleSize * animationProgress}
                          fill="#22c55e"
                          opacity="0.8"
                          style={{
                            transition: "r 0.6s ease-out",
                            transitionDelay: `${index * 0.1}s`,
                          }}
                        />
                        <circle cx={x} cy={y} r="4" fill="#ffffff" />

                        {/* Growth percentage */}
                        <text
                          x={x}
                          y={y - bubbleSize - 15}
                          textAnchor="middle"
                          fill="#22c55e"
                          fontSize="12"
                          fontWeight="bold"
                          fontFamily="monospace"
                        >
                          {growth}
                        </text>

                        {/* Value labels in K */}
                        <text
                          x={x}
                          y={y - bubbleSize - 30}
                          textAnchor="middle"
                          fill="#22c55e"
                          fontSize="10"
                          opacity="0.8"
                        >
                          ${Math.round(data.portfolio / 1000)}K
                        </text>

                        {/* Year labels */}
                        <text x={x} y={330} textAnchor="middle" fill="#888" fontSize="12" fontWeight="bold">
                          {data.year}
                        </text>

                        {/* Volume labels */}
                        <text x={x} y={345} textAnchor="middle" fill="#666" fontSize="9">
                          Vol: ${Math.round(data.volume / 1000)}K
                        </text>
                      </g>
                    )
                  })}

                  {/* Simple trend line */}
                  <line
                    x1="80"
                    y1="280"
                    x2="800"
                    y2="80"
                    stroke="#22c55e"
                    strokeWidth="2"
                    opacity="0.3"
                    strokeDasharray="8,4"
                  />

                  {/* Chart title */}
                  <text x="450" y="30" textAnchor="middle" fill="#22c55e" fontSize="16" fontWeight="bold">
                    Portfolio Growth Analysis
                  </text>

                  {/* Legend */}
                  <g transform="translate(650, 50)">
                    <rect x="0" y="0" width="140" height="80" fill="black" fillOpacity="0.7" stroke="#333" rx="5" />
                    <line x1="10" y1="20" x2="30" y2="20" stroke="#22c55e" strokeWidth="3" />
                    <text x="35" y="24" fill="#22c55e" fontSize="10">
                      Growth (%)
                    </text>

                    <line x1="10" y1="35" x2="30" y2="35" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />
                    <text x="35" y="39" fill="#f59e0b" fontSize="10">
                      Moving Average
                    </text>

                    <rect x="10" y="45" width="20" height="10" fill="url(#volumeGradient)" />
                    <text x="35" y="54" fill="#666" fontSize="10">
                      Trading Volume
                    </text>
                  </g>

                  {/* CSS Animation Styles */}
                  <style jsx>{`
                    @keyframes pulse {
                      0%,
                      100% {
                        opacity: 0.3;
                        transform: scale(1);
                      }
                      50% {
                        opacity: 0.1;
                        transform: scale(1.2);
                      }
                    }
                  `}</style>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <div className="text-center p-6 bg-black/20 rounded-lg">
          <div className="text-3xl font-bold text-green-400 mb-2">${(selectedData.portfolio / 1000).toFixed(0)}K</div>
          <div className="text-gray-300">Portfolio Value</div>
        </div>
        <div className="text-center p-6 bg-black/20 rounded-lg">
          <div className="text-3xl font-bold text-blue-400 mb-2">{selectedData.clients}</div>
          <div className="text-gray-300">Active Clients</div>
        </div>
        <div className="text-center p-6 bg-black/20 rounded-lg">
          <div className="text-3xl font-bold text-yellow-400 mb-2">{selectedData.returns}%</div>
          <div className="text-gray-300">Annual Returns</div>
        </div>
      </div>

      {/* Major Achievements Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Major <span className="text-green-400">Milestones</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {majorAchievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-black/40 border-green-400/20 hover:border-green-400/40 transition-all group"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <CardTitle className="text-white group-hover:text-green-400 transition-colors">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">{achievement.description}</p>
                <div className="text-sm text-green-400 font-semibold">{achievement.year}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Performance Statistics */}
      <div className="mb-12">
        <Card className="bg-black/40 border-green-400/20">
          <CardHeader>
            <CardTitle className="text-center text-white">4-Year Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">$450K</div>
                <div className="text-gray-300">Total Assets Under Management</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">30%</div>
                <div className="text-gray-300">Average Annual Returns</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-300">Major Loss Events</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-green-400/10 to-blue-400/10 border-green-400/20">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-green-400">Join Our Success</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Learn from our proven track record and start your algorithmic trading journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join">
                <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black font-bold px-8 py-4">
                  Start Learning
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-4 bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
