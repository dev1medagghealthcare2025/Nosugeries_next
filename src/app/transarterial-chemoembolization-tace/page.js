'use client';

import Navbar from '../../components/home/Navbar';
import Treatmentnavbar from '../../components/home/Treatmentnavbar';
import TACE_Herosection from '../../components/Treatment_Pages/TACE_Herosection';
import WhyChooseTACE from '../../components/Treatment_Pages/Why Choose TACE';
import HowTACEWorks from '../../components/Treatment_Pages/How_TACE_Work';
import TACE_are_experience from '../../components/Treatment_Pages/TACE_are_experience';
import TACE_Why_medagg from '../../components/Treatment_Pages/TACE_Why_medagg';
import TACE_Compare from '../../components/Treatment_Pages/TACE_Compare';
import BookAppointmentY90Tare from '../../components/Treatment_Pages/Book_appoinment_y90_tare';
import TACE_FAQ from '../../components/Treatment_Pages/TACE_FAQ';
import OurDoctor from '../../components/home/Ourdoctor';
import OurTestimonial from '../../components/home/our_testimonial';
import Consultourdoctor from '../../components/home/Consultourdoctor';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';

export default function Page() {
  return (
    <>
      <Navbar />
      <Treatmentnavbar />
      <TACE_Herosection />
      <WhyChooseTACE />
      <HowTACEWorks />
      <TACE_are_experience />
      <TACE_Why_medagg />
      <BookAppointmentY90Tare />
      <TACE_Compare />
      <OurDoctor />
      <OurTestimonial />
      <Consultourdoctor />
      <TACE_FAQ />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
