import { SectionHeader } from "@/components/SectionHeader"
import { DatasetCard } from "@/components/DatasetCard"
import { datasets } from "@/data/datasets"

export function Dataset() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Dataset
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Open datasets produced by the Unbiased AI for Poetry project for research on underrepresented poetry collections.
        </p>
      </div>

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

    </div>
  )
}
