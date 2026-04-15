import React from 'react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';
import Consultourdoctor from '../../components/home/Consultourdoctor';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Medagg Healthcare to book an appointment, get a second opinion, or speak with our care custodians.',
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />

      <section
        className="relative w-full min-h-[420px] flex items-center justify-center pt-24 pb-16"
        style={{
          backgroundImage: "url('/ourservice%20background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#2d2552]/70 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Contact <span className="text-[#ff3576]">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
            Share your details and our care custodian will reach out to help you with the next steps.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h2 className="text-2xl font-extrabold text-[#2d2552] mb-4">Get in touch</h2>

                <div className="space-y-4 text-gray-700">
                  <div>
                    <div className="text-sm font-semibold text-gray-500">Phone</div>
                    <a className="text-base font-semibold text-[#2d2552] hover:text-[#ff3576]" href="tel:+919363656010">
                      +91 93636 56010
                    </a>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-500">Email</div>
                    <a className="text-base font-semibold text-[#2d2552] hover:text-[#ff3576]" href="mailto:info@medagghealthcare.com">
                      info@medagghealthcare.com
                    </a>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-500">WhatsApp</div>
                    <a
                      className="text-base font-semibold text-[#2d2552] hover:text-[#ff3576]"
                      href="https://wa.me/919363656010"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Consultourdoctor />
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
