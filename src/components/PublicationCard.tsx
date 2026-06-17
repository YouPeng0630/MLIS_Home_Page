import { FileText } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
        {publication.link && (
          <div className="pt-1">
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              title="View PDF"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-red-500" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1.5H8V15zm0-3h8v1.5H8V12zm0-3h3v1.5H8V9z"/>
              </svg>
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
