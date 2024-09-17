import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { FlagValues } from '@vercel/flags/react'
import { getFlags } from './getFlags'

export default async function Home({ request }) {
  const flags = await getFlags(request)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Welcome to Zion Platform
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-white/80">
          Empowering change through storytelling and advocacy
        </p>
        {flags.newFeature && (
          <p className="text-xl mb-8 bg-yellow-400 text-blue-700 p-2 rounded">
            This is a new feature!
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/advocacy" passHref>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
              Explore Stories
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </Link>
        </div>
      </main>
      <footer className="w-full py-4 text-center text-white/60">
        © {new Date().getFullYear()} Zion Platform. All rights reserved.
      </footer>
      <FlagValues values={{ newFeature: flags.newFeature }} />
    </div>
  )
}