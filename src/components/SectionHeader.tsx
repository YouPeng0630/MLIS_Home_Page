import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, className, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8", centered && "text-center", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-base text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
      <div className={cn("mt-3 h-1 w-12 rounded bg-primary", centered && "mx-auto")} />
    </div>
  )
}
