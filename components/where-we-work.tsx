"use client"

import { useState } from "react"

const locations = [
  { id: "usa", label: "United States" },
  { id: "canada", label: "Canada" },
  { id: "caribbean", label: "Caribbean" },
  { id: "australia", label: "Australia" },
]

const stats = [
  { number: "100%", label: "Employee Owned" },
  { number: "500+", label: "Active Projects" },
]

export function WhereWeWork() {
  const [activeLocation, setActiveLocation] = useState("usa")

  return (
    <section id="where-we-work" className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white" />
            <h3 className="text-white font-medium tracking-[0.2em] text-sm uppercase">Where We Work</h3>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight max-w-4xl">
            Helping you transform communities across the globe.
          </h2>
          <p className="text-white/80 text-lg max-w-3xl leading-relaxed">
            No matter where or what you want to build, we mobilize the right resources and experts to drive value and
            realize your project goals. From coast to coast in communities across the country, if you're ready, we're
            ready.
          </p>
        </div>

        {/* Location tabs */}
        <div className="flex flex-wrap gap-8 mb-12">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              className={`text-lg font-medium pb-2 transition-colors relative ${
                activeLocation === location.id ? "text-accent" : "text-white/60 hover:text-white"
              }`}
            >
              {location.label}
              {activeLocation === location.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        {/* Map and stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] bg-slate-800/50 rounded-lg flex items-center justify-center">
            <p className="text-white/40 text-lg">Map Visualization</p>
          </div>

          <div className="space-y-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-6xl md:text-7xl font-bold text-accent mb-3">{stat.number}</div>
                <div className="text-white text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
