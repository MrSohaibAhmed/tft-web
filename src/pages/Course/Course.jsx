import React from "react";
import CourseDeatilHeader from "../../components/CouseDetailHeader/CourseDeatilHeader";
import WhySection from "../../components/WhySection";
import ProfessionalCertificateSec from "../../components/ProfessionalCertificateSec";
import FrequentQuesSec from "../../components/FrequentQuesSec";
import About from "../../components/About/About";
import Certificate from "../../components/Certificate";

function Course() {
  return (
    <>
      <CourseDeatilHeader />
      <About />
      <Certificate />
      <ProfessionalCertificateSec />
      <WhySection />

      <FrequentQuesSec />
    </>
  );
}

export default Course;
