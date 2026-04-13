'use client';

import Navbar from '../../components/home/Navbar';
import Treatmentnavbar from '../../components/home/Treatmentnavbar';
import TaviHeroSection from '../../components/Treatment_Pages/Tavi_herosection';
import TAVRWhySurgeries from '../../components/Treatment_Pages/TAVR_Why_Surgeries';
import WhyChooseTAVI from '../../components/Treatment_Pages/Why_choose_TAVI';
import HowTaviWorks from '../../components/Treatment_Pages/How_TAVI_work';
import AreYouExperiencingTAVI from '../../components/Treatment_Pages/Are_You_Experiencing_TAVI';
import BookAnAppointmentTAVI from '../../components/Treatment_Pages/Bookanappoinment_TAVI';
import CompareTAVITreatments from '../../components/Treatment_Pages/Compare_TAVI_Treatments';
import WhatHappensInTAVI from '../../components/Treatment_Pages/What_Happens_in_TAVI';
import OurDoctor from '../../components/home/Ourdoctor';
import Consultourdoctor from '../../components/home/Consultourdoctor';
import OurTestimonial from '../../components/home/our_testimonial';
import TavrFaq from '../../components/Treatment_Pages/TAVR_FAQ.jsx';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';

export default function Page() {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <TaviHeroSection />
      <WhyChooseTAVI />
      <HowTaviWorks />
      <AreYouExperiencingTAVI />
      <TAVRWhySurgeries />
      <BookAnAppointmentTAVI />
      <CompareTAVITreatments />
      <WhatHappensInTAVI />
      <OurDoctor />
      <OurTestimonial />
      <Consultourdoctor />
      <TavrFaq />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
