import Navbar from '../components/home/Navbar';
import Treatmentnavbar from '../components/home/Treatmentnavbar';
import HeroSection from '../components/home/HeroSection';
import RunningCity from '../components/home/running_city';
import ServicesSection from '../components/home/ourservice';
import OurServiceSection from '../components/home/ServicesSection';
import Drmedagg from '../components/home/Drmedagg';
import PatientJourney from '../components/home/Paientsjurney';
import BookAnAppoinment from '../components/home/BookAnAppoinment';
import WhyMedagg from '../components/home/whymedagg';
import OurDoctor from '../components/home/Ourdoctor';
import OurTestimonial from '../components/home/our_testimonial';
import Consultourdoctor from '../components/home/Consultourdoctor';
import FAQ_Home from '../components/home/FAQ_Home';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/internal_components/FloatingWhatsApp';

export const metadata = {
  title: 'Home - United towards a healthy tomorrow.',
  description: 'NoSurgeries (MedAgg) - Non-surgical treatments and consultations. Expert Interventional Radiology care across India.',
  alternates: {
    canonical: 'https://nosurgeries.in/',
  },
  openGraph: {
    title: 'Home - United towards a healthy tomorrow.',
    description: 'NoSurgeries (MedAgg) - Non-surgical treatments and consultations. Expert Interventional Radiology care across India.',
    url: 'https://nosurgeries.in/',
    siteName: 'NoSurgeries',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <HeroSection />
      <RunningCity />
      <OurServiceSection />
      <ServicesSection />
      <Drmedagg />
      <PatientJourney />
      <BookAnAppoinment />
      <WhyMedagg />
      <OurDoctor />
      <OurTestimonial />
      <Consultourdoctor />
      <FAQ_Home />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
