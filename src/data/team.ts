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
    name: "Dr. Kahyun Choi",
    role: "Principal Investigator",
    affiliation: "University of Illinois at Urbana-Champaign",
    department: "School of Information Sciences",
    bio: "",
    website: "https://kahyunchoi.com/",
    email: "kahyun@illinois.edu",
    photoUrl: "/images/team/Kahyun-Choi.jpg",
    orcid: undefined,
  },
  {
    id: "tm-2",
    name: "William Sideri",
    role: "PhD Student",
    affiliation: "University of Illinois at Urbana-Champaign",
    department: "School of Information Sciences",
    bio: "",
    website: "https://www.linkedin.com/in/william-acevedo-sideri-1a5615152/",
    email: "wa2@illinois.edu",
    photoUrl: "/images/team/WillPhoto.jpg",
  },
  {
    id: "tm-3",
    name: "You Peng",
    role: "PhD Student",
    affiliation: "University of Illinois at Urbana-Champaign",
    department: "School of Information Sciences",
    bio: "",
    website: undefined,
    email: "youpeng2@illinois.edu",
    photoUrl: "/images/team/YouPhoto.jpg",
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
