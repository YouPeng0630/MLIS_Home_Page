import { Link } from "react-router-dom"
import { ArrowRight, BookOpen, Database, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/SectionHeader"
import { publications } from "@/data/publications"
import { datasets } from "@/data/datasets"
import { teamMembers } from "@/data/team"


export function Home() {
  const recentPublications = publications.slice(0, 3)
  const pi = teamMembers.find((m) => m.role === "Principal Investigator")

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              Unbiased AI for Poetry Analysis
            </h1>
            <p className="mt-4 text-xl font-medium text-muted-foreground">
              Toward Equitable and Diverse Digital Libraries
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              This project develops an open-source AI framework for digital libraries to explore,
              curate, and analyze large collections of digitized poetry. By tackling algorithmic
              biases in AI models trained on imbalanced datasets, we aim to build tools that
              accurately extract high-level metadata — such as theme and emotion — from poems by
              underrepresented voices, in collaboration with digital librarians, the HathiTrust
              Research Center, poetry experts, and NLP researchers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/dataset">
                  <Database className="h-4 w-4" />
                  Explore Dataset
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/publications">
                  <BookOpen className="h-4 w-4" />
                  Publications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <SectionHeader
              title="Recent Publications"
              subtitle="Latest research outputs from the project."
              className="mb-0"
            />
            <Button variant="outline" asChild>
              <Link to="/publications">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {recentPublications.map((pub) => (
              <Card key={pub.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        pub.status === "published"
                          ? "success"
                          : pub.status === "preprint"
                          ? "info"
                          : pub.status === "under-review"
                          ? "warning"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {pub.status === "published"
                        ? "Published"
                        : pub.status === "preprint"
                        ? "Preprint"
                        : pub.status === "under-review"
                        ? "Under Review"
                        : "In Preparation"}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{pub.year}</span>
                  </div>
                  <CardTitle className="text-sm leading-snug mt-1">{pub.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground italic">{pub.venue}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dataset & Team Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Dataset preview */}
            <div>
              <SectionHeader
                title="Dataset"
                subtitle="Open, reusable research data for the community."
              />
              <Card className="border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <Badge variant={datasets[0].status === "available" ? "success" : "secondary"}>
                      {datasets[0].status === "available" ? "Available" : "Under Preparation"}
                    </Badge>
                  </div>
                  <CardTitle className="text-base mt-2">{datasets[0].name}</CardTitle>
                  <CardDescription>{datasets[0].description.slice(0, 150)}…</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link to="/dataset">
                      Dataset Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Team preview */}
            <div>
              <SectionHeader
                title="Team"
                subtitle="Researchers and collaborators driving this project."
              />
              <Card className="border hover:shadow-md transition-shadow">
                <CardHeader>
                  {pi && (
                    <>
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{pi.role}</span>
                      </div>
                      <CardTitle className="text-base">{pi.name}</CardTitle>
                      <CardDescription>{pi.affiliation}</CardDescription>
                    </>
                  )}
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link to="/team">
                      Meet the Team
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
