import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Publications } from "@/pages/Publications"
import { Dataset } from "@/pages/Dataset"
import { Team } from "@/pages/Team"

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-24 text-center px-4">
      <p className="text-6xl font-bold text-muted-foreground/30 mb-4">404</p>
      <h1 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="text-primary hover:underline underline-offset-2 text-sm font-medium">
        Return to Home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
