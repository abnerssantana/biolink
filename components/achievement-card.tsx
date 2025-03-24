import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Achievement {
  distance: string
  time: string
}

interface AchievementCardProps {
  title: string
  description: string
  achievements: Achievement[]
  className?: string
}

export function AchievementCard({ title, description, achievements, className }: AchievementCardProps) {
  return (
    <Card className={cn("bg-zinc-900 text-white", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-zinc-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {achievements.map((achievement) => (
            <Badge key={achievement.distance} variant="outline" className="bg-zinc-800 text-zinc-200">
              {achievement.distance} - {achievement.time}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

