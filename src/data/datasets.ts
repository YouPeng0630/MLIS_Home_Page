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
    name: "HTRC Extracted Features for A Dataset of American Poetry by Poets from Historically Underrepresented Groups (PHUG)",
    description:
      "This dataset contains per-volume and per-poem records derived from the HathiTrust Research Center (HTRC) Extracted Features for a collection of underrepresented poetry, including African American, Asian American, Pacific Islander, Latin American, and Native American poetry.",
    version: "1",
    status: "available",
    license: "CC BY 4.0",
    size: "11.9 MB",
    format: "ZIP",
    downloadUrl: "https://zenodo.org/records/19261037",
    documentationUrl: "https://zenodo.org/records/19261037",
    citation:
      "Choi, Kahyun, Peng, You, & Kang, Gyuri. (2026). HTRC Extracted Features for A Dataset of American Poetry by Poets from Historically Underrepresented Groups (PHUG) (v1). Zenodo. https://doi.org/10.5281/zenodo.19261037",
    tags: [],
    lastUpdated: "2026-03-27",
  },
]
