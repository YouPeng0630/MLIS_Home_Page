export type TeamRole =
  | "Principal Investigator"
  | "PhD Student"
  | "Master's Student"
  | "Research Staff"
  | "Advisory Board"

export interface TeamMember {
  id: string
  name: string
  role: TeamRole
  affiliation: string
  department?: string
  bio: string
  website?: string
  email?: string
  photoUrl?: string
  orcid?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Dr. Firstname Lastname",
    role: "Principal Investigator",
    affiliation: "Placeholder University",
    department: "School of Information",
    bio: "Dr. Lastname is an associate professor whose research focuses on to be filled. They have published extensively on to be filled and bring expertise in to be filled to this project.",
    website: "https://example.edu/~flastname",
    email: "flastname@placeholder.edu",
    photoUrl: undefined,
    orcid: "0000-0000-0000-0000",
  },
  {
    id: "tm-5",
    name: "Firstname Lastname",
    role: "PhD Student",
    affiliation: "Placeholder University",
    department: "School of Information",
    bio: "Firstname is a third-year PhD student studying to be filled. Their research interests include to be filled, and they are responsible for to be filled on this project.",
    website: undefined,
    email: "flastname5@placeholder.edu",
    photoUrl: undefined,
  },
  {
    id: "tm-6",
    name: "Firstname Lastname",
    role: "PhD Student",
    affiliation: "Partner University",
    department: "Department of Computer Science",
    bio: "Firstname is a PhD student in computer science with a focus on to be filled. They contribute to be filled to the project's computational pipeline.",
    website: "https://flastname6.github.io",
    email: "flastname6@partner.edu",
    photoUrl: undefined,
  },
  {
    id: "tm-8",
    name: "Firstname Lastname",
    role: "Master's Student",
    affiliation: "Placeholder University",
    department: "School of Information",
    bio: "Firstname is a master's student in to be filled. Their thesis work focuses on to be filled, and they contribute to be filled to the project.",
    website: undefined,
    email: "flastname8@placeholder.edu",
    photoUrl: undefined,
  },
  {
    id: "tm-9",
    name: "Firstname Lastname",
    role: "Master's Student",
    affiliation: "Partner University",
    department: "Department of to be filled",
    bio: "Firstname is a master's student focusing on to be filled. They contribute to be filled to the project and are supervised by to be filled.",
    website: undefined,
    email: "flastname9@partner.edu",
    photoUrl: undefined,
  },
  {
    id: "tm-7",
    name: "Dr. Firstname Lastname",
    role: "Advisory Board",
    affiliation: "Advisory Institution",
    department: "Department of to be filled",
    bio: "Dr. Lastname is an expert in to be filled and provides strategic guidance to the project on to be filled.",
    website: "https://example.org/flastname",
    photoUrl: undefined,
  },
]
