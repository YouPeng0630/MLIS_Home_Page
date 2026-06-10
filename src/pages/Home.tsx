import { Link } from "react-router-dom"
import { ArrowRight, BookOpen, Database, Users, Globe, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/SectionHeader"
import { publications } from "@/data/publications"
import { datasets } from "@/data/datasets"
import { teamMembers } from "@/data/team"

const highlights = [
  {
    icon: Globe,
    title: "National Scope",
    description:
      "Partnering with libraries and cultural heritage institutions across the United States to build a representative, inclusive dataset.",
  },
  {
    icon: Lightbulb,
    title: "Novel Methods",
    description:
      "Developing and evaluating computational approaches tailored to the unique challenges of library and archival collections.",
  },
]

export function Home() {
  const recentPublications = publications.slice(0, 3)
  const pi = teamMembers.find((m) => m.role === "Principal Investigator")

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <Badge variant="info" className="mb-4 text-xs font-medium">
              IMLS-Funded Research Project
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              to be filled
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A placeholder description of this research project. Replace with the actual project
              summary — what you're studying, why it matters, and what you aim to achieve through
              this IMLS-funded initiative.
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
              <Button variant="ghost" size="lg" asChild>
                <Link to="/publications">
                  <BookOpen className="h-4 w-4" />
                  Publications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Project Highlights"
            subtitle="Key features and goals of this research initiative."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className="border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
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
                    <Badge variant="secondary">Under Preparation</Badge>
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
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {teamMembers.length} researchers across {new Set(teamMembers.map((m) => m.affiliation)).size} institutions
                    </span>
                  </div>
                  {pi && (
                    <>
                      <CardTitle className="text-base mt-2">{pi.name}</CardTitle>
                      <CardDescription>
                        {pi.role} · {pi.affiliation}
                      </CardDescription>
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

      {/* Funding acknowledgment */}
      <section className="py-10 bg-blue-50 border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            This project is funded by the{" "}
            <a
              href="https://www.imls.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Institute of Museum and Library Services (IMLS)
            </a>{" "}
            under Grant #to be filled. The views expressed do not necessarily represent the
            views of IMLS or the U.S. Government.
          </p>
        </div>
      </section>
    </div>
  )
}
