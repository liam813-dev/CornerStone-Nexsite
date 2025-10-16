import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 transform rotate-45 translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 transform rotate-45 -translate-x-48 translate-y-48" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-secondary font-medium tracking-[0.2em] text-sm uppercase mb-4">Get In Touch</h3>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              Let's Build Something
              <br />
              Amazing Together
            </h2>
            <p className="text-white/80 text-lg mb-12 font-light leading-relaxed">
              Ready to start your next project? Contact us today for a consultation and discover how we can bring your
              vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-white/80 font-light">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-white/80 font-light">info@eliteconstruction.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-white/80 font-light">123 Construction Ave, Building City, BC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 lg:p-10">
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
                />
              </div>
              <div>
                <Input
                  placeholder="Project Type"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary resize-none"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium tracking-wide uppercase text-sm"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
