'use client';

import Navbar from '../../components/home/Navbar';
import Treatmentnavbar from '../../components/home/Treatmentnavbar';
import BreastNoduleHerosection from '../../components/Treatment_Pages/breast_nodule_third_herosection';
import WhyChooseBreastNoduleRFA from '../../components/Treatment_Pages/why_choose_breast_nodule_rfa';
import HowBreastNoduleRFAWorks from '../../components/Treatment_Pages/How_Breast_Nodule_rfawork';
import AreYouExperiencingBreastNoduleRFA from '../../components/Treatment_Pages/Are_You_Experiencing_breast_nodule_rfa';
import BookAnAppointmentBreastNoduleRFA from '../../components/Treatment_Pages/Bookanappoinment_breastnodule_rfa';
import CompareTreatmentBnRFA from '../../components/Treatment_Pages/compare_treatment_bn_rfa';
import WhatHappensBnRFA from '../../components/Treatment_Pages/what_happen_bn_rfs';
import Ourdoctor from '../../components/home/Ourdoctor';
import Our_testimonial from '../../components/home/our_testimonial';
import Consultourdoctor from '../../components/home/Consultourdoctor';
import BreastNoduleFaq from '../../components/Treatment_Pages/breast_nodule_faq';
import BreastNoduleWhySurgeries from '../../components/Treatment_Pages/Breast_Nodule_Why_Surgeries';
import Footer from '../../components/layout/Footer';
import FloatingWhatsApp from '../../components/internal_components/FloatingWhatsApp';

export default function Page() {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      <Treatmentnavbar />
      <BreastNoduleHerosection />
      <WhyChooseBreastNoduleRFA />
      <HowBreastNoduleRFAWorks />
      <AreYouExperiencingBreastNoduleRFA />
      <BreastNoduleWhySurgeries />
      <BookAnAppointmentBreastNoduleRFA />
      <CompareTreatmentBnRFA />
      <WhatHappensBnRFA />
      <Ourdoctor />
      <Our_testimonial />
      <Consultourdoctor />
      <BreastNoduleFaq />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
