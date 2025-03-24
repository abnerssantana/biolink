import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface SocialCardProps {
  platform: string
  username: string
  description: string
  buttonText: string
  buttonUrl: string
  color: string
  icon: string
  className?: string
}

export function SocialCard({
  platform,
  username,
  description,
  buttonText,
  buttonUrl,
  color,
  icon,
  className,
}: SocialCardProps) {
  return (
    <Card className={cn("text-white border-none overflow-hidden", color, className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <Image src={icon || "/placeholder.svg"} alt={platform} width={40} height={40} className="mb-2" />
            <h3 className="text-xl font-bold capitalize">{platform}</h3>
          </div>
          <Button variant="outline" size="sm" className="bg-orange-600 hover:bg-orange-700 border-none text-white">
            {buttonText} {username}
          </Button>
        </div>
        <p className="text-sm text-zinc-200">{description}</p>
      </CardContent>
    </Card>
  )
}

