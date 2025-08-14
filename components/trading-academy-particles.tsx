"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  symbol: string
}

const TradingAcademyParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  const tradingSymbols = ["$", "€", "£", "¥", "₿", "📈", "📊", "💹", "⚡", "🎯", "🔥", "💎"]
  const tradingColors = ["#00ff88", "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create initial particles
    const initialParticles: Particle[] = []
    for (let i = 0; i < 80; i++) {
      initialParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.8 + 0.2,
        color: tradingColors[Math.floor(Math.random() * tradingColors.length)],
        symbol: tradingSymbols[Math.floor(Math.random() * tradingSymbols.length)],
      })
    }
    setParticles(initialParticles)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Mouse interaction
          const dx = mousePos.x - particle.x
          const dy = mousePos.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const force = (150 - distance) / 150
            particle.vx -= (dx / distance) * force * 0.5
            particle.vy -= (dy / distance) * force * 0.5
          }

          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Boundary collision
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8

          // Keep particles in bounds
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))

          // Friction
          particle.vx *= 0.99
          particle.vy *= 0.99

          // Draw particle
          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = particle.color
          ctx.font = `${particle.size}px Arial`
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"

          // Add glow effect
          ctx.shadowColor = particle.color
          ctx.shadowBlur = 10

          ctx.fillText(particle.symbol, particle.x, particle.y)
          ctx.restore()

          return particle
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePos, particles])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">TRADING</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-green-400 tracking-wider">ACADEMY</h2>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl">
            Master the Markets with Advanced Algorithmic Strategies
          </p>
        </div>
      </div>
    </div>
  )
}

export default TradingAcademyParticles
