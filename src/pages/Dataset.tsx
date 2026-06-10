import { Database, Download, BookOpen, Scale, AlertCircle, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeader } from "@/components/SectionHeader"
import { DatasetCard } from "@/components/DatasetCard"
import { datasets } from "@/data/datasets"

export function Dataset() {
  const primaryDataset = datasets[0]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-10">
        <Badge variant="info" className="mb-3">Research Data</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Dataset
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Open datasets produced by the to be filled team for research on to be filled.
        </p>
      </div>

      {/* Under-preparation notice */}
      <Card className="mb-8 border-amber-200 bg-amber-50">
        <CardContent className="pt-5 pb-5">
          <div className="flex gap-3 items-start">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800">Dataset Under Preparation</p>
              <p className="text-sm text-amber-700 mt-1">
                Our primary dataset is currently being prepared and will be released publicly in
                to be filled. If you are interested in early access or collaboration,
                please contact us at{" "}
                <a href="mailto:placeholder@example.edu" className="underline">
                  placeholder@example.edu
                </a>
                .
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dataset cards */}
      <section className="mb-12">
        <SectionHeader
          title="Available Datasets"
          subtitle="Current and upcoming data releases from the project."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {datasets.map((ds) => (
            <DatasetCard key={ds.id} dataset={ds} />
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* Detailed tabs for primary dataset */}
      <section>
        <SectionHeader
          title={`${primaryDataset.name} — Details`}
          subtitle="In-depth information about our primary dataset."
        />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6 flex flex-wrap h-auto gap-1">
            <TabsTrigger value="overview" className="gap-1.5">
              <Info className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="access" className="gap-1.5">
              <Download className="h-4 w-4" />
              Access
            </TabsTrigger>
            <TabsTrigger value="citation" className="gap-1.5">
              <BookOpen className="h-4 w-4" />
              Citation
            </TabsTrigger>
            <TabsTrigger value="license" className="gap-1.5">
              <Scale className="h-4 w-4" />
              License
            </TabsTrigger>
          </TabsList>

          {/* Overview tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    Dataset Description
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    to be filled This dataset contains
                    to be filled collected from to be filled partner institutions between
                    to be filled. It is designed to support research on to be filled.
                  </p>
                  <p>
                    to be filled Materials were collected
                    via to be filled, with to be filled applied to ensure consistency and
                    reliability. Annotations were produced by to be filled following to be filled.
                  </p>
                  <p>
                    to be filled The dataset is intended for
                    to be filled. Users should be aware of to be filled.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Technical Details</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    {[
                      { label: "Version", value: primaryDataset.version },
                      { label: "Size", value: primaryDataset.size ?? "TBD" },
                      { label: "Format", value: primaryDataset.format ?? "TBD" },
                      { label: "License", value: primaryDataset.license },
                      { label: "Last Updated", value: primaryDataset.lastUpdated },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between gap-2">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-medium text-foreground text-right">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-1.5">
                    {primaryDataset.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Access tab */}
          <TabsContent value="access">
            <Card>
              <CardContent className="pt-6 space-y-5">
                <div className="flex gap-3 items-start p-4 bg-muted/50 rounded-lg border">
                  <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Not yet publicly available</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      This dataset is currently under preparation. Access instructions will be
                      posted here upon release.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <h3 className="font-semibold text-foreground">Planned Access Modes</h3>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>
                      <strong>Direct download:</strong> Full dataset available via to be filled.
                    </li>
                    <li>
                      <strong>API access:</strong> to be filled Programmatic access via a REST
                      API or library wrapper.
                    </li>
                    <li>
                      <strong>Restricted subset:</strong> Portions of the data subject to
                      institutional data use agreements may require a separate request process.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-foreground mt-4">Early Access</h3>
                  <p>
                    Researchers interested in early access for collaboration or evaluation purposes
                    may contact the project team at{" "}
                    <a href="mailto:placeholder@example.edu" className="text-primary hover:underline">
                      placeholder@example.edu
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Citation tab */}
          <TabsContent value="citation">
            <Card>
              <CardContent className="pt-6 space-y-5">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Recommended Citation (Plain Text)
                  </h3>
                  <div className="p-4 bg-muted rounded-lg border font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap break-words">
                    {primaryDataset.citation}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    BibTeX
                  </h3>
                  <div className="p-4 bg-muted rounded-lg border font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap">
{`@misc{placeholder2026dataset,
  title     = {${primaryDataset.name}},
  author    = {Author A. Name and Author B. Name and others},
  year      = {2026},
  version   = {${primaryDataset.version}},
  publisher = {to be filled},
  doi       = {10.xxxx/placeholder},
  url       = {https://doi.org/10.xxxx/placeholder}
}`}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  If you use this dataset in published work, please also cite the associated paper
                  described on the{" "}
                  <a href="/publications" className="text-primary hover:underline">
                    Publications
                  </a>{" "}
                  page.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* License tab */}
          <TabsContent value="license">
            <Card>
              <CardContent className="pt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div className="flex gap-3 items-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <Scale className="h-5 w-5 text-green-700 shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800">
                      {primaryDataset.license}
                    </p>
                    <p className="text-green-700 text-xs mt-0.5">
                      {primaryDataset.license.includes("NC")
                        ? "Free to use for non-commercial research and educational purposes with attribution."
                        : "Free to use for any purpose with attribution."}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">What you can do:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Share and redistribute the dataset</li>
                    <li>Use the dataset for research and academic purposes</li>
                    <li>Build upon and adapt the dataset with attribution</li>
                    {!primaryDataset.license.includes("NC") && (
                      <li>Use the dataset for commercial purposes</li>
                    )}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide appropriate attribution (cite as described above)</li>
                    <li>Indicate if changes were made</li>
                    {primaryDataset.license.includes("NC") && (
                      <li>Non-commercial use only</li>
                    )}
                  </ul>
                </div>

                <p className="text-xs">
                  For full license text, see{" "}
                  <a
                    href={`https://creativecommons.org/licenses/${primaryDataset.license.toLowerCase().replace("cc ", "").replace(" ", "-")}/4.0/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Creative Commons {primaryDataset.license}
                  </a>
                  . For questions about permitted uses, contact{" "}
                  <a href="mailto:placeholder@example.edu" className="text-primary hover:underline">
                    placeholder@example.edu
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
