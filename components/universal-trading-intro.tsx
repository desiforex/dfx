"use client"


import { useEffect, useState } from "react"
import TradingMatrix from "./trading-matrix"

interface UniversalTradingIntroProps {
  onComplete: () => void
  pageName: string
}

export default function UniversalTradingIntro({ onComplete, pageName }: UniversalTradingIntroProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-4">DFX DESIFOREX</h1>
        <p className="text-xl text-white">Loading {pageName}...</p>
        <div className="flex justify-center items-center my-6">
          <TradingMatrix />
        </div>
        <div className="mt-4 w-16 h-1 bg-green-400 mx-auto animate-pulse"></div>
      </div>
    </div>
  )
}