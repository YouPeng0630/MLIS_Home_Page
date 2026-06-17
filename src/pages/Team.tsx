import { Separator } from "@/components/ui/separator"
import { SectionHeader } from "@/components/SectionHeader"
import { TeamCard } from "@/components/TeamCard"
import { teamMembers, type TeamRole } from "@/data/team"

const roleOrder: TeamRole[] = [
  "Principal Investigator",
  "PhD Student",
  "Master's Student",
  "Research Staff",
  "Advisory Board",
]

function groupByRole(members: typeof teamMembers) {
  const groups: Partial<Record<TeamRole, typeof teamMembers>> = {}
  for (const member of members) {
    if (!groups[member.role]) groups[member.role] = []
    groups[member.role]!.push(member)
  }
  return groups
}

export function Team() {
  const groups = groupByRole(teamMembers)
  const orderedRoles = roleOrder.filter((role) => groups[role] && groups[role]!.length > 0)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Project Team
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Meet the researchers, collaborators, and advisors behind to be filled.
        </p>
      </div>

      {/* Grouped by role */}
      <div className="space-y-12">
        {orderedRoles.map((role, idx) => {
          const members = groups[role]!
          return (
            <div key={role}>
              {idx > 0 && <Separator className="mb-10" />}
              <SectionHeader title={role} subtitle={`${members.length} ${members.length === 1 ? "person" : "people"}`} />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Join / Contact */}
      <div className="mt-14 p-6 rounded-xl border bg-muted/30 text-center">
        <h3 className="font-semibold text-foreground mb-2">Interested in Collaborating?</h3>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-4">
          We welcome inquiries from researchers, librarians, and institutions interested in
          contributing to or building on this project. Please reach out to the project team.
        </p>
        <a
          href="mailto:placeholder@example.edu"
          className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline underline-offset-2"
        >
          placeholder@example.edu
        </a>
      </div>
    </div>
  )
}
