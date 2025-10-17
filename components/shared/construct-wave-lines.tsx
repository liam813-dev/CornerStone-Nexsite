"use client"

import { DotLottieReact } from "@lottiefiles/dotlottie-react"

import { cn } from "@/lib/utils"

type ConstructWaveLinesProps = {
  className?: string
}

export function ConstructWaveLines({ className }: ConstructWaveLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none relative h-[4.75rem] w-full", className)}
    >
      <div className="absolute inset-0 flex items-start justify-center overflow-visible">
        <DotLottieReact
          src="/Double Wave Lines.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
            transform: "scale(3.75) translateY(-12%)",
            transformOrigin: "center",
          }}
        />
      </div>
    </div>
  )
}
