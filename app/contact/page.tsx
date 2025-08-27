import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact Locksmith Great Neck | Emergency Locksmith Services",
  description:
    "Contact Locksmith Great Neck for emergency locksmith services. Available 24/7 in Great Neck, NY and surrounding areas. Call (516) 200-3656.",
}

export default function ContactPage() {
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
              <span className="text-lg font-semibold">(516) 200-3656</span>
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
            <Link href="/blog/broken-key-extraction" className="text-gray-800 hover:text-red-600 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-red-600 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">Emergency locksmith services available 24/7 in Great Neck, NY</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergency Phone</h3>
                    <p className="text-gray-600">(516) 200-3656</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@locksmithgreatneck.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Great Neck, NY and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">24/7 Emergency Service</p>
                    <p className="text-sm text-gray-500">Always available when you need us</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-red-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Emergency Locksmith Service</h3>
              <p className="mb-6">Locked out? Broken key? Security emergency? We're here to help 24/7.</p>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (516) 200-3656
              </Button>
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
            <span className="text-xl font-bold">(516) 200-3656</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
