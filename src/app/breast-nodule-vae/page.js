'use client';

import Navbar from '../../components/home/Navbar';
import Treatmentnavbar from '../../components/home/Treatmentnavbar';
import BreastNoduleVAEHeroSection from '../../components/Treatment_Pages/Breast_Nodule_VAE_herosection';
import WhyChooseVAE from '../../components/Treatment_Pages/Why_choose_vacuum_assisted_excision';
import CompareTreatmentVAE from '../../components/Treatment_Pages/Compare_treatment_VAE';
import WhatHappensInVAE from '../../components/Treatment_Pages/what_happen_in_VAE';
import HowVAEWorks from '../../components/Treatment_Pages/how_VAE_works';
import AreYouExperiencingVAE from '../../components/Treatment_Pages/Are_You_Experiencing_VAE';
import BookAnAppointmentVAE from '../../components/Treatment_Pages/Bookanappoinment_vae';
import Ourdoctor from '../../components/home/Ourdoctor';
import Consultourdoctor from '../../components/home/Consultourdoctor';
import OurTestimonial from '../../components/home/our_testimonial';
import BreastNoduleFaq from '../../components/Treatment_Pages/breast_nodule_faq';
import BreastNoduleWhySurgeries from '../../components/Treatment_Pages/Breast_Nodule_Why_Surgeries';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';

export default function Page() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Treatmentnavbar />
      <BreastNoduleVAEHeroSection />
      <WhyChooseVAE />
      <HowVAEWorks />
      <AreYouExperiencingVAE />
      <BreastNoduleWhySurgeries />
      <BookAnAppointmentVAE />
      <CompareTreatmentVAE />
      <WhatHappensInVAE videoUrl='https://youtube.com/shorts/xniZMciljic?si=d4HK5sNyGO2ndjfU' />
      <Ourdoctor />
      <OurTestimonial />
      <Consultourdoctor />
      <BreastNoduleFaq />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
