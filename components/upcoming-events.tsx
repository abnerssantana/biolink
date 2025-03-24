import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"

interface Event {
  title: string
  date: string
  location: string
  type: "race" | "training" | "workshop"
  url?: string
}

interface UpcomingEventsProps {
  events: Event[]
  className?: string
}

export function UpcomingEvents({ events, className }: UpcomingEventsProps) {
  const getEventTypeColor = (type: Event["type"]) => {
    switch (type) {
      case "race":
        return "bg-red-500/20 text-red-500"
      case "training":
        return "bg-blue-500/20 text-blue-500"
      case "workshop":
        return "bg-purple-500/20 text-purple-500"
      default:
        return "bg-zinc-500/20 text-zinc-500"
    }
  }

  const getEventTypeLabel = (type: Event["type"]) => {
    switch (type) {
      case "race":
        return "Corrida"
      case "training":
        return "Treino"
      case "workshop":
        return "Workshop"
      default:
        return type
    }
  }

  return (
    <Card
      className={cn("bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50", className)}
    >
      <CardHeader>
        <SectionHeader title="Próximos Eventos" />
      </CardHeader>
      <CardContent className="space-y-4">
        {events.length === 0 ? (
          <p className="text-zinc-400 text-center py-4">Nenhum evento programado.</p>
        ) : (
          events.map((event, index) => (
            <div key={index} className="border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{event.title}</h3>
                <Badge className={getEventTypeColor(event.type)}>{getEventTypeLabel(event.type)}</Badge>
              </div>
              <div className="space-y-1 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}

