import { Button } from "@/components/ui/button"

const stats = [
  { number: "25+", label: "Years in Operation" },
  { number: "$500M+", label: "Annual Construction Volume" },
  { number: "Top 50", label: "Ranked Construction Firm" },
]

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-foreground" />
              <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">Who We Are</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Focused and Future Ready
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                The flexibility to mobilize the right people to deliver unique solutions, an unwavering focus on
                delivering value to your business bottom line, and the capability to leverage innovation to meet
                emerging challenges and keep you at the fore. This is our company.
              </p>
              <p>
                As a company that is 100 percent employee-owned, we collaborate and innovate to help our partners
                thrive. Our culture of ownership drives your success.
              </p>
              <p>
                Whether you are in the buildings, civil, or industrial market, partnering with us means you're gaining a
                proven, reliable and trusted full-service partner with a mobile network of more than 500 employees,
                experts and seasoned professionals across the region.
              </p>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="mt-8 border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent"
            >
              ABOUT US
            </Button>
          </div>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="border-l-4 border-secondary pl-6">
                <div className="text-5xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
