import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { FlaskConical, Mail, ExternalLink } from "lucide-react"

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/publications", label: "Publications" },
  { to: "/dataset", label: "Dataset" },
  { to: "/team", label: "Team" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Project Info */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Unbiased AI for Poetry</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              An IMLS-funded research project developing open-source AI tools to improve
              the discovery and accessibility of underrepresented poetry in digital libraries.
            </p>
            <p className="text-xs text-muted-foreground">
              Funded by IMLS Log Number RE-252382-OLS-22
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Institution */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:kahyun@illinois.edu"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  kahyun@illinois.edu
                </a>
              </li>
              <li>
                <a
                  href="https://kahyunchoi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  kahyunchoi.com
                </a>
              </li>
            </ul>
            <div className="pt-1">
              <p className="text-xs text-muted-foreground">School of Information Sciences</p>
              <p className="text-xs text-muted-foreground">University of Illinois Urbana-Champaign</p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kahyun Choi. All rights reserved.</p>
          <p>
            Supported by the{" "}
            <a
              href="https://www.imls.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground underline underline-offset-2"
            >
              Institute of Museum and Library Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
