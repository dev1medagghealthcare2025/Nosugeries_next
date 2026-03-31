import React from 'react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';
import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about Medagg Healthcare and our mission to provide non-surgical Interventional Radiology treatments across India.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center pt-24 pb-16"
        style={{
          backgroundImage: 'url(\'/ourservice%20background.jpg\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-[#2d2552]/70 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            About <span className="text-[#ff3576]">Medagg Healthcare</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
            We are dedicated to revolutionizing patient care by prioritizing non-surgical, minimally invasive treatments. Our goal is to make advanced Interventional Radiology accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#ff3576]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2d2552] mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide patients with safe, effective, and surgery-free treatment alternatives, guiding them through every step of their healthcare journey with compassion and transparency.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#2d2552]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2d2552] mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading elective healthcare platform in India for Interventional Radiology, recognized for clinical excellence and patient-first care custodianship.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#2d2552] to-[#ff3576] rounded-full opacity-10 absolute -top-8 -right-8 w-64 h-64 blur-2xl"></div>
              <img src="/happypaients-removebg.png" alt="Happy Patients" className="relative z-10 w-full h-auto object-contain rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2552] mb-4">
            How We Are <span className="text-[#ff3576]">Different</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            We don't just connect you to hospitals; we stand by you as your Care Custodians from consultation to complete recovery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Surgery-Free Solutions',
                desc: 'Specializing exclusively in minimally invasive procedures that require no cuts, no stitches, and minimal downtime.',
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
              },
              {
                title: 'Personal Care Custodians',
                desc: 'Your dedicated healthcare companion will assist with hospital booking, insurance paperwork, and post-treatment follow-ups.',
                icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
              },
              {
                title: 'Transparent Pricing',
                desc: 'We operate with complete honesty. You get clear upfront cost estimates with absolutely zero hidden fees or retainer charges.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#ff3576]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#2d2552] mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2d2552] py-20 border-b-8 border-[#ff3576]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience Better Healthcare?</h2>
          <p className="text-gray-300 text-lg mb-10">
            Speak directly with our Care Custodians to get a second opinion or book an appointment with India's top Interventional Radiologists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact-us" className="bg-[#ff3576] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl">
              Book Appointment
            </Link>
            <a href="tel:+919363656010" className="bg-white text-[#2d2552] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z" />
              </svg>
              +91 93636 56010
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
