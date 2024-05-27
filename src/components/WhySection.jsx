import InstructorCard from "./InstructorCard";

function WhySection() {
  const data = [
    {
      img: "src/assets/images/Rectangle15.png",
      name: "Salar Haris",
      subheading: "University Of Central Punjab",
      description:
        "I am Visual Communication Designer more than 5 years of Experience. I am Visual Communication Designer more than 5 years of Experience.",
    },
    {
      img: "src/assets/images/Rectangle15.png",
      name: "Steevin Cva",
      subheading: "University Of Central Punjab",
      description:
        "I am Visual Communication Designer more than 5 years of Experience. I am Visual Communication Designer more than 5 years of Experience.",
    },
    {
      img: "src/assets/images/Rectangle37.png",
      name: "Maham Ali",
      subheading: "University Of Central Punjab",
      description:
        "I am Visual Communication Designer more than 5 years of Experience. I am Visual Communication Designer more than 5 years of Experience.",
    },
  ];
  return (
    <>
      <div className="max-w-[1400px] w-full  max-md:p-4 p-16 mx-auto flex flex-col gap-[50px] ">
        <h1 className="text-[43px] leading-[46px] font-[600] text-[#001E36]">
          Why people choose <br /> Coursera for their career
        </h1>
        <div className="flex gap-4 max-lg:flex-wrap  justify-center items-center">
          {data.map((item) => {
            return (
              <>
                <InstructorCard data={item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WhySection;
