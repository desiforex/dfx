"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { DoubleSide } from "three"
import type * as THREE from "three"

interface TradingTetrahedronProps {
  color?: string
  position?: [number, number, number]
  scale?: number
}

export default function TradingTetrahedron({
  color = "#00ff00",
  position = [0, 0, 0],
  scale = 1,
}: TradingTetrahedronProps) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  const a = 1.0 * scale
  const vertices = [
    [a, a, a],
    [a, -a, -a],
    [-a, a, -a],
    [-a, -a, a],
  ]

  const faces = [
    [0, 1, 2],
    [0, 1, 3],
    [0, 2, 3],
    [1, 2, 3],
  ]

  return (
    <group ref={meshRef} position={position}>
      {faces.map((face, index) => {
        const v0 = vertices[face[0]]
        const v1 = vertices[face[1]]
        const v2 = vertices[face[2]]

        const centerX = (v0[0] + v1[0] + v2[0]) / 3
        const centerY = (v0[1] + v1[1] + v2[1]) / 3
        const centerZ = (v0[2] + v1[2] + v2[2]) / 3

        return (
          <mesh key={index} position={[centerX, centerY, centerZ]}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={3}
                itemSize={3}
                array={
                  new Float32Array([
                    v0[0] - centerX,
                    v0[1] - centerY,
                    v0[2] - centerZ,
                    v1[0] - centerX,
                    v1[1] - centerY,
                    v1[2] - centerZ,
                    v2[0] - centerX,
                    v2[1] - centerY,
                    v2[2] - centerZ,
                  ])
                }
              />
            </bufferGeometry>
            <meshBasicMaterial color={color} wireframe side={DoubleSide} />
          </mesh>
        )
      })}
    </group>
  )
}
