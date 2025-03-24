import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calculator, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon: "calculator" | "wrench"
  buttonText: string
  buttonUrl: string
  color: string
  className?: string
}

export function FeatureCard({ title, description, icon, buttonText, buttonUrl, color, className }: FeatureCardProps) {
  return (
    <Card className={cn("text-white border-zinc-800/50", color, className)}>
      <CardContent className="p-6">
        <div className="mb-4">
          {icon === "calculator" ? (
            <Calculator className="h-8 w-8 text-green-400" />
          ) : (
            <Wrench className="h-8 w-8 text-blue-400" />
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-zinc-300">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant={icon === "calculator" ? "secondary" : "default"}
          className={cn(
            icon === "calculator" ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700",
            "text-white",
          )}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}

