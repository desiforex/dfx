"use client"

import type React from "react"

// StepGuideSection: Alternating SVG and content for each step
function StepGuideSection({ steps }: { steps: Array<{ svg: React.ReactNode; title: string; description: React.ReactNode }> }) {
  return (
    <div className="flex flex-col gap-12">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center justify-between bg-zinc-900/80 rounded-2xl shadow-lg border border-green-900 px-6 py-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">{step.svg}</div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-green-400 font-bold text-2xl mb-2">{step.title}</div>
            <div className="text-lg text-gray-200 mb-2">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StepGuideSection
