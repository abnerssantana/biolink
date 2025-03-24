import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, FileSpreadsheet, FileImage } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/section-header"

interface Resource {
  title: string
  description: string
  url: string
  type: "pdf" | "spreadsheet" | "image" | "other"
  size?: string
}

interface DownloadResourcesProps {
  resources: Resource[]
  className?: string
}

export function DownloadResources({ resources, className }: DownloadResourcesProps) {
  const getResourceIcon = (type: Resource["type"]) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-5 w-5" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-5 w-5" />
      case "image":
        return <FileImage className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  return (
    <Card
      className={cn("bg-zinc-900/80 text-white dark:bg-zinc-800/80 backdrop-blur-sm border-zinc-800/50", className)}
    >
      <CardHeader>
        <SectionHeader title="Recursos para Download" />
      </CardHeader>
      <CardContent className="space-y-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-lg p-4 flex justify-between items-center hover:bg-zinc-800/50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary">{getResourceIcon(resource.type)}</div>
              <div>
                <h3 className="font-medium">{resource.title}</h3>
                <p className="text-sm text-zinc-400">{resource.description}</p>
                {resource.size && <span className="text-xs text-zinc-500">{resource.size}</span>}
              </div>
            </div>
            <Button variant="outline" size="icon" className="border-zinc-700 hover:bg-zinc-800" asChild>
              <a href={resource.url} download target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download {resource.title}</span>
              </a>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

