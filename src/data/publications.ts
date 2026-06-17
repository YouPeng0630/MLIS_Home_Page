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
    title: "Equitable Metadata for Diverse Voices: Sustainable Computational Poetry Analysis with HathiTrust Extracted Features",
    authors: ["Kahyun Choi", "Peng You", "Gyuri Kang"],
    venue: "International Conference on Dublin Core and Metadata Applications (DCMI)",
    year: 2026,
    status: "published",
    abstract: "",
    link: "/pdfs/DCMI2026_kchoi.pdf",
    tags: ["metadata", "poetry", "digital libraries", "HathiTrust"],
  },
  {
    id: "pub-2",
    title: "Poetry Annotator: A Structure-Preserving Web-based Tool for Online-Offline Annotation of Underrepresented Poetry Collections",
    authors: ["Peng You", "Gyuri Kang", "William Sideri", "Kahyun Choi"],
    venue: "DH2026",
    year: 2026,
    status: "published",
    abstract: "",
    tags: ["annotation", "poetry", "digital humanities", "tools"],
  },
  {
    id: "pub-3",
    title: "An AI-Annotated Large-Scale Dataset of Public-Domain Poems for Digital Humanities Research and Teaching",
    authors: ["Kahyun Choi", "Haining Wang"],
    venue: "DH2026",
    year: 2026,
    status: "published",
    abstract: "",
    tags: ["dataset", "poetry", "AI", "digital humanities"],
  },
  {
    id: "pub-4",
    title: "A Dataset of American Poetry by Poets from Historically Underrepresented Groups in the HathiTrust Digital Library",
    authors: ["Gyuri Kang", "Kahyun Choi"],
    venue: "Journal of Open Humanities Data (JOHD)",
    year: 2026,
    status: "published",
    abstract: "",
    link: "/pdfs/A Dataset of American.pdf",
    tags: ["dataset", "poetry", "diversity", "HathiTrust"],
  },
  {
    id: "pub-5",
    title: "An Analysis of Poet Demographic and Thematic Diversity in a Poetry Collection for Inclusive AI",
    authors: ["Kahyun Choi", "Gyuri Kang"],
    venue: "Proceedings of the 20th iConference",
    year: 2025,
    status: "published",
    abstract: "",
    link: "/pdfs/iconf2024_kchoi.pdf",
    tags: ["diversity", "poetry", "AI", "inclusion"],
  },
  {
    id: "pub-6",
    title: "Word Embedding-Based Text Complexity Analysis",
    authors: ["Kahyun Choi"],
    venue: "Proceedings of the 19th iConference",
    year: 2024,
    status: "published",
    abstract: "",
    link: "/pdfs/iConference2024_Choi.pdf",
    tags: ["text complexity", "word embeddings", "NLP"],
  },
  {
    id: "pub-7",
    title: "Computational Thematic Analysis of Poetry via Bimodal Large Language Models",
    authors: ["Kahyun Choi"],
    venue: "Association for Information Science and Technology (ASIS&T)",
    year: 2023,
    status: "published",
    abstract: "",
    link: "/pdfs/asist2023_kchoi.pdf",
    tags: ["poetry", "LLM", "thematic analysis", "computational analysis"],
  },
]
