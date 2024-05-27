import CertificationCard from "./CertificationCard";

function CertificationSection() {
  const data = [
    {
      Off: "10",
      category: "Certification",
      month: "3",
      heading: "Visual Communication Design",
      gradient: "linear-gradient(120.11deg,#350C50 55.78%,#9700FF 135.54%)",
      img: "",
    },
    {
      Off: "10",
      category: "Specialization",
      month: "6",
      heading: "Professional Web Development",
      gradient: "linear-gradient(120.11deg,#350C50 47.07%,#FF004D 159.21%)",
      img: "",
    },
    {
      Off: "10",
      category: "Specialization",
      month: "6",
      heading: "Development With Go and Python",
      gradient: "linear-gradient(120.11deg,#350C50 43.99%,#00F0FF 159.21%)",
      img: "",
    },
    {
      Off: "10",
      category: "Specialization",
      month: "6",
      heading: "Ai For Digital Markater",
      gradient: "linear-gradient(120.11deg, #350C50 31.68%, #FF4D00 159.21%)",
      img: "",
    },
    {
      Off: "10",
      category: "Certification",
      month: "3",
      heading: "Visual Communication Design",
      gradient: "linear-gradient(120.11deg,#350C50 55.78%,#9700FF 135.54%)",
      img: "",
    },
    {
      Off: "10",
      category: "Specialization",
      month: "6",
      heading: "Professional Web Development",
      gradient: "linear-gradient(120.11deg,#350C50 47.7%,#FF004D 159.21%)",
      img: "",
    },
    {
      Off: "10",
      category: "Specialization",
      month: "6",
      heading: "Development With Go and Python",
      gradient: "linear-gradient(120.11deg,#350C50 43.99%,#00F0FF 159.21%)",
      img: "",
    },
    {
      Off: "10",
      category: "Specialization",
      month: "6",
      heading: "Ai For Digital Markater",
      gradient: "linear-gradient(120.11deg, #350C50 31.68%, #FF4D00 159.21%)",
      img: "",
    },
  ];
  const images = [
    "src/assets/images/AirbnbLogo.png",
    "src/assets/images/FedExLogo.png",
    "src/assets/images/GoogleLogo.png",
    "src/assets/images/HubspotLogo.png",
    "src/assets/images/MicrosoftLogo.png",
    "src/assets/images/WalmartLogo.png",
  ];

  return (
    <div className=" flex flex-col gap-12 mt-4">
      <h1
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="font-[400] max-md:text-[52px] max-sm:text-[42px] text-[72px] text-center italic text-[#350C50]"
      >
        Our <span className=" font-[500]">Certifications</span>
      </h1>
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-4 place-items-center place-content-start max-w-[1200px] w-full mx-auto ">
        {data.map((item) => {
          return (
            <>
              <CertificationCard item={item} />
            </>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center  gap-6 p-8 overflow-x-auto">
        {images.map((item) => {
          return (
            <>
              <img src={item} alt="image" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default CertificationSection;
