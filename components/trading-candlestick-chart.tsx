"use client"

import { useEffect, useState } from "react"

interface CandleData {
  open: number
  high: number
  low: number
  close: number
  volume: number
  timestamp: number
}

export default function TradingCandlestickChart() {
  const [candleData, setCandleData] = useState<CandleData[]>([])
  const [currentPrice, setCurrentPrice] = useState(1850.25)

  // Generate realistic candlestick data
  useEffect(() => {
    const generateCandles = () => {
      const candles: CandleData[] = []
      let price = 1850

      for (let i = 0; i < 20; i++) {
        const open = price + (Math.random() - 0.5) * 10
        const volatility = Math.random() * 20 + 5
        const high = open + Math.random() * volatility
        const low = open - Math.random() * volatility
        const close = low + Math.random() * (high - low)
        const volume = Math.random() * 1000 + 500

        candles.push({
          open,
          high,
          low,
          close,
          volume,
          timestamp: Date.now() - (19 - i) * 60000,
        })

        price = close
      }

      setCandleData(candles)
      setCurrentPrice(candles[candles.length - 1].close)
    }

    generateCandles()

    // Update data every 3 seconds
    const interval = setInterval(() => {
      setCandleData((prev) => {
        const lastCandle = prev[prev.length - 1]
        const newPrice = lastCandle.close + (Math.random() - 0.5) * 15
        const volatility = Math.random() * 12 + 3

        const newCandle: CandleData = {
          open: lastCandle.close,
          high: Math.max(lastCandle.close, newPrice) + Math.random() * volatility,
          low: Math.min(lastCandle.close, newPrice) - Math.random() * volatility,
          close: newPrice,
          volume: Math.random() * 800 + 400,
          timestamp: Date.now(),
        }

        setCurrentPrice(newPrice)

        return [...prev.slice(1), newCandle]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const maxPrice = Math.max(...candleData.map((c) => c.high))
  const minPrice = Math.min(...candleData.map((c) => c.low))
  const priceRange = maxPrice - minPrice
  const padding = priceRange * 0.1

  return (
    <div className="w-full h-full bg-black/20 rounded-lg p-4 relative overflow-hidden">
      {/* Price Display */}
      <div className="absolute top-4 left-4 z-10">
        <div className="text-green-400 text-2xl font-bold font-mono">${currentPrice.toFixed(2)}</div>
        <div className="text-gray-400 text-sm">Live Trading Simulation</div>
      </div>

      {/* Chart */}
      <svg className="w-full h-full" viewBox="0 0 800 400">
        <defs>
          <linearGradient id="volumeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        <g opacity="0.2">
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const y = 50 + i * 60
            const price = maxPrice + padding - (i * (priceRange + 2 * padding)) / 5
            return (
              <g key={i}>
                <line x1="60" y1={y} x2="740" y2={y} stroke="#333" strokeWidth="1" />
                <text x="50" y={y + 4} textAnchor="end" fill="#666" fontSize="10" fontFamily="monospace">
                  ${price.toFixed(0)}
                </text>
              </g>
            )
          })}
        </g>

        {/* Volume Bars */}
        <g>
          {candleData.map((candle, index) => {
            const x = 60 + index * 35
            const maxVolume = Math.max(...candleData.map((c) => c.volume))
            const volumeHeight = (candle.volume / maxVolume) * 30
            const y = 370 - volumeHeight

            return (
              <rect
                key={`volume-${index}`}
                x={x - 8}
                y={y}
                width="16"
                height={volumeHeight}
                fill="url(#volumeGrad)"
                opacity="0.7"
              />
            )
          })}
        </g>

        {/* Candlesticks */}
        {candleData.map((candle, index) => {
          const x = 60 + index * 35
          const yScale = (price: number) => 50 + ((maxPrice + padding - price) / (priceRange + 2 * padding)) * 300

          const openY = yScale(candle.open)
          const closeY = yScale(candle.close)
          const highY = yScale(candle.high)
          const lowY = yScale(candle.low)

          const isGreen = candle.close > candle.open
          const bodyTop = Math.min(openY, closeY)
          const bodyHeight = Math.abs(closeY - openY)

          return (
            <g key={index}>
              {/* Wick */}
              <line x1={x} y1={highY} x2={x} y2={lowY} stroke={isGreen ? "#22c55e" : "#ef4444"} strokeWidth="1" />

              {/* Body */}
              <rect
                x={x - 6}
                y={bodyTop}
                width="12"
                height={Math.max(bodyHeight, 1)}
                fill={isGreen ? "#22c55e" : "#ef4444"}
                opacity="0.8"
              />

              {/* Highlight current candle */}
              {index === candleData.length - 1 && (
                <circle cx={x} cy={closeY} r="8" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.6">
                  <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          )
        })}

        {/* Moving Average Line */}
        <polyline
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          opacity="0.7"
          strokeDasharray="3,3"
          points={candleData
            .map((candle, index) => {
              const x = 60 + index * 35
              const avgPrice = (candle.open + candle.close + candle.high + candle.low) / 4
              const y = 50 + ((maxPrice + padding - avgPrice) / (priceRange + 2 * padding)) * 300
              return `${x},${y}`
            })
            .join(" ")}
        />

        {/* Chart Title */}
        <text x="400" y="25" textAnchor="middle" fill="#22c55e" fontSize="14" fontWeight="bold">
          Real-Time Market Data
        </text>
      </svg>

      {/* Floating indicators */}
      <div className="absolute bottom-4 right-4 space-y-2">
        <div className="bg-black/60 px-3 py-1 rounded text-xs">
          <span className="text-gray-400">Vol: </span>
          <span className="text-green-400 font-mono">
            {candleData.length > 0 ? candleData[candleData.length - 1].volume.toFixed(0) : "0"}
          </span>
        </div>
        <div className="bg-black/60 px-3 py-1 rounded text-xs">
          <span className="text-gray-400">Change: </span>
          <span className="text-green-400 font-mono">+2.34%</span>
        </div>
      </div>
    </div>
  )
}
