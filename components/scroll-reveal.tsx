"use client"

import { cn } from "@/lib/utils"
import { type ComponentPropsWithoutRef, type ElementType, type ReactNode, useEffect, useRef, useState } from "react"

type Direction = "up" | "down" | "left" | "right" | "scale" | "none"

const directionMap: Record<Direction, { hidden: string; visible: string }> = {
  up: { hidden: "translate-y-10", visible: "translate-y-0" },
  down: { hidden: "-translate-y-10", visible: "translate-y-0" },
  left: { hidden: "translate-x-10", visible: "translate-x-0" },
  right: { hidden: "-translate-x-10", visible: "translate-x-0" },
  scale: { hidden: "scale-95", visible: "scale-100" },
  none: { hidden: "", visible: "" },
}

interface ScrollRevealProps<T extends ElementType = "div"> {
  as?: T
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: Direction
  amount?: number
  once?: boolean
}

export function ScrollReveal<T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  duration = 700,
  direction = "up",
  amount = 0.2,
  once = true,
  ...rest
}: ScrollRevealProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ScrollRevealProps>) {
  const Component = as ?? ("div" as ElementType)
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold: amount },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [amount, once, prefersReducedMotion])

  const { hidden, visible } = directionMap[direction]
  const baseClasses =
    "transition-all ease-out duration-700 will-change-transform will-change-opacity [transform-style:preserve-3d]"
  const animationClasses = prefersReducedMotion
    ? ""
    : cn(isVisible ? "opacity-100" : "opacity-0", isVisible ? visible : hidden)

  return (
    <Component
      ref={ref as any}
      className={cn(baseClasses, className, animationClasses)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: prefersReducedMotion ? undefined : `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}
