"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import MobileNavbar from "@/components/mobile-navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import UniversalTradingIntro from "@/components/universal-trading-intro"

const contactMethods = [
  {
    title: "General Inquiries",
    description: "Questions about courses, pricing, or general information",
    email: "desiforex@proton.me",
    subject: "General Enquiry",
    hours: "Mon-Fri 9AM-6PM EST",
    icon: "📧",
  },
  {
    title: "Career Services",
    description: "Job placement assistance and career guidance",
    email: "desiforex@proton.me",
    subject: "Careers",
    hours: "Mon-Fri 10AM-5PM EST",
    icon: "💼",
  },
  {
    title: "Partnership Inquiries",
    description: "Corporate training and institutional partnerships",
    email: "desiforex@proton.me",
    subject: "Add to Partnerships",
    hours: "Mon-Fri 9AM-6PM EST",
    icon: "🤝",
  },
]

const offices = [
  {
    city: "New York",
    address: "123 Wall Street, Suite 4500, New York, NY 10005",
    phone: "+1 (212) 555-0000",
    timezone: "EST",
  },
  {
    city: "London",
    address: "25 Bank Street, Canary Wharf, London E14 5JP, UK",
    phone: "+44 20 7000 0000",
    timezone: "GMT",
  },
]

const telegramChannels = [
  {
    name: "Official Channel 1",
    url: "https://t.me/+NXiTkxZHZbo1Mjk1",
    description: "Main trading signals and updates",
  },
  {
    name: "Official Channel 2",
    url: "https://t.me/Evanncross",
    description: "Community discussions and support",
  },
]

function FloatingGreenDots() {
  const [dots, setDots] = useState<{ left: string; top: string; animationDuration: string }[]>([])
  useEffect(() => {
    const newDots = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }))
    setDots(newDots)
  }, [])
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-green-400 rounded-full animate-bounce"
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: `${i * 0.3}s`,
            animationDuration: dot.animationDuration,
          }}
        />
      ))}
    </div>
  )
}

export default function ContactPage() {
  const [formType, setFormType] = useState<"contact" | "enrollment" | "consultation">("contact")
  const [showIntro, setShowIntro] = useState(true)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
    courseInterest: "",
    experience: "",
    goals: "",
    consultationType: "",
    preferredTime: "",
    discussion: "",
    terms: false,
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [showThankYou, setShowThankYou] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    try {
      const response = await fetch("https://formspree.io/f/meozdajv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject:
            formType === "contact"
              ? "Contact Us"
              : formType === "enrollment"
                ? "Course Enrollment"
                : "Free Consultation",
        }),
      })
      if (response.ok) {
        setSubmitStatus("success")
        setShowThankYou(true)
        resetForm()
      } else {
        setSubmitStatus("error")
      }
    } catch (err) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
      courseInterest: "",
      experience: "",
      goals: "",
      consultationType: "",
      preferredTime: "",
      discussion: "",
      terms: false,
      newsletter: false,
    })
    setSubmitStatus("idle")
  }

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  return (
    <>
      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-black border border-green-400/40 rounded-xl p-8 max-w-sm w-full text-center shadow-2xl">
            <h2 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h2>
            <p className="text-gray-200 mb-4">
              Your message has been submitted successfully. We appreciate your interest and will get back to you soon.
            </p>
            <Button
              className="bg-green-400 hover:bg-green-500 text-black w-full"
              onClick={() => setShowThankYou(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full pointer-events-none">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="border border-green-400/20 hover:border-green-400/40 transition-all duration-300"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animation: "pulse 4s infinite",
                }}
              />
            ))}
          </div>
        </div>

        <FloatingGreenDots />

        {showIntro && <UniversalTradingIntro onComplete={handleIntroComplete} pageName="Contact Us" />}

        {/* Responsive Navigation */}
        <div className={`transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}>
          <MobileNavbar />
        </div>

        <div
          className={`max-w-7xl mt-20 mx-auto p-6 transition-opacity duration-1000 ${showIntro ? "opacity-0" : "opacity-100"}`}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="text-green-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to start your algorithmic trading journey? We're here to help.
            </p>
          </div>

          {/* Form Type Selector */}
          <div className="mb-8 flex justify-center">
            <div className="flex rounded-lg p-1 border border-green-400/20 bg-black/40 transition-colors">
              {[
                { key: "consultation", label: "Free Consultation" },
                { key: "contact", label: "Contact Us" },
              ].map((type) => (
                <Button
                  key={type.key}
                  variant="ghost"
                  className={`font-semibold transition-colors
                  ${
                    formType === type.key
                      ? "bg-green-400 text-black hover:bg-green-500"
                      : "text-green-400 hover:bg-green-400/20 hover:text-black"
                  }
                `}
                  onClick={() => setFormType(type.key as any)}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {formType === "contact" && "Contact Us"}
                    {formType === "enrollment" && "Course Enrollment"}
                    {formType === "consultation" && "Free Consultation"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {submitStatus === "success" ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="text-2xl font-bold text-green-400 mb-4">
                        {formType === "contact" && "Message Sent Successfully!"}
                        {formType === "enrollment" && "Application Submitted!"}
                        {formType === "consultation" && "Consultation Booked!"}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {formType === "contact" && "We'll get back to you within 24 hours."}
                        {formType === "enrollment" && "Our admissions team will contact you within 2 business days."}
                        {formType === "consultation" && "You'll receive a calendar invite shortly."}
                      </p>
                      <Button onClick={resetForm} className="bg-green-400 hover:bg-green-500 text-black">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                          <Input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="bg-black/20 border-green-400/30 text-white focus:border-green-400"
                            placeholder="Enter your first name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                          <Input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="bg-black/20 border-green-400/30 text-white focus:border-green-400"
                            placeholder="Enter your last name"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="bg-black/20 border-green-400/30 text-white focus:border-green-400"
                            placeholder="you@email.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Telegram</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="bg-black/20 border-green-400/30 text-white focus:border-green-400"
                            placeholder="@username"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                          <SelectTrigger className="bg-black/20 border-green-400/30 text-white">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-green-400/30 ">
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="in">India</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Form-specific fields */}
                      {formType === "contact" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                            <Input
                              type="text"
                              value={formData.subject}
                              onChange={(e) => handleInputChange("subject", e.target.value)}
                              className="bg-black/20 border-green-400/30 text-white focus:border-green-400"
                              placeholder="What's this about?"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                            <Textarea
                              value={formData.message}
                              onChange={(e) => handleInputChange("message", e.target.value)}
                              className="bg-black/20 border-green-400/30 text-white focus:border-green-400 min-h-[120px]"
                              placeholder="Tell us more about your inquiry..."
                              required
                            />
                          </div>
                        </>
                      )}

                      {formType === "consultation" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Consultation Type *</label>
                            <Select
                              value={formData.consultationType}
                              onValueChange={(value) => handleInputChange("consultationType", value)}
                            >
                              <SelectTrigger className="bg-black/20 border-green-400/30 text-white">
                                <SelectValue placeholder="Select consultation type" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-green-400/30">
                                <SelectItem value="career">Career Guidance</SelectItem>
                                <SelectItem value="course">Course Selection</SelectItem>
                                <SelectItem value="strategy">Trading Strategy Review</SelectItem>
                                <SelectItem value="corporate">Corporate Training</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time</label>
                            <Select
                              value={formData.preferredTime}
                              onValueChange={(value) => handleInputChange("preferredTime", value)}
                            >
                              <SelectTrigger className="bg-black/20 border-green-400/30 text-white">
                                <SelectValue placeholder="Select preferred time" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border-green-400/30">
                                <SelectItem value="morning">Morning (9AM-12PM EST)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12PM-5PM EST)</SelectItem>
                                <SelectItem value="evening">Evening (5PM-8PM EST)</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              What would you like to discuss?
                            </label>
                            <Textarea
                              value={formData.discussion}
                              onChange={(e) => handleInputChange("discussion", e.target.value)}
                              className="bg-black/20 border-green-400/30 text-white focus:border-green-400 min-h-24"
                              placeholder="Brief description of what you'd like to discuss..."
                            />
                          </div>
                        </>
                      )}

                      {/* Agreement checkboxes */}
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="terms"
                            checked={formData.terms}
                            onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                            className="border-green-400/30 data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400"
                          />
                          <label htmlFor="terms" className="text-sm text-gray-300">
                            I agree to the{" "}
                            <Link href="/terms" className="text-green-400 hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-green-400 hover:underline">
                              Privacy Policy
                            </Link>{" "}
                            *
                          </label>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                            className="border-green-400/30 data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400"
                          />
                          <label htmlFor="newsletter" className="text-sm text-gray-300">
                            Subscribe to our newsletter for trading insights and course updates
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-3"
                        disabled={!formData.terms}
                      >
                        {formType === "contact" && "Send Message"}
                        {formType === "enrollment" && "Submit Application"}
                        {formType === "consultation" && "Book Consultation"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-white">Contact Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all group">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">{method.icon}</span>
                        <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                          {method.title}
                        </h3>
                        <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-gray-300 mb-3">{method.description}</p>
                      <div className="space-y-1 text-sm">
                        <div className="text-green-400 hover:text-green-300 transition-colors cursor-pointer">
                          <a href={`mailto:${method.email}?subject=${method.subject}`}>{method.email}</a>
                        </div>
                        <div className="text-gray-400">Subject: {method.subject}</div>
                        <div className="text-gray-400">{method.hours}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-white">Official Telegram</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {telegramChannels.map((channel, index) => (
                    <div key={index} className="p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all group">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">📱</span>
                        <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                          {channel.name}
                        </h3>
                        <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-gray-300 mb-3">{channel.description}</p>
                      <a
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors text-sm"
                      >
                        Join Channel →
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-white">Global Offices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="p-4 bg-black/20 rounded-lg">
                      <h3 className="font-semibold text-green-400 mb-2">{office.city}</h3>
                      <div className="space-y-1 text-sm text-gray-300">
                        <div>{office.address}</div>
                        <div>{office.phone}</div>
                        <Badge variant="outline" className="border-green-400/30 text-green-400 text-xs">
                          {office.timezone}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Investment <span className="text-green-400">FAQs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">What is the minimum investment required?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Our minimum investment starts from $1,000. This allows you to diversify across multiple trading
                    strategies and manage risk effectively.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">What returns can I expect from my investment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Our average annual returns range from 28-32%, with some strategies achieving 35-40%. Past
                    performance doesn't guarantee future results.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">How do you manage investment risks?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We use advanced risk management techniques including stop-loss orders, position sizing, and
                    diversification. We've maintained zero major loss events since inception.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Can I withdraw my investment anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Yes, you can request withdrawals with 48-hour notice. We maintain high liquidity to ensure quick
                    access to your funds when needed.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">What trading strategies do you use?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We employ algorithmic trading, forex scalping, swing trading, and quantitative analysis. Our
                    strategies are backtested and continuously optimized.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-green-400/20">
                <CardHeader>
                  <CardTitle className="text-lg text-white">How transparent are your investment reports?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We provide monthly detailed reports showing performance, trades executed, and portfolio allocation.
                    All clients receive real-time access to their investment dashboard.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
