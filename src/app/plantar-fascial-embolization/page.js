'use client';

import PlanterHeroSection from '../../components/Treatment_Pages/Planter_herosection.jsx';
import Navbar from '../../components/home/Navbar';
import Treatmentnavbar from '../../components/home/Treatmentnavbar';
import WhyChoosePlantar from '../../components/Treatment_Pages/Why_choose_plantar.jsx';
import HowPlantarWork from '../../components/Treatment_Pages/How_Plantar_work.jsx';
import AreYouExperiencingPlanter from '../../components/Treatment_Pages/Are_You_Experiencing_Planter.jsx';
import CompareTreatmentPlanter from '../../components/Treatment_Pages/Compare_treatment_Planter.jsx';
import BookappoinmentPlanter from '../../components/Treatment_Pages/Bookappoinment_planter.jsx';
import PlanterWhySurgeries from '../../components/Treatment_Pages/Planter_why_surgeries.jsx';
import OurDoctor from '../../components/home/Ourdoctor';
import Consultourdoctor from '../../components/home/Consultourdoctor';
import OurTestimonial from '../../components/home/our_testimonial.jsx';
import PlantarFaq from '../../components/Treatment_Pages/Planter-faq.jsx';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';

export default function Page() {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <PlanterHeroSection />
      <WhyChoosePlantar />
      <HowPlantarWork />
      <AreYouExperiencingPlanter />
      <PlanterWhySurgeries />
      <BookappoinmentPlanter />
      <CompareTreatmentPlanter />
      <OurDoctor />
      <OurTestimonial />
      <Consultourdoctor />
      <PlantarFaq />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
