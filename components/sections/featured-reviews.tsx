"use client"

import { Star, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Button } from "@/components/ui/button"
import { reviewData } from "@/content/data/reviews"
import { companyInfo } from "@/content/data/company"

/**
 * Renders star rating visualization
 */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

/**
 * Formats date string to readable format
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

/**
 * Featured Reviews Section with SEO-optimized structured data
 * Displays HomeStars reviews filtered by service category
 */
export function FeaturedReviews() {
  // Display the first 4 reviews
  const featuredReviews = reviewData.reviews.slice(0, 4)

  // Schema.org structured data for SEO (LocalBusiness + AggregateRating + Reviews)
  // This markup helps Google display star ratings in search results and enhances local SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cornerstonewaterproofing.ca/#organization",
    name: companyInfo.name,
    description:
      "Toronto's trusted waterproofing, underpinning, and foundation repair specialists. Family-run business serving the GTA since 2004 with 20-year warranties.",
    image: "https://cornerstonewaterproofing.ca/CornerStone-logo.svg",
    logo: "https://cornerstonewaterproofing.ca/CornerStone-logo.svg",
    url: "https://cornerstonewaterproofing.ca",
    telephone: companyInfo.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.province,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7315,
      longitude: -79.3466,
    },
    areaServed: {
      "@type": "City",
      name: "Toronto",
      sameAs: "https://en.wikipedia.org/wiki/Toronto",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewData.aggregateRating.ratingValue,
      reviewCount: reviewData.aggregateRating.reviewCount,
      bestRating: reviewData.aggregateRating.bestRating,
      worstRating: reviewData.aggregateRating.worstRating,
    },
    review: reviewData.reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      publisher: {
        "@type": "Organization",
        name: "HomeStars",
      },
    })),
  }

  return (
    <>
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section id="reviews" className="relative overflow-hidden bg-background py-24 lg:py-32 scroll-mt-[6.5rem]">
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="mb-16">
            <ScrollReveal as="div" className="flex items-center gap-4 mb-6" direction="right">
              <div className="h-px w-12 bg-foreground" />
              <h3 className="text-foreground font-medium tracking-[0.2em] text-sm uppercase">Client Reviews</h3>
            </ScrollReveal>

            {/* Header with CTA */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
              {/* Left side - Title and Rating */}
              <div className="flex-1">
                <ScrollReveal
                  as="h2"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight max-w-3xl"
                  direction="up"
                  delay={80}
                >
                  5-Star Waterproofing & Foundation Repair Reviews.
                </ScrollReveal>

                {/* Aggregate Rating Display */}
                <ScrollReveal as="div" className="flex flex-col gap-3" direction="up" delay={120}>
                  <div className="flex flex-wrap items-center gap-3">
                    <StarRating rating={Math.round(reviewData.aggregateRating.ratingValue)} />
                    <span className="text-2xl font-bold text-foreground">{reviewData.aggregateRating.ratingValue}</span>
                    <span className="text-muted-foreground">
                      Based on {reviewData.aggregateRating.reviewCount} verified HomeStars reviews
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    Toronto's top-rated basement waterproofing & foundation repair contractor
                  </p>
                </ScrollReveal>
              </div>

              {/* Right side - Contact CTA (Solid Button) */}
              <ScrollReveal className="lg:mt-8" direction="up" delay={160}>
                <Button
                  asChild
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 whitespace-nowrap group"
                >
                  <a href="#contact">
                    <span className="flex items-center gap-2">
                      CONTACT US
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Button>
              </ScrollReveal>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredReviews.map((review, index) => (
                <ScrollReveal key={review.id} direction="up" delay={index * 80}>
                  <div className="bg-muted/30 p-8 border-l-4 border-secondary h-full flex flex-col">
                    {/* Rating and Date */}
                    <div className="flex items-center justify-between mb-4">
                      <StarRating rating={review.rating} />
                      {review.verified && (
                        <span className="text-xs text-secondary font-medium tracking-wider uppercase">
                          Verified Review
                        </span>
                      )}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6 flex-grow">
                      "{review.text}"
                    </blockquote>

                    {/* Author and Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-muted">
                      <cite className="not-italic font-semibold text-foreground">{review.author}</cite>
                      <time dateTime={review.date} className="text-sm text-muted-foreground">
                        {formatDate(review.date)}
                      </time>
                    </div>
                  </div>
                </ScrollReveal>
            ))}
          </div>

          {/* View All Reviews CTA */}
          <ScrollReveal className="mt-12 text-center" direction="up" delay={100}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 border-foreground hover:bg-foreground hover:text-background bg-transparent"
            >
              <a
                href="https://www.homestars.com/profile/2781895-cornerstone-waterproofing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  VIEW ALL REVIEWS ON HOMESTARS
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
