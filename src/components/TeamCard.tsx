import { Globe, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { TeamMember } from "@/data/team"

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((n) => n.length > 0)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("")
}

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardContent className="pt-6 flex flex-col items-center text-center gap-3">
        <Avatar className="h-20 w-20">
          {member.photoUrl && <AvatarImage src={member.photoUrl} alt={member.name} />}
          <AvatarFallback className="text-xl">{getInitials(member.name)}</AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <h3 className="font-semibold text-base text-foreground">{member.name}</h3>
          <Badge variant="secondary" className="text-xs font-medium">
            {member.role}
          </Badge>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="font-medium">{member.affiliation}</p>
          {member.department && <p>{member.department}</p>}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed text-left w-full">
          {member.bio}
        </p>

        <div className="flex gap-3 mt-auto pt-1 w-full justify-center flex-wrap">
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              <Globe className="h-3.5 w-3.5" />
              Website
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
