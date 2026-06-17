import { BookOpen, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/SectionHeader"

export function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About the Project
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Unbiased AI for Poetry Analysis is an IMLS Early Career Research Development project
          developing open-source AI tools to improve the discovery and accessibility of
          underrepresented poetry in digital libraries.
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
                Dr. Kahyun Choi of the University of Illinois Urbana-Champaign leads this project
                to develop an open-source AI framework for digital libraries to explore, curate, and
                analyze large collections of digitized poetry texts.
              </p>
              <p>
                The project team will identify potentially underrepresented poetry groups; build
                labeled poetry datasets based on theme and emotion categories; develop AI models for
                understanding poetry; and incorporate user evaluation and feedback to improve the AI
                model's performance, fairness, and reduce bias.
              </p>
              <p>
                Project results will be published as a toolkit to help librarians adopt ethical AI
                practices in their collections. Public users will also be able to explore massive
                digital poetry collections using richer metadata tags such as theme and emotion,
                increasing exposure to underrepresented voices in digital libraries.
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
                <p className="font-medium text-foreground">Institute of Museum and Library Services (IMLS)</p>
                <p>Log Number: RE-252382-OLS-22</p>
                <p>Early Career Research Development</p>
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
                <p>Open-Source AI Toolkit Development</p>
                <p>Poetry Dataset Construction</p>
                <p>Human-AI Collaborative Annotation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
