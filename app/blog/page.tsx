import Image from "next/image"
import { Phone, ArrowRight, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Locksmith Blog & Resources | Great Neck, NY | Expert Tips & Guides",
  description:
    "Expert locksmith tips, guides, and resources from Great Neck's trusted locksmith professionals. Learn about lock maintenance, security, and emergency solutions.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/professional-logo.jpeg"
                alt="Your Locksmith Great Neck - 24/7 Emergency Locksmith Services in Great Neck, NY"
                width={250}
                height={100}
                className="h-16 w-auto"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="hover:text-yellow-300 transition-colors font-medium text-white">
                Home
              </a>
              <a href="/automotive" className="hover:text-yellow-300 transition-colors font-medium text-white">
                Automotive
              </a>
              <a href="/residential" className="hover:text-yellow-300 transition-colors font-medium text-white">
                Residential
              </a>
              <a href="/commercial" className="hover:text-yellow-300 transition-colors font-medium text-white">
                Commercial
              </a>
              <a href="/emergency-locksmith" className="hover:text-yellow-300 transition-colors font-medium text-white">
                Emergency
              </a>
              <a
                href="/blog"
                className="hover:text-yellow-300 transition-colors font-medium text-yellow-300 border-b-2 border-yellow-300"
              >
                Blog
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">24/7 Emergency</span>
              </div>
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                <a href="tel:+15167744882">
                  <Phone className="h-4 w-4 mr-2" />
                  (516) 774-4882
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-black mb-4 text-lg px-4 py-2">📚 EXPERT LOCKSMITH RESOURCES 📚</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Locksmith Blog & Resources</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert tips, guides, and professional advice from Great Neck's trusted locksmith professionals
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl py-4">
              <a href="tel:+15167744882">
                <Phone className="h-6 w-6 mr-2" />
                Need Help Now? (516) 774-4882
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Locksmith Guides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional insights and step-by-step guides to help you understand locksmith services and security
              solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Featured Blog Post */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-red-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="relative flex-shrink-0">
                    <Image
                      src="/professional-locksmith-extracting-a-broken-key-fro.png"
                      alt="Professional locksmith extracting a broken key from a lock in Great Neck, NY"
                      width={200}
                      height={150}
                      className="rounded-lg object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-red-600 text-white">Featured</Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="outline" className="text-red-600 border-red-600">
                        Emergency Guide
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />5 min read
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        Expert Locksmith
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      How to Safely Extract a Broken Key from Your Lock
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Learn professional techniques for safely removing broken keys from locks without causing damage.
                      Our comprehensive step-by-step guide covers the tools you need, safety precautions, and when to
                      call a professional locksmith.
                    </p>
                    <div className="flex items-center justify-between">
                      <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                        <a href="/blog/broken-key-extraction" className="flex items-center">
                          Read Full Guide
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                      <div className="text-sm text-gray-500">Updated: January 2025</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="opacity-75">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    Coming Soon
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Home Security Assessment Guide</h3>
                  <p className="text-gray-600 text-sm">
                    Learn how to evaluate your home's security and identify potential vulnerabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="opacity-75">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">
                    Coming Soon
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Lockout Prevention Tips</h3>
                  <p className="text-gray-600 text-sm">
                    Simple strategies to avoid getting locked out of your home or vehicle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Locksmith Help?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            While our guides are helpful, some situations require professional expertise. Our emergency locksmith team
            is available 24/7 throughout Great Neck and Nassau County.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-2xl px-12 py-6"
          >
            <a href="tel:+15167744882">
              <Phone className="h-8 w-8 mr-3" />
              CALL NOW: (516) 774-4882
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/professional-logo.jpeg"
                  alt="Your Locksmith Great Neck - Professional locksmith services in Nassau County, NY"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Professional locksmith services in Great Neck, NY and throughout Nassau County. Available 24/7 for all
                your emergency lock and key needs.
              </p>
              <a
                href="tel:+15167744882"
                className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-bold text-lg">(516) 774-4882</span>
              </a>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency Lockout Service</li>
                <li>Residential Locksmith</li>
                <li>Commercial Locksmith</li>
                <li>Vehicle Lockout Service</li>
                <li>Lock Installation & Repair</li>
                <li>Lock Rekeying Service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Locksmith Blog
                  </a>
                </li>
                <li>
                  <a href="/blog/broken-key-extraction" className="hover:text-white transition-colors">
                    Broken Key Guide
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Service Areas
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Your Locksmith Great Neck. All rights reserved. Licensed, Bonded & Insured Locksmith Company
              serving Nassau County, NY.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
