import "./App.css";
import FrequentQuesSec from "./components/FrequentQuesSec";
import WhySection from "./components/WhySection";
import CertificationSection from "./components/CertificationSection";
import ProfessionalCertificateSec from "./components/ProfessionalCertificateSec";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import CourseDeatilHeader from "./components/CouseDetailHeader/CourseDeatilHeader";
import Course from "./pages/Course/Course";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">TFT LATEST WEBSITE</h1> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />

        {/* <Header />
        <CertificationSection />
        <ProfessionalCertificateSec />
        <WhySection />
        <FrequentQuesSec />
        <CourseDeatilHeader /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
