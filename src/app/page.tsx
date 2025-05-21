import Image from 'next/image'
import Menu from '@/components/ui/menu'
import Gallery from '@/components/ui/gallery'
import ContactForm from '@/components/ui/contact-form'
import ReceiptLink from '@/components/ui/receipt-link'

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Menu navigation */}
      <Menu />

      {/* Sections grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Home Section */}
        <section className="rounded-xl shadow-xl bg-[#085347]/80 p-8 flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-4 text-green-100">Welcome to Green Roots</h2>
          <p className="text-green-50 mb-6">
            Green Roots is a privacy-first, community-driven platform for events, donations, and creative impact.
          </p>
          <Image
            src="https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Nature community"
            width={800}
            height={400}
            className="rounded-lg shadow-lg border border-green-900"
            unoptimized
          />
        </section>

        {/* Events Section */}
        <section className="rounded-xl shadow-xl bg-[#145a52]/80 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-3 text-green-100">Upcoming Events</h2>
          <ul className="list-disc ml-6 text-green-50">
            <li>Tree Planting - June 15, 2024</li>
            <li>Eco Art Workshop - July 12, 2024</li>
            <li>Community Cleanup - August 2, 2024</li>
          </ul>
          <a
            href="/events"
            className="mt-6 bg-green-700 hover:bg-green-600 text-white font-medium px-5 py-2 rounded transition"
          >
            View All Events
          </a>
        </section>

        {/* About Section */}
        <section className="rounded-xl shadow-xl bg-[#196e5e]/80 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-3 text-green-100">About Us</h2>
          <p className="text-green-50">
            We foster environmental stewardship and creativity through secure, inclusive technology. Our mission is to empower individuals and communities to make a positive impact.
          </p>
        </section>

        {/* Gallery Section */}
        <section className="rounded-xl shadow-xl bg-[#1e7f6d]/80 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-3 text-green-100">Gallery</h2>
          <Gallery />
        </section>

        {/* Contact Section */}
        <section className="rounded-xl shadow-xl bg-[#217f75]/80 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-3 text-green-100">Contact Us</h2>
          <ContactForm />
        </section>

        {/* Donate Section */}
        <section className="rounded-xl shadow-xl bg-[#2da192]/80 p-8 flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-3 text-green-100">Donate</h2>
          <p className="text-green-50 mb-4">
            Support our community projects. Your donations help us grow and sustain impactful programs.
          </p>
          <a
            href="/donate"
            className="bg-green-700 hover:bg-green-600 text-white font-medium px-5 py-2 rounded transition"
          >
            Donate Now
          </a>
          <div className="mt-6 w-full">
            <ReceiptLink />
          </div>
        </section>
      </div>
    </div>
  )
}
