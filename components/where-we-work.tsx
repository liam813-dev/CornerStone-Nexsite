"use client"

import { useState } from "react"
import { MapPin, Users, Building2 } from "lucide-react"

const locations = [
  { id: "usa", label: "United States" },
  { id: "canada", label: "Canada" },
  { id: "caribbean", label: "Caribbean" },
  { id: "australia", label: "Australia" },
]

const stats = [
  { number: "100%", label: "Employee Owned", icon: Users },
  { number: "500+", label: "Active Projects", icon: Building2 },
]

const locationData = {
  usa: {
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
    offices: 12,
  },
  canada: {
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    offices: 8,
  },
  caribbean: {
    cities: ["Nassau", "Kingston", "Port of Spain", "Bridgetown"],
    offices: 4,
  },
  australia: {
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    offices: 6,
  },
}

export function WhereWeWork() {
  const [activeLocation, setActiveLocation] = useState("usa")

  return (
    <section id="where-we-work" className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

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

        <div className="flex flex-wrap gap-8 mb-16">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setActiveLocation(location.id)}
              className={`text-lg font-medium pb-2 transition-all relative ${
                activeLocation === location.id ? "text-accent" : "text-white/60 hover:text-white"
              }`}
            >
              {location.label}
              {activeLocation === location.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent animate-in slide-in-from-left duration-300" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left side - Location details with modern card design */}
          <div className="lg:col-span-7 space-y-6">
            {/* Office count card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-accent/10 rounded-xl">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2">
                    {locationData[activeLocation as keyof typeof locationData].offices}
                  </div>
                  <div className="text-white/60 text-lg">Regional Offices</div>
                </div>
              </div>
            </div>

            {/* Cities grid */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Key Locations</h3>
              <div className="grid grid-cols-2 gap-4">
                {locationData[activeLocation as keyof typeof locationData].cities.map((city, index) => (
                  <div
                    key={city}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="text-white/80 group-hover:text-white transition-colors">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Stats with modern card design */}
          <div className="lg:col-span-5 space-y-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:from-white/15 hover:to-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-6xl md:text-7xl font-bold text-accent mb-3 group-hover:scale-105 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-white text-xl">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
