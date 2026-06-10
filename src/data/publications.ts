export type PublicationStatus = "published" | "preprint" | "in-preparation" | "under-review"

export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  status: PublicationStatus
  abstract: string
  link?: string
  doi?: string
  tags: string[]
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "Placeholder: A Large-Scale Dataset for to be filled in Library and Information Science",
    authors: ["to be filled", "to be filled", "to be filled"],
    venue: "Journal of the Association for Information Science and Technology (JASIST)",
    year: 2025,
    status: "published",
    abstract:
      "This paper presents a comprehensive dataset for studying to be filled across diverse library collections. We describe the data collection methodology, annotation procedures, and baseline experiments demonstrating the utility of the resource for downstream research tasks.",
    link: "https://example.com/paper1",
    doi: "10.xxxx/placeholder.2025.001",
    tags: ["to be filled"],
  },
  {
    id: "pub-2",
    title: "Placeholder: Computational Methods for to be filled Analysis in Cultural Heritage Collections",
    authors: ["to be filled", "to be filled", "to be filled", "to be filled"],
    venue: "ACM/IEEE Joint Conference on Digital Libraries (JCDL)",
    year: 2025,
    status: "preprint",
    abstract:
      "We propose a novel computational pipeline for analyzing to be filled in digitized cultural heritage materials. Our approach combines to be filled with to be filled to achieve state-of-the-art performance on benchmark tasks relevant to library and archival science.",
    link: "https://example.com/preprint2",
    tags: ["to be filled"],
  },
  {
    id: "pub-3",
    title: "Placeholder: Evaluating to be filled Across Institutional Repository Types",
    authors: ["to be filled", "to be filled", "to be filled"],
    venue: "iConference",
    year: 2026,
    status: "under-review",
    abstract:
      "This study systematically evaluates to be filled performance across different institutional repository types, revealing key factors that influence outcomes in academic, public, and special library contexts.",
    tags: ["to be filled"],
  },
  {
    id: "pub-4",
    title: "Placeholder: Toward Equitable Access — to be filled and Underrepresented Collections",
    authors: ["to be filled", "to be filled", "to be filled"],
    venue: "TBD",
    year: 2026,
    status: "in-preparation",
    abstract:
      "A forthcoming study examining how to be filled tools and methods perform on collections from underrepresented communities, with implications for equitable access and representation in digital library systems.",
    tags: ["to be filled"],
  },
]
