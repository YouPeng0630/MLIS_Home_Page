import { Download, BookOpen, Clock } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Dataset, DatasetStatus } from "@/data/datasets"

const statusConfig: Record<DatasetStatus, { label: string; variant: "success" | "warning" | "secondary" | "destructive" }> = {
  available: { label: "Available", variant: "success" },
  "coming-soon": { label: "Coming Soon", variant: "warning" },
  "under-preparation": { label: "Under Preparation", variant: "secondary" },
  restricted: { label: "Restricted Access", variant: "destructive" },
}

interface DatasetCardProps {
  dataset: Dataset
}

export function DatasetCard({ dataset }: DatasetCardProps) {
  const { label, variant } = statusConfig[dataset.status]

  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant={variant}>{label}</Badge>
        </div>
        <h3 className="text-base font-semibold leading-snug text-foreground mt-2">
          {dataset.name}
        </h3>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {dataset.description}
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          {dataset.size && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Download className="h-3.5 w-3.5 shrink-0" />
              <span>{dataset.size}</span>
            </div>
          )}
          {dataset.format && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5 shrink-0" />
              <span>{dataset.format}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>Updated {dataset.lastUpdated}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {dataset.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-1 flex-wrap">
          {dataset.downloadUrl ? (
            <Button size="sm" asChild>
              <a href={dataset.downloadUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-3.5 w-3.5" />
                Download
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="secondary" disabled>
              <Download className="h-3.5 w-3.5" />
              {dataset.status === "coming-soon" ? "Coming Soon" : "Not Yet Available"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
