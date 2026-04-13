'use client';

import Navbar from '../../components/home/Navbar';
import Treatmentnavbar from '../../components/home/Treatmentnavbar';
import Y90_TARE_HEROSECTION from '../../components/Treatment_Pages/Y90_TARE_HEROSECTION';
import WhyChooseY90 from '../../components/Treatment_Pages/Why Choose_Y-90_Radioembolization_TARE';
import HowY90Works from '../../components/Treatment_Pages/How Y-90_Radioembolization _TARE_Works';
import AreYouExperiencingY90Tare from '../../components/Treatment_Pages/Are_You_Experiencing_y90_tare';
import Y90_TARE_MEDAGG from '../../components/Treatment_Pages/y90_TARE_MEDAGG';
import OurDoctor from '../../components/home/Ourdoctor';
import BookAppointmentY90Tare from '../../components/Treatment_Pages/Book_appoinment_y90_tare';
import TARE_Compare from '../../components/Treatment_Pages/TARE_Compare';
import OurTestimonial from '../../components/home/our_testimonial';
import ConsultOurDoctor from '../../components/home/Consultourdoctor';
import TARE_FAQ from '../../components/Treatment_Pages/TARE_FAQ';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';

export default function Page() {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <Y90_TARE_HEROSECTION />
      <WhyChooseY90 />
      <HowY90Works />
      <AreYouExperiencingY90Tare />
      <Y90_TARE_MEDAGG />
      <BookAppointmentY90Tare />
      <TARE_Compare />
      <OurTestimonial />
      <OurDoctor />
      <ConsultOurDoctor />
      <TARE_FAQ />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
