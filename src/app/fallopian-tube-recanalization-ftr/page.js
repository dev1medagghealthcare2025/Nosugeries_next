import Navbar from '../../components/home/Navbar';
import Treatmentnavbar from '../../components/home/Treatmentnavbar';
import FTE_HeroSection from '../../components/Treatment_Pages/FTE_herosection';
import AreYouExperienceFTE from '../../components/Treatment_Pages/Are_you_experience_fte';
import HOW_FTE_Work from '../../components/Treatment_Pages/HOW_FTE_Work';
import WhatHappenInFTE from '../../components/Treatment_Pages/what_happen_in_fte';
import FTEWhySurgeries from '../../components/Treatment_Pages/fte_why_surgeries';
import WhyChooseFTE from '../../components/Treatment_Pages/why_choose_fte';
import BookApoinmentFTE from '../../components/Treatment_Pages/Bookapoinment_fte';
import CompareTreatmentOptionFTE from '../../components/Treatment_Pages/compare_treatment_option_fte';
import OurDoctor from '../../components/home/Ourdoctor';
import OurTestimonial from '../../components/home/our_testimonial';
import Consultourdoctor from '../../components/home/Consultourdoctor';
import FtrFaq from '../../components/Treatment_Pages/Ftr_faq';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';

export const metadata = {
  title: 'Fallopian Tube Recanalization (FTR) | Non-Surgical Treatment for Blocked Tubes',
  description: 'Restore natural fertility with Fallopian Tube Recanalization — a safe, minimally invasive, scar-free procedure to open blocked fallopian tubes. Expert Interventional Radiology care across India.',
  alternates: {
    canonical: 'https://nosurgeries.in/fallopian-tube-recanalization-ftr',
  },
  openGraph: {
    title: 'Fallopian Tube Recanalization (FTR) | Non-Surgical Treatment for Blocked Tubes',
    description: 'Restore natural fertility with Fallopian Tube Recanalization — a safe, minimally invasive, scar-free procedure to open blocked fallopian tubes.',
    url: 'https://nosurgeries.in/fallopian-tube-recanalization-ftr',
    siteName: 'NoSurgeries',
    type: 'website',
  },
};

export default function FallopianTubeRecanalizationPage() {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <FTE_HeroSection />
      <AreYouExperienceFTE />
      <HOW_FTE_Work />
      <WhatHappenInFTE />
      <FTEWhySurgeries />
      <WhyChooseFTE />
      <BookApoinmentFTE />
      <CompareTreatmentOptionFTE />
      <OurDoctor />
      <OurTestimonial />
      <Consultourdoctor />
      <FtrFaq />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
