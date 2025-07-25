import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="text-center">
          {/* Brand */}
          <Link href="#home" className="text-2xl font-bold text-foreground">
            Sahil<span className="text-primary">.</span>
          </Link>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            AI-powered web developer creating modern, responsive websites using cutting-edge tools like V0, Framer, and
            more. From concept to conversion, I build digital experiences that work.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Sahil Siddiqui. Built with 🤖 AI tools and lots of innovation ⚡
          </p>
        </div>
      </div>
    </footer>
  )
}
