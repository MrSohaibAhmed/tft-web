import React from "react";
import CourseDeatilHeader from "../../components/CouseDetailHeader/CourseDeatilHeader";
import WhySection from "../../components/WhySection";
import ProfessionalCertificateSec from "../../components/ProfessionalCertificateSec";
import FrequentQuesSec from "../../components/FrequentQuesSec";
import About from "../../components/About/About";

function Course() {
  return (
    <>
      <CourseDeatilHeader />
      <About />
      <ProfessionalCertificateSec />
      <WhySection />

      <FrequentQuesSec />
    </>
  );
}

export default Course;
