import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Broken Key Extraction Services in Great Neck, NY | Locksmith Great Neck",
  description:
    "Need broken key extraction in Great Neck, NY? Our expert locksmiths provide fast, reliable service to fix your lock issues. Call now!",
}

export default function BrokenKeyExtractionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/professional-logo.jpeg"
                alt="Locksmith Great Neck Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h1 className="text-xl font-bold">Locksmith Great Neck</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">(516) 774-4882</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-yellow-400 py-3">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-800 hover:text-red-600 font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-gray-800 hover:text-red-600 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-red-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Broken Key Extraction Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional broken key extraction services in Great Neck, NY. Our expert locksmiths safely remove broken
              keys without damaging your locks.
            </p>
          </div>

          {/* Step-by-Step Guide Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Guide to Broken Key Extraction</h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">Step 1: Assess the Situation</h3>
                <p className="text-gray-700 leading-relaxed">
                  A professional locksmith evaluates the broken key and lock type to determine the best approach. This
                  ensures minimal damage and a tailored solution. The process begins with a thorough inspection.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">Step 2: Gather Specialized Tools</h3>
                <p className="text-gray-700 leading-relaxed">
                  Locksmiths use tools like key extractors, pliers, or lubricants for safe removal. Each tool is
                  selected based on the lock's condition and key fragment size. This preparation is key to success.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">Step 3: Extract the Key</h3>
                <p className="text-gray-700 leading-relaxed">
                  The locksmith carefully removes the broken key using precision techniques. This step avoids further
                  damage to the lock mechanism. Patience is critical for a clean extraction.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">Step 4: Test the Lock</h3>
                <p className="text-gray-700 leading-relaxed">
                  After extraction, the lock is tested to ensure it functions properly. Any issues are addressed
                  immediately to restore security. This step confirms the job is complete.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  Step 5: Provide Replacement Keys (if needed)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If the original key is unusable, a new one is cut on-site. This ensures you have immediate access to
                  your property. The locksmith verifies the new key works perfectly.
                </p>
              </div>
            </div>
          </section>

          {/* Image Placeholder */}
          <div className="mb-12 text-center">
            <div className="bg-gray-200 rounded-lg p-12 mb-4">
              <Image
                src="/professional-locksmith-extracting-a-broken-key-fro.png"
                alt="Professional locksmith extracting a broken key from a lock in Great Neck, NY"
                width={600}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-600 italic">
              Professional locksmith extracting a broken key from a lock in Great Neck, NY
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-red-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Need Broken Key Extraction Service?</h3>
            <p className="text-lg mb-6">
              Don't let a broken key ruin your day. Our expert locksmiths in Great Neck are ready to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Link href="/contact">
                  Contact Us for Broken Key Extraction
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-xl font-semibold">(516) 774-4882</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Emergency Locksmith Services</p>
          <p className="text-gray-300 mb-4">Serving Great Neck, NY and surrounding areas</p>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span className="text-xl font-bold">(516) 774-4882</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
