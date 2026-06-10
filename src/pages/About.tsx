import { BookOpen, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/SectionHeader"

export function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-12">
        <Badge variant="info" className="mb-3">About the Project</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About to be filled
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          to be filled is an IMLS-funded research initiative investigating to be filled with
          the goal of to be filled. This page provides an overview of the project.
        </p>
      </div>

      {/* Overview */}
      <section>
        <SectionHeader
          title="Project Overview"
          subtitle="What we are studying and why it matters."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardContent className="pt-6 prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                to be filled Libraries and cultural heritage institutions
                hold vast collections of materials that are increasingly being digitized, yet
                computational tools developed for general-purpose text are often poorly suited to
                these collections. This project addresses that gap by to be filled.
              </p>
              <p>
                to be filled Through partnerships with to be filled institutions
                across the country, we are building to be filled that will
                enable researchers, practitioners, and developers to to be filled.
              </p>
              <p>
                to be filled The project is funded by the Institute of
                Museum and Library Services (IMLS) and brings together expertise from to be filled to
                address to be filled.
              </p>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  Funding
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <p className="font-medium text-foreground">Institute of Museum and Library Services</p>
                <p>Grant #to be filled</p>
                <p>Period: to be filled – to be filled</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Project Type
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <p>to be filled</p>
                <p>to be filled</p>
                <p>to be filled</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
