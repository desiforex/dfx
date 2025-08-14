"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import MobileNavbar from "@/components/mobile-navbar"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
  {/* Responsive Navigation */}
  <MobileNavbar />

      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900/20" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our Vibrant <span className="text-green-400">Trading Community</span>
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

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Real-Time <span className="text-green-400">Live Chat</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Engage in instant discussions with expert traders and fellow community members. Get answers to your
                questions, share insights, and never trade alone again.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  24/7 active community discussions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Expert traders sharing live insights
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Instant notifications for market alerts
                </li>
              </ul>
            </div>

            <div className="relative">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Chat Window Background */}
                <rect x="20" y="20" width="360" height="260" rx="12" fill="#0f172a" stroke="#22c55e" strokeWidth="2" />

                {/* Header */}
                <rect x="20" y="20" width="360" height="50" rx="12" fill="#22c55e" />
                <text x="40" y="45" fill="black" fontSize="14" fontWeight="bold">
                  Trading Community Chat
                </text>
                <circle cx="350" cy="45" r="4" fill="#10b981">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="320" y="49" fill="black" fontSize="10">
                  ● 1,247 online
                </text>

                {/* Animated Messages */}
                <g className="messages">
                  {/* Message 1 */}
                  <rect x="40" y="90" width="200" height="30" rx="15" fill="#374151">
                    <animate attributeName="opacity" values="0;1;1;0.7" dur="8s" repeatCount="indefinite" />
                  </rect>
                  <text x="50" y="108" fill="#d1d5db" fontSize="11">
                    <animate attributeName="opacity" values="0;1;1;0.7" dur="8s" repeatCount="indefinite" />
                    Just made 15% profit on EURUSD! 🚀
                  </text>

                  {/* Message 2 */}
                  <rect x="160" y="130" width="180" height="30" rx="15" fill="#22c55e">
                    <animate attributeName="opacity" values="0;0;1;1;0.7" dur="8s" repeatCount="indefinite" />
                  </rect>
                  <text x="170" y="148" fill="black" fontSize="11">
                    <animate attributeName="opacity" values="0;0;1;1;0.7" dur="8s" repeatCount="indefinite" />
                    Great analysis! What's your next move?
                  </text>

                  {/* Message 3 */}
                  <rect x="40" y="170" width="220" height="30" rx="15" fill="#374151">
                    <animate attributeName="opacity" values="0;0;0;1;1;0.7" dur="8s" repeatCount="indefinite" />
                  </rect>
                  <text x="50" y="188" fill="#d1d5db" fontSize="11">
                    <animate attributeName="opacity" values="0;0;0;1;1;0.7" dur="8s" repeatCount="indefinite" />
                    Looking at GBP/JPY breakout pattern
                  </text>

                  {/* Message 4 */}
                  <rect x="120" y="210" width="200" height="30" rx="15" fill="#f59e0b">
                    <animate attributeName="opacity" values="0;0;0;0;1;1" dur="8s" repeatCount="indefinite" />
                  </rect>
                  <text x="130" y="228" fill="black" fontSize="11">
                    <animate attributeName="opacity" values="0;0;0;0;1;1" dur="8s" repeatCount="indefinite" />🔥 VIP
                    Signal Alert: GOLD Buy Setup!
                  </text>
                </g>

                {/* Typing Indicator */}
                <g transform="translate(40, 250)">
                  <rect width="60" height="20" rx="10" fill="#374151" />
                  <circle cx="15" cy="10" r="2" fill="#9ca3af">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="25" cy="10" r="2" fill="#9ca3af">
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="1s"
                      begin="0.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="35" cy="10" r="2" fill="#9ca3af">
                    <animate
                      attributeName="opacity"
                      values="0.3;1;0.3"
                      dur="1s"
                      begin="0.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Floating Notification Bubbles */}
                <g className="notifications">
                  <circle cx="320" cy="100" r="8" fill="#10b981" opacity="0">
                    <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100;80;100" dur="3s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="340" cy="140" r="6" fill="#f59e0b" opacity="0">
                    <animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="2s" repeatCount="indefinite" />
                    <animate attributeName="cx" values="340;360;340" dur="2.5s" begin="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-400/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Join Our <span className="text-green-400">Community</span>?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expert Support */}
            <Card className="p-6 bg-zinc-900/80 border-green-900 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <svg viewBox="0 0 200 150" className="w-full h-32">
                  <defs>
                    <radialGradient id="supportGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Central Support Hub */}
                  <circle cx="100" cy="75" r="20" fill="#22c55e">
                    <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="75" r="30" fill="url(#supportGlow)">
                    <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite" />
                  </circle>

                  {/* Expert Nodes */}
                  <g className="expert-nodes">
                    <circle cx="50" cy="40" r="8" fill="#f59e0b">
                      <animate attributeName="cy" values="40;35;40" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="40" r="8" fill="#10b981">
                      <animate attributeName="cy" values="40;35;40" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="110" r="8" fill="#f97316">
                      <animate attributeName="cy" values="110;115;110" dur="2s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="110" r="8" fill="#84cc16">
                      <animate attributeName="cy" values="110;115;110" dur="2s" begin="1.5s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* Connection Lines */}
                  <g stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.6">
                    <line x1="50" y1="40" x2="100" y2="75">
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,100;50,50;100,0;0,100"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line x1="150" y1="40" x2="100" y2="75">
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,100;50,50;100,0;0,100"
                        dur="4s"
                        begin="1s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line x1="50" y1="110" x2="100" y2="75">
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,100;50,50;100,0;0,100"
                        dur="4s"
                        begin="2s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line x1="150" y1="110" x2="100" y2="75">
                      <animate
                        attributeName="stroke-dasharray"
                        values="0,100;50,50;100,0;0,100"
                        dur="4s"
                        begin="3s"
                        repeatCount="indefinite"
                      />
                    </line>
                  </g>

                  {/* Help Icons */}
                  <text x="100" y="80" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">
                    ?
                  </text>
                  <text x="50" y="45" textAnchor="middle" fill="black" fontSize="8">
                    PRO
                  </text>
                  <text x="150" y="45" textAnchor="middle" fill="black" fontSize="8">
                    VIP
                  </text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300">
                Get personalized guidance from professional traders with years of experience.
              </p>
            </Card>

            {/* Knowledge Sharing */}
            <Card className="p-6 bg-zinc-900/80 border-green-900 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <svg viewBox="0 0 200 150" className="w-full h-32">
                  <defs>
                    <linearGradient id="knowledgeFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                      <stop offset="50%" stopColor="#22c55e" stopOpacity="1" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                      <animateTransform
                        attributeName="gradientTransform"
                        type="translate"
                        values="-200,0;200,0;-200,0"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                  </defs>

                  {/* Books/Resources */}
                  <rect x="20" y="60" width="15" height="20" fill="#f59e0b" rx="2">
                    <animate attributeName="height" values="20;25;20" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="40" y="55" width="15" height="25" fill="#10b981" rx="2">
                    <animate attributeName="height" values="25;30;25" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="60" y="50" width="15" height="30" fill="#f97316" rx="2">
                    <animate attributeName="height" values="30;35;30" dur="2s" begin="1s" repeatCount="indefinite" />
                  </rect>

                  {/* Knowledge Stream */}
                  <path d="M80 65 Q120 45 160 65" stroke="url(#knowledgeFlow)" strokeWidth="3" fill="none" />

                  {/* Brain/Learning Center */}
                  <circle cx="160" cy="65" r="15" fill="#84cc16" opacity="0.8">
                    <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* Knowledge Particles */}
                  <g className="particles">
                    <circle cx="90" cy="60" r="2" fill="#22c55e">
                      <animateMotion dur="3s" repeatCount="indefinite">
                        <mpath href="#knowledgePath" />
                      </animateMotion>
                    </circle>
                    <circle cx="90" cy="60" r="2" fill="#f59e0b">
                      <animateMotion dur="3s" begin="1s" repeatCount="indefinite">
                        <mpath href="#knowledgePath" />
                      </animateMotion>
                    </circle>
                  </g>

                  <path id="knowledgePath" d="M80 65 Q120 45 160 65" fill="none" opacity="0" />

                  {/* Charts/Analytics */}
                  <g transform="translate(20, 100)">
                    <rect x="0" y="10" width="4" height="20" fill="#22c55e">
                      <animate attributeName="height" values="20;30;15;25;20" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="8" y="5" width="4" height="25" fill="#f59e0b">
                      <animate
                        attributeName="height"
                        values="25;35;20;30;25"
                        dur="2s"
                        begin="0.2s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect x="16" y="15" width="4" height="15" fill="#10b981">
                      <animate
                        attributeName="height"
                        values="15;25;10;20;15"
                        dur="2s"
                        begin="0.4s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <rect x="24" y="8" width="4" height="22" fill="#f97316">
                      <animate
                        attributeName="height"
                        values="22;32;17;27;22"
                        dur="2s"
                        begin="0.6s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Knowledge Sharing</h3>
              <p className="text-gray-300">
                Access exclusive educational content, strategies, and market analysis from our community.
              </p>
            </Card>

            {/* VIP Signals */}
            <Card className="p-6 bg-zinc-900/80 border-green-900 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <svg viewBox="0 0 200 150" className="w-full h-32">
                  <defs>
                    <radialGradient id="signalGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Signal Tower */}
                  <rect x="95" y="80" width="10" height="40" fill="#64748b" />
                  <polygon points="100,70 85,80 115,80" fill="#f59e0b">
                    <animate attributeName="fill" values="#f59e0b;#22c55e;#f59e0b" dur="2s" repeatCount="indefinite" />
                  </polygon>

                  {/* Signal Waves */}
                  <g stroke="#22c55e" strokeWidth="2" fill="none">
                    <circle cx="100" cy="75" r="20" opacity="0">
                      <animate attributeName="r" values="20;40;60" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0.4;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="100" cy="75" r="20" opacity="0">
                      <animate attributeName="r" values="20;40;60" dur="2s" begin="0.7s" repeatCount="indefinite" />
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0"
                        dur="2s"
                        begin="0.7s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="100" cy="75" r="20" opacity="0">
                      <animate attributeName="r" values="20;40;60" dur="2s" begin="1.4s" repeatCount="indefinite" />
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0"
                        dur="2s"
                        begin="1.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>

                  {/* VIP Badge */}
                  <circle cx="100" cy="40" r="15" fill="#fbbf24" />
                  <text x="100" y="45" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">
                    VIP
                  </text>

                  {/* Signal Notifications */}
                  <g className="notifications">
                    <rect x="130" y="30" width="60" height="20" rx="10" fill="#10b981" opacity="0">
                      <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
                      <animate attributeName="x" values="130;140;130" dur="3s" begin="1s" repeatCount="indefinite" />
                    </rect>
                    <text x="160" y="42" textAnchor="middle" fill="white" fontSize="8" opacity="0">
                      <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
                      BUY SIGNAL
                    </text>

                    <rect x="10" y="60" width="60" height="20" rx="10" fill="#ef4444" opacity="0">
                      <animate attributeName="opacity" values="0;1;0" dur="3s" begin="2s" repeatCount="indefinite" />
                      <animate attributeName="x" values="10;20;10" dur="3s" begin="2s" repeatCount="indefinite" />
                    </rect>
                    <text x="40" y="72" textAnchor="middle" fill="white" fontSize="8" opacity="0">
                      <animate attributeName="opacity" values="0;1;0" dur="3s" begin="2s" repeatCount="indefinite" />
                      SELL ALERT
                    </text>
                  </g>

                  {/* Profit Indicators */}
                  <g transform="translate(140, 100)">
                    <text fontSize="12" fill="#10b981">
                      +15%
                    </text>
                    <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                  </g>
                  <g transform="translate(30, 110)">
                    <text fontSize="12" fill="#10b981">
                      +23%
                    </text>
                    <animate attributeName="opacity" values="0;1;0" dur="4s" begin="2s" repeatCount="indefinite" />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">VIP Trading Signals</h3>
              <p className="text-gray-300">
                Receive premium trading signals with high accuracy rates and detailed entry/exit points.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-black">Trading Journey</span>?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of successful traders who've already discovered the power of our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/https://t.me/+hLP2dWPIM8w0NWU1" target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-green-400 hover:bg-gray-900 px-8 py-3 text-lg font-semibold">
              Our Previous Trades
              </Button>
            </Link>
            <Link href="/join">
              <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-green-400 px-8 py-3 text-lg bg-transparent"
              >
              Upgrade to VIP
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-white">15,000+</div>
              <div className="text-green-200">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-green-200">Live Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">85%</div>
              <div className="text-green-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
