'use client';

import Navbar from '../../components/home/Navbar';
import Treatmentnavbar from '../../components/home/Treatmentnavbar';
import Radiofrequency_ablation_herosection from '../../components/Treatment_Pages/Radiofrequency_ablation_herosection';
import Why_choose_rfa from '../../components/Treatment_Pages/Why_choose_rfa';
import How_rfa_work from '../../components/Treatment_Pages/how_rfa_work';
import Are_You_Experiencing_rfa from '../../components/Treatment_Pages/Are_You_Experiencing_rfa';
import RFAWhySurgeries from '../../components/Treatment_Pages/RFA_Why_surgeries';
import Bookanappoinment_rfa from '../../components/Treatment_Pages/Bookanappoinment_rfa';
import Compare_treatment_rfa from '../../components/Treatment_Pages/compare_treatment_rfa';
import What_Happens_in_RFA from '../../components/Treatment_Pages/What_Happens_in_RFA';
import Ourdoctor from '../../components/home/Ourdoctor';
import Consultourdoctor from '../../components/home/Consultourdoctor';
import OurTestimonial from '../../components/home/our_testimonial';
import FAQ_Home from '../../components/home/FAQ_Home';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';

export default function Page() {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <Treatmentnavbar />
      <Radiofrequency_ablation_herosection />
      <Why_choose_rfa />
      <How_rfa_work />
      <Are_You_Experiencing_rfa />
      <RFAWhySurgeries />
      <Bookanappoinment_rfa />
      <Compare_treatment_rfa />
      <What_Happens_in_RFA videoUrl='https://youtube.com/shorts/xniZMciljic?si=d4HK5sNyGO2ndjfU' />
      <Ourdoctor />
      <OurTestimonial />
      <Consultourdoctor />
      <FAQ_Home />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
