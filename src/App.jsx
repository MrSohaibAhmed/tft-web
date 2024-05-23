import "./App.css";
import FrequentQuesSec from "./components/FrequentQuesSec";
import WhySection from "./components/WhySection";
// import CertificationSection from "./components/CertificationSection";
// import ProfessionalCertificateSec from "./components/ProfessionalCertificateSec";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">TFT LATEST WEBSITE</h1>
      {/* <CertificationSection /> */}
      {/* <ProfessionalCertificateSec /> */}
      <WhySection />
      <FrequentQuesSec />
    </>
  );
}

export default App;
