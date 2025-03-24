"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoCard } from "@/components/video-card"
import { cn } from "@/lib/utils"

interface Video {
  title: string
  thumbnail: string
  views: string
  url: string
}

interface VideoSliderProps {
  videos: Video[]
  className?: string
}

export function VideoSlider({ videos, className }: VideoSliderProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollAmount = 300
  const maxScroll = sliderRef.current ? sliderRef.current.scrollWidth - sliderRef.current.clientWidth : 0

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return

    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount)

    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    setScrollPosition(newPosition)
  }

  // Update maxScroll on window resize
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const newMaxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        if (scrollPosition > newMaxScroll) {
          setScrollPosition(newMaxScroll)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [scrollPosition])

  return (
    <div className={cn("relative", className)}>
      <div className="flex overflow-x-hidden scroll-smooth" ref={sliderRef}>
        {videos.map((video, index) => (
          <div key={index} className="min-w-[280px] p-2">
            <VideoCard title={video.title} thumbnail={video.thumbnail} views={video.views} className="h-full" />
          </div>
        ))}
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full"
        onClick={() => handleScroll("left")}
        disabled={scrollPosition <= 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full"
        onClick={() => handleScroll("right")}
        disabled={scrollPosition >= maxScroll}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

