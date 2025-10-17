"use client"

/**
 * Blueprint-style animated grid background
 * Sparse construction/architectural lines with intersection highlights
 * Designed for intro section - subtle, professional animation
 */
export function BlueprintGrid() {
  // Define sparse vertical lines (4-5 lines across viewport)
  const verticalLines = [
    { x: "15%", delay: "0s", color: "muted" },
    { x: "35%", delay: "2s", color: "border" },
    { x: "58%", delay: "4s", color: "accent" },
    { x: "78%", delay: "1s", color: "muted" },
    { x: "92%", delay: "3s", color: "border" },
  ]

  // Define sparse horizontal lines (4-5 lines across viewport)
  const horizontalLines = [
    { y: "12%", delay: "1s", color: "border" },
    { y: "32%", delay: "3s", color: "muted" },
    { y: "55%", delay: "0s", color: "muted" },
    { y: "75%", delay: "4s", color: "accent" },
    { y: "88%", delay: "2s", color: "border" },
  ]

  // Calculate intersections for pulsing dots (select a few key intersections)
  const intersections = [
    { x: "35%", y: "32%", delay: "0s" },
    { x: "58%", y: "55%", delay: "2s" },
    { x: "78%", y: "75%", delay: "4s" },
    { x: "15%", y: "12%", delay: "1s" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Glow filter for intersection dots */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Vertical lines */}
        {verticalLines.map((line, index) => (
          <line
            key={`v-${index}`}
            x1={line.x}
            y1="0%"
            x2={line.x}
            y2="100%"
            className={`blueprint-line blueprint-line-${line.color}`}
            strokeWidth="1"
            style={{ animationDelay: line.delay }}
          />
        ))}

        {/* Horizontal lines */}
        {horizontalLines.map((line, index) => (
          <line
            key={`h-${index}`}
            x1="0%"
            y1={line.y}
            x2="100%"
            y2={line.y}
            className={`blueprint-line blueprint-line-${line.color}`}
            strokeWidth="1"
            style={{ animationDelay: line.delay }}
          />
        ))}

        {/* Intersection dots with pulse effect */}
        {intersections.map((point, index) => (
          <circle
            key={`i-${index}`}
            cx={point.x}
            cy={point.y}
            r="3"
            className="intersection-dot"
            filter="url(#glow)"
            style={{ animationDelay: point.delay }}
          />
        ))}
      </svg>
    </div>
  )
}
