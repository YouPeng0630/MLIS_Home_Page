import { useState } from "react"
import { BookOpen, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PublicationCard } from "@/components/PublicationCard"
import { publications, type PublicationStatus } from "@/data/publications"
import { cn } from "@/lib/utils"

const statusFilters: { value: PublicationStatus | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "published", label: "Published" },
  { value: "preprint", label: "Preprint" },
  { value: "under-review", label: "Under Review" },
  { value: "in-preparation", label: "In Preparation" },
]

export function Publications() {
  const [activeFilter, setActiveFilter] = useState<PublicationStatus | "all">("all")

  const filtered =
    activeFilter === "all"
      ? publications
      : publications.filter((p) => p.status === activeFilter)

  const counts = {
    all: publications.length,
    published: publications.filter((p) => p.status === "published").length,
    preprint: publications.filter((p) => p.status === "preprint").length,
    "under-review": publications.filter((p) => p.status === "under-review").length,
    "in-preparation": publications.filter((p) => p.status === "in-preparation").length,
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Publications
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Peer-reviewed papers, preprints, and forthcoming work from the to be filled team.
        </p>
      </div>

      {/* Filter bar */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filter by status</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {statusFilters.map((f) => (
            <Button
              key={f.value}
              variant={activeFilter === f.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(f.value)}
              className={cn("h-8 text-xs gap-1.5")}
            >
              {f.label}
              <span
                className={cn(
                  "inline-flex items-center justify-center rounded-full h-4 w-4 text-[10px] font-bold",
                  activeFilter === f.value
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {counts[f.value]}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Publications grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filtered.map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <BookOpen className="h-12 w-12 text-muted-foreground/40 mb-4" />
          <p className="text-muted-foreground">No publications match the selected filter.</p>
        </div>
      )}

      {/* Citation note */}
      <div className="mt-12 p-5 rounded-lg bg-muted/50 border text-sm text-muted-foreground">
        <p className="font-medium text-foreground mb-1">How to cite our work</p>
        <p>
          If you use resources from this project, please cite the relevant paper(s) listed above.
          For general citation of the project, use: Author A. Name et al. (2025–2026).{" "}
          <em>to be filled</em>. Funded by IMLS Grant #to be filled.
        </p>
      </div>
    </div>
  )
}
