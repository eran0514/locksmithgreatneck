import Image from "next/image"
import { Phone, Clock, Shield, Award, MapPin, Star, Users, CircleCheckBig, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function LocksmithHomePage() {
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
              <a href="/blog" className="hover:text-yellow-300 transition-colors font-medium text-white">
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
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden p-2 rounded-md hover:bg-red-700 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-black mb-4 text-lg px-4 py-2">🚨 EMERGENCY LOCKSMITH SERVICE 🚨</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">#1 Emergency Locksmith in Great Neck, NY</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Locked Out? Need Lock Repair? We're Here 24/7! Fast, Reliable, Professional Locksmith Services in Great Neck
            & Nassau County
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl py-4">
              <a href="tel:+15167744882">
                <Phone className="h-6 w-6 mr-2" />
                CALL NOW: (516) 774-4882
              </a>
            </Button>
            <div className="flex items-center space-x-2 text-yellow-300">
              <Clock className="h-6 w-6" />
              <span className="text-lg font-semibold">Available 24/7 • 15-30 Min Response</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-8 w-8 text-yellow-400" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-8 w-8 text-yellow-400" />
              <span className="font-semibold">5-Star Rated Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-8 w-8 text-yellow-400" />
              <span className="font-semibold">1000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Lockout Emergency to Pure Relief</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform your most stressful moments into stories of relief and gratitude. This is the real
              customer experience with Your Locksmith Great Neck.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="relative">
              <Image
                src="/locked-out-frustration.png"
                alt="Emergency home lockout situation - woman locked out of house in Great Neck, NY needing locksmith service"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-red-600 text-white p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    1
                  </span>
                  <h3 className="text-xl font-bold">The Emergency</h3>
                </div>
                <p className="text-sm">Locked out in the rain with groceries - every minute feels like forever!</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/locksmith-relief.png"
                alt="Professional locksmith providing emergency lockout service to customer in Great Neck, NY"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-blue-600 text-white p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    2
                  </span>
                  <h3 className="text-xl font-bold">Professional Help</h3>
                </div>
                <p className="text-sm">Our certified locksmith arrives quickly - relief begins immediately!</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/customer-gratitude.png"
                alt="Happy customer thanking locksmith after successful home lockout service in Great Neck, NY"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-green-600 text-white p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    3
                  </span>
                  <h3 className="text-xl font-bold">Pure Relief!</h3>
                </div>
                <p className="text-sm">Back inside safely - another happy customer in Great Neck!</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">This Could Be Your Story in Just 15-30 Minutes!</h3>
            <p className="text-lg text-gray-600 mb-6">
              Don't let a lockout emergency ruin your day. Call now and experience the relief our customers feel every
              day.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="tel:+15167744882">
                <Phone className="h-5 w-5 mr-2" />
                Start Your Relief Story: (516) 774-4882
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Locksmith Expertise You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified technicians use professional tools and techniques to handle any lockout situation. See our
              experts in action serving Great Neck and Nassau County.
            </p>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-16">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                Available around the clock, including weekends and holidays. Fast 15-30 minute response time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed, bonded, and insured locksmith company. Your property and security are protected.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Certified locksmiths with years of experience. We handle all lock types and security systems.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Great Neck</h3>
              <p className="text-gray-600">
                Based in Great Neck, we know the area well and provide fast local service throughout Nassau County.
              </p>
            </div>
          </div>

          {/* Automotive Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">Automotive Lockout Specialists</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CircleCheckBig className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Professional car lockout service only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheckBig className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">No damage to your vehicle guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheckBig className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">We do NOT make or replace keys</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:+15167744882">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Car Lockout
                </a>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/automotive-locksmith-work.jpeg"
                alt="Professional automotive locksmith using specialized tools for car lockout service in Nassau County, NY"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-blue-600 text-white p-4 rounded-lg">
                <h4 className="text-lg font-bold mb-1">🔧 Professional Tools</h4>
                <p className="text-sm">Specialized automotive lockout equipment for safe, damage-free entry</p>
              </div>
            </div>
          </div>

          {/* Residential Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Residential Lock Experts</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CircleCheckBig className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">Professional entry and bypass techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheckBig className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">No damage to doors or lock mechanisms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheckBig className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-lg">All types of residential locks and deadbolts</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:+15167744882">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Home Lockout
                </a>
              </Button>
            </div>
            <div className="relative lg:order-1">
              <Image
                src="/residential-locksmith-work.jpeg"
                alt="Expert residential locksmith performing lock repair service on home door in Great Neck, NY"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-green-600 text-white p-4 rounded-lg">
                <h4 className="text-lg font-bold mb-1">🏠 Home Lockouts</h4>
                <p className="text-sm">Expert residential lock services with professional equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas-served" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Locksmith Service Areas in Nassau County
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide fast, reliable locksmith services throughout Great Neck and surrounding Nassau County
              communities. No matter where you are, we'll be there quickly to help with your lock and key emergency.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Great Neck",
              "Great Neck Plaza",
              "Great Neck Estates",
              "Kings Point",
              "Manhasset",
              "Port Washington",
              "Roslyn",
              "Roslyn Heights",
              "New Hyde Park",
              "Garden City",
              "Mineola",
              "Westbury",
              "Hicksville",
              "Syosset",
              "Jericho",
              "Plainview",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">{area}</h3>
                  <p className="text-sm text-gray-600">Emergency Locksmith</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Don't see your area listed? We serve all of Nassau County! Call us to confirm service in your location.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <a href="tel:+15167744882">
                <Phone className="h-5 w-5 mr-2" />
                Call (516) 774-4882 Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our locksmith services in Great Neck and Nassau County.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you respond to emergency lockouts in Great Neck?",
                answer:
                  "We provide fast 15-30 minute response times for emergency lockouts throughout Great Neck, Manhasset, and Nassau County. Our mobile locksmith units are strategically positioned to reach you quickly 24/7.",
              },
              {
                question: "Do you provide automotive locksmith services?",
                answer:
                  "We specialize in automotive lockout services only - getting you back into your locked vehicle quickly and safely. We do NOT provide key replacement, key duplication, transponder programming, or key fob services. For lockouts, we're your experts!",
              },
              {
                question: "Are you available 24/7 for locksmith emergencies?",
                answer:
                  "Yes, we offer 24/7 emergency locksmith services every day of the year, including weekends and holidays. Whether you're locked out of your car, home, or business, we're available around the clock.",
              },
              {
                question: "Will you damage my lock or door during service?",
                answer:
                  "Our certified locksmiths use professional, non-destructive techniques to gain entry without damaging your locks, doors, or vehicle. We guarantee damage-free service for all lockout situations.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Have more questions? Call us now for immediate assistance!</p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="tel:+15167744882">
                <Phone className="h-5 w-5 mr-2" />
                Call (516) 774-4882 Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Helpful Locksmith Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert guides and tips from our professional locksmiths to help you handle lock and key situations.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-red-100 rounded-lg p-4 flex-shrink-0">
                    <CircleCheckBig className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      How to Safely Extract a Broken Key from Your Lock
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn professional techniques for safely removing broken keys from locks without causing damage.
                      Our step-by-step guide covers the tools you need and when to call a professional locksmith.
                    </p>
                    <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                      <a href="/blog/broken-key-extraction">Read Full Guide</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Need immediate help with a broken key? Don't risk damaging your lock - call our experts!
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <a href="tel:+15167744882">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Help: (516) 774-4882
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🚨 LOCKED OUT? DON'T PANIC! 🚨</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Our emergency locksmith team is standing by 24/7 to help you get back inside quickly and safely. Fast
            response times throughout Great Neck and Nassau County!
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
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
            <div className="text-center">
              <p className="text-yellow-300 font-semibold text-lg">Average Response Time:</p>
              <p className="text-2xl font-bold">15-30 Minutes</p>
            </div>
          </div>
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
              <h4 className="text-lg font-bold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Great Neck, NY</li>
                <li>Manhasset, NY</li>
                <li>Port Washington, NY</li>
                <li>Roslyn, NY</li>
                <li>New Hyde Park, NY</li>
                <li>Garden City, NY</li>
                <li>All of Nassau County</li>
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
