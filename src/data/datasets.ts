export type DatasetStatus = "available" | "coming-soon" | "under-preparation" | "restricted"

export interface Dataset {
  id: string
  name: string
  description: string
  version: string
  status: DatasetStatus
  license: string
  size?: string
  format?: string
  downloadUrl?: string
  documentationUrl?: string
  citation: string
  tags: string[]
  lastUpdated: string
}

export const datasets: Dataset[] = [
  {
    id: "dataset-1",
    name: "Placeholder Dataset: to be filled",
    description:
      "A curated collection of to be filled drawn from to be filled partner institutions across the United States. This dataset supports research on to be filled and includes to be filled with associated metadata and annotations.",
    version: "1.0.0 (planned)",
    status: "under-preparation",
    license: "CC BY 4.0",
    size: "~to be filled GB",
    format: "JSON, CSV, plain text",
    downloadUrl: undefined,
    documentationUrl: undefined,
    citation:
      "Author A. Name, Author B. Name, et al. (2026). Placeholder Dataset: to be filled (Version 1.0.0). to be filled. https://doi.org/10.xxxx/placeholder",
    tags: ["to be filled"],
    lastUpdated: "2026",
  },
  {
    id: "dataset-2",
    name: "Placeholder Dataset: to be filled",
    description:
      "A benchmark evaluation dataset for to be filled comprising to be filled manually annotated examples from to be filled. Designed for evaluating computational methods in library and information science contexts.",
    version: "0.1.0 (draft)",
    status: "coming-soon",
    license: "CC BY-NC 4.0",
    size: "~to be filled MB",
    format: "JSON, TSV",
    downloadUrl: undefined,
    documentationUrl: undefined,
    citation:
      "Author B. Name, Author C. Name, et al. (2026). Placeholder Dataset: to be filled (Version 0.1.0). to be filled. https://doi.org/10.xxxx/placeholder-bench",
    tags: ["to be filled"],
    lastUpdated: "2026",
  },
]
