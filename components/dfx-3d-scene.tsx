"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Float, Text3D, Sphere, MeshDistortMaterial } from "@react-three/drei"
import type { Group } from "three"

export function DFX3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 40]} />
      <ambientLight intensity={0.3} />
      <Environment preset="night" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.3}
        autoRotate
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
      />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <DFXLogo position={[0, 1, 0]} />
      </Float>

      <TradingGridPoints />
      <MarketParticles />
      <DataSphere />
    </Canvas>
  )
}

function DFXLogo({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3
    }
  })

  // Fallback font paths in case the font files are missing
  const boldFont = "/fonts/helvetiker_bold.typeface.json"
  const regularFont = "/fonts/helvetiker_regular.typeface.json"
  return (
    <group ref={groupRef} position={position}>
      <Text3D
        font={boldFont}
        size={2}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.03}
        bevelOffset={0}
        bevelSegments={5}
        position={[-2.5, 0.5, 0]}
        onError={(e) => {
          console.error('Font file not found for DFXLogo bold:', boldFont, e)
        }}
      >
        DFX
        <meshStandardMaterial color="#00ff88" metalness={0.9} roughness={0.1} />
      </Text3D>

      <Text3D
        font={regularFont}
        size={0.8}
        height={0.1}
        curveSegments={8}
        position={[-3.2, -0.8, 0]}
        onError={(e) => {
          console.error('Font file not found for DFXLogo regular:', regularFont, e)
        }}
      >
        DESIFOREX
        <meshStandardMaterial color="#ffffff" metalness={0.7} roughness={0.3} />
      </Text3D>
    </group>
  )
}

function TradingGridPoints() {
  const pointsRef = useRef<Group>(null)
  const [points, setPoints] = useState<Array<[number, number, number]>>([])

  useEffect(() => {
    const gridSize = 12
    const spacing = 1.5
    const newPoints: Array<[number, number, number]> = []

    for (let x = -gridSize; x <= gridSize; x += spacing) {
      for (let z = -gridSize; z <= gridSize; z += spacing) {
        const distance = Math.sqrt(x * x + z * z)
        if (distance > 4 && distance < 15) {
          newPoints.push([x, -4, z])
        }
      }
    }

    setPoints(newPoints)
  }, [])

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <group ref={pointsRef}>
      {points.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.3} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

function MarketParticles() {
  const particlesRef = useRef<Group>(null)
  const [particles, setParticles] = useState<
    Array<{
      position: [number, number, number]
      speed: number
      size: number
      color: string
    }>
  >([])

  useEffect(() => {
    const count = 80
    const newParticles = []

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 6 + Math.random() * 12
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = (Math.random() - 0.5) * 15

      newParticles.push({
        position: [x, y, z],
        speed: 0.15 + Math.random() * 0.25,
        size: 0.04 + Math.random() * 0.08,
        color: Math.random() > 0.6 ? "#00ff88" : "#ffffff",
      })
    }

    setParticles(newParticles)
  }, [])

  useFrame(({ clock }) => {
    if (particlesRef.current && particles.length === particlesRef.current.children.length) {
      particlesRef.current.children.forEach((particle, i) => {
        const data = particles[i]
        if (!data) return
        particle.position.y += data.speed * 0.015
        if (particle.position.y > 8) {
          particle.position.y = -8
        }
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial
            color={particle.color}
            emissive={particle.color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}

function DataSphere() {
  const sphereRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.08
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <group ref={sphereRef} position={[0, 0, 0]}>
      <Sphere args={[10, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#00ff88"
          attach="material"
          distort={0.4}
          speed={1.5}
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
    </group>
  )
}
