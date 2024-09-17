import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-primary to-primary-foreground">
      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
          Welcome to Zion Platform
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-white/80">
          Empowering change through storytelling and advocacy
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/advocacy">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Explore Stories
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </Link>
        </div>
      </main>
      <footer className="w-full py-4 text-center text-white/60">
        © {new Date().getFullYear()} Zion Platform. All rights reserved.
      </footer>
    </div>
  )
}