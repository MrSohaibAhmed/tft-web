import "./App.css";
import FrequentQuesSec from "./components/FrequentQuesSec";
import WhySection from "./components/WhySection";
import CertificationSection from "./components/CertificationSection";
import ProfessionalCertificateSec from "./components/ProfessionalCertificateSec";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Hero/Hero";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">TFT LATEST WEBSITE</h1> */}
      <Navbar />

      <Header />

      <CertificationSection />
      <ProfessionalCertificateSec />
      <WhySection />
      <FrequentQuesSec />
    </>
  );
}

export default App;
