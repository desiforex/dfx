"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import UniversalTradingIntro from "@/components/universal-trading-intro"

const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & Chief Trading Officer",
    experience: "15+ years",
    specialization: "Quantitative Analysis, Machine Learning",
    achievements: "Former Goldman Sachs VP, PhD in Financial Mathematics",
    image: "/professional-indian-man-suit.png",
  },
  {
    name: "Sarah Chen",
    role: "Head of Algorithmic Development",
    experience: "12+ years",
    specialization: "High-Frequency Trading, System Architecture",
    achievements: "Ex-Jane Street, MIT Computer Science",
    image: "/team-member-2.png",
  },
  {
    name: "Michael Rodriguez",
    role: "Director of Risk Management",
    experience: "10+ years",
    specialization: "Risk Analytics, Compliance",
    achievements: "Former JP Morgan Risk Head, CFA Charter",
    image: "/hispanic-businessman.png",
  },
]

const milestones = [
  {
    year: "2019",
    event: "DFX Founded",
    description: "Started with $15K initial capital and vision for accessible trading education",
  },
  {
    year: "2020",
    event: "First Client Milestone",
    description: "Reached 10 active clients with consistent 25%+ returns",
  },
  {
    year: "2021",
    event: "Portfolio Growth",
    description: "Achieved $25K portfolio value with 28% average annual returns",
  },
  {
    year: "2022",
    event: "Educational Platform Launch",
    description: "Launched online trading academy, portfolio grew to $38K",
  },
  { year: "2023", event: "Community Expansion", description: "Reached $54K portfolio value with 35+ active clients" },
  {
    year: "2024",
    event: "Major Milestone",
    description: "Achieved $99K portfolio value, 54 active clients, $450K total AUM, zero major loss events",
  },
]

export default function AboutPage() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {showIntro && <UniversalTradingIntro onComplete={handleIntroComplete} pageName="About DFX" />}

      {/* Navigation */}
      <nav
        className={`border-b border-green-400/20 bg-black/50 backdrop-blur-sm sticky top-0 z-50 transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-green-400">DFX</span> DESIFOREX
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-green-400 transition-colors">
                Home
              </Link>
              <Link href="/courses" className="hover:text-green-400 transition-colors">
                Courses
              </Link>
              <Link href="/demo" className="hover:text-green-400 transition-colors">
                Trading Lab
              </Link>
              <Link href="/about" className="text-green-400">
                About
              </Link>
              <Link href="/contact" className="hover:text-green-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className={`transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}>
        {/* Hero Section */}
        <section className="py-20 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
              {/* Animated network connections */}
              <g className="opacity-20">
                {Array.from({ length: 8 }).map((_, i) => (
                  <g key={i}>
                    <circle
                      cx={150 + i * 130}
                      cy={200 + Math.sin(i) * 100}
                      r="3"
                      fill="#22c55e"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                    <line
                      x1={150 + i * 130}
                      y1={200 + Math.sin(i) * 100}
                      x2={150 + (i + 1) * 130}
                      y2={200 + Math.sin(i + 1) * 100}
                      stroke="#22c55e"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  </g>
                ))}
              </g>

              {/* Floating geometric shapes */}
              <g className="opacity-10">
                {Array.from({ length: 12 }).map((_, i) => (
                  <rect
                    key={i}
                    x={100 + i * 90}
                    y={400 + Math.cos(i) * 80}
                    width="20"
                    height="20"
                    fill="#22c55e"
                    transform={`rotate(${i * 30} ${100 + i * 90} ${400 + Math.cos(i) * 80})`}
                    className="animate-spin"
                    style={{
                      animationDuration: `${4 + i * 0.5}s`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </g>

              {/* Data flow streams */}
              <g className="opacity-15">
                {Array.from({ length: 6 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M${200 + i * 150},600 Q${250 + i * 150},500 ${300 + i * 150},600 T${400 + i * 150},600`}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeDasharray="10,5"
                    className="animate-pulse"
                    style={{
                      animationDuration: `${3 + i * 0.3}s`,
                      animationDelay: `${i * 0.4}s`,
                    }}
                  />
                ))}
              </g>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-green-400">DFX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Pioneering the future of algorithmic trading education since 2015
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 bg-green-400/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-black/40 border-green-400/20 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      strokeDasharray="20,5"
                      className="animate-spin opacity-30"
                      style={{ animationDuration: "8s" }}
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="20"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="1"
                      strokeDasharray="10,3"
                      className="animate-spin opacity-50"
                      style={{ animationDuration: "6s", animationDirection: "reverse" }}
                    />
                    <circle cx="32" cy="32" r="4" fill="#22c55e" className="animate-pulse" />
                  </svg>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-400">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To provide exceptional trading education and achieve consistent 35-40% annual returns for our 54+
                    active clients. With $450K in total assets under management and zero major loss events, we prove
                    that advanced trading strategies can be both accessible and profitable for everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-green-400/20 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path
                      d="M32,8 L56,32 L32,56 L8,32 Z"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      className="animate-pulse opacity-30"
                    />
                    <path
                      d="M32,16 L48,32 L32,48 L16,32 Z"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="1"
                      strokeDasharray="6,2"
                      className="animate-pulse opacity-50"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="6"
                      fill="#22c55e"
                      className="animate-pulse opacity-70"
                      style={{ animationDelay: "1s" }}
                    />
                  </svg>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-400">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To build a community of 100+ satisfied clients while maintaining our track record of 28-32% average
                    annual returns. Our goal is to continue our proven growth trajectory from $25K to $99K portfolio
                    value, demonstrating that consistent, risk-managed trading education creates lasting wealth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <svg className="w-full h-32" viewBox="0 0 800 128">
                  <g className="opacity-10">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <circle
                        key={i}
                        cx={160 + i * 120}
                        cy="64"
                        r="30"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                    {Array.from({ length: 4 }).map((_, i) => (
                      <line
                        key={i}
                        x1={190 + i * 120}
                        y1="64"
                        x2={250 + i * 120}
                        y2="64"
                        stroke="#22c55e"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </g>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
                Meet Our <span className="text-green-400">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-300 relative z-10">
                Industry veterans with decades of combined experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-black/40 border-green-400/20 hover:border-green-400/40 transition-all group relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 300 400">
                      <circle
                        cx="150"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1"
                        strokeDasharray="10,5"
                        className="animate-spin group-hover:animate-pulse"
                        style={{ animationDuration: "10s" }}
                      />
                      <path
                        d="M50,300 Q150,250 250,300 T450,300"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="relative mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-400/20 group-hover:border-green-400/40 transition-all"
                      />
                      <div className="absolute inset-0 rounded-full bg-green-400/10 group-hover:bg-green-400/20 transition-all"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-green-400 font-semibold mb-2">{member.role}</p>
                    <Badge className="bg-green-400/20 text-green-400 mb-4">{member.experience}</Badge>
                    <p className="text-gray-300 text-sm mb-3">{member.specialization}</p>
                    <p className="text-gray-400 text-xs">{member.achievements}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 px-6 bg-green-400/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              {Array.from({ length: 6 }).map((_, i) => (
                <g key={i}>
                  <circle
                    cx={200 + i * 160}
                    cy="400"
                    r="60"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1"
                    strokeDasharray="15,5"
                    className="animate-spin"
                    style={{
                      animationDuration: `${8 + i}s`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                  <path
                    d={`M${200 + i * 160},340 Q${230 + i * 160},300 ${260 + i * 160},340`}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1"
                    strokeDasharray="5,3"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </g>
              ))}
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-green-400">Journey</span>
              </h2>
              <p className="text-xl text-gray-300">A decade of innovation and growth</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-400/30">
                <div className="w-full h-full bg-gradient-to-b from-transparent via-green-400/50 to-transparent animate-pulse"></div>
              </div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="bg-black/40 border-green-400/20 hover:border-green-400/40 transition-all relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5">
                          <svg className="w-full h-full" viewBox="0 0 400 200">
                            <path
                              d="M0,100 Q100,50 200,100 T400,100"
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="1"
                              strokeDasharray="8,4"
                              className="animate-pulse"
                              style={{ animationDelay: `${index * 0.2}s` }}
                            />
                            <circle
                              cx="200"
                              cy="100"
                              r="30"
                              fill="none"
                              stroke="#22c55e"
                              strokeWidth="1"
                              strokeDasharray="5,5"
                              className="animate-spin"
                              style={{ animationDuration: "6s" }}
                            />
                          </svg>
                        </div>
                        <CardContent className="p-6 relative z-10">
                          <div className="text-green-400 font-bold text-lg mb-2">{milestone.year}</div>
                          <h3 className="text-white font-semibold text-xl mb-2">{milestone.event}</h3>
                          <p className="text-gray-300">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-green-400 rounded-full border-4 border-black animate-pulse relative">
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-30"></div>
                      </div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1200 600">
              <g>
                {Array.from({ length: 4 }).map((_, i) => (
                  <g key={i}>
                    <rect
                      x={200 + i * 200}
                      y="200"
                      width="120"
                      height="120"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="1"
                      strokeDasharray="10,5"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                    <circle
                      cx={260 + i * 200}
                      cy="260"
                      r="40"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      className="animate-spin"
                      style={{
                        animationDuration: `${6 + i}s`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  </g>
                ))}
              </g>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-green-400">Core Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Excellence",
                  description: "Striving for the highest standards in education and trading",
                },
                {
                  icon: "🔬",
                  title: "Innovation",
                  description: "Continuously advancing trading technology and methodologies",
                },
                {
                  icon: "🤝",
                  title: "Integrity",
                  description: "Maintaining transparency and ethical practices in all we do",
                },
                {
                  icon: "🌍",
                  title: "Accessibility",
                  description: "Making advanced trading education available to everyone",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="bg-black/40 border-green-400/20 hover:border-green-400/40 transition-all group text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 300 300">
                      <circle
                        cx="150"
                        cy="150"
                        r="100"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1"
                        strokeDasharray="15,5"
                        className="animate-spin group-hover:animate-pulse"
                        style={{ animationDuration: "8s" }}
                      />
                      <polygon
                        points="150,50 200,100 200,200 150,250 100,200 100,100"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1"
                        strokeDasharray="8,4"
                        className="animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    </svg>
                  </div>
                  <CardContent className="p-6 relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-green-400/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 400">
              <path
                d="M0,200 Q300,100 600,200 T1200,200"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeDasharray="20,10"
                className="animate-pulse"
              />
              <path
                d="M0,150 Q300,250 600,150 T1200,150"
                fill="none"
                stroke="#22c55e"
                strokeWidth="1"
                strokeDasharray="15,5"
                className="animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              {Array.from({ length: 8 }).map((_, i) => (
                <circle
                  key={i}
                  cx={150 + i * 130}
                  cy="200"
                  r="5"
                  fill="#22c55e"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </svg>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our <span className="text-green-400">Success Story</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community of 54+ active clients achieving 35-40% annual returns with zero major loss events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-green-400 hover:bg-green-500 text-black font-bold px-8 py-4 text-lg">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-4 text-lg bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
