import { ExternalLink, FileText } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Publication, PublicationStatus } from "@/data/publications"

const statusConfig: Record<PublicationStatus, { label: string; variant: "success" | "info" | "warning" | "secondary" }> = {
  published: { label: "Published", variant: "success" },
  preprint: { label: "Preprint", variant: "info" },
  "under-review": { label: "Under Review", variant: "warning" },
  "in-preparation": { label: "In Preparation", variant: "secondary" },
}

interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const { label, variant } = statusConfig[publication.status]

  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <Badge variant={variant}>{label}</Badge>
          <span className="text-sm text-muted-foreground font-medium">{publication.year}</span>
        </div>
        <h3 className="text-base font-semibold leading-snug text-foreground mt-2">
          {publication.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {publication.authors.join(", ")}
        </p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <FileText className="h-4 w-4 shrink-0" />
          <span className="italic">{publication.venue}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {publication.abstract}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {publication.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {publication.link && (
          <div className="pt-1">
            <Button variant="outline" size="sm" asChild>
              <a href={publication.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                View Paper
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
