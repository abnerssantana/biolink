import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface VideoCardProps {
  title: string
  thumbnail: string
  views: string
  className?: string
}

export function VideoCard({ title, thumbnail, views, className }: VideoCardProps) {
  return (
    <Card className={cn("bg-transparent border-none shadow-none hover:bg-zinc-800/50 transition-colors", className)}>
      <CardContent className="p-2">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              width={120}
              height={80}
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-sm font-medium text-white line-clamp-2">{title}</h3>
            <p className="text-xs text-zinc-400">{views}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

