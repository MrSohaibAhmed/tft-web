import ProfileComp from "./ProfileComp";
import AccordianComp from "./AccordianComp";

function ProfessionalCertificateSec() {
  const data = [
    {
      heading: "1. Introduction to Project Management",
      course: 1,
      hour: 9,
      rating: "  4.8(744 ratings)",
    },
    {
      heading: "2. Git and Github",
      course: 2,
      hour: 13,
      rating: "  4.8(744 ratings)",
    },
    {
      heading: "3. Methods Project Management",
      course: 3,
      hour: 3,
      rating: "  4.8(744 ratings)",
    },
    {
      heading: "1. Introduction to Project Management",
      course: 4,
      hour: 9,
      rating: "  4.8(744 ratings)",
    },
    {
      heading: "2. Git and Github",
      course: 5,
      hour: 13,
      rating: "  4.8(744 ratings)",
    },
  ];

  const instructor = {
    heading: "Salar Haris",
    content: "Visual Communication Designer",
    img: "src/assets/images/Rectangle15.png",
  };
  const courseData = [
    {
      heading: "Graphic Design",
      content: "Beginner Certifcatie",
      img: "src/assets/images/Rectangle36.png",
    },
    {
      heading: "Adobe Photoshop",
      content: "Intermediate Certifcates",
      img: "src/assets/images/Rectangle37.png",
    },
  ];
  return (
    <>
      <div className=" max-w-[1200px] w-full mx-auto p-16">
        <div className="flex flex-col gap-2">
          <h1 className=" font-[600] text-[43px] leading-[52px] text-[#001E36] ">
            Professional Certificate - 8 course series
          </h1>
          <p className="font-[400] text-[22px] leading-[26px] text-[#000000]">
            Prepare for a career in the high-growth field of project management.
            In this program, you’ll develop the skills, knowledge, and portfolio
            to have a competitive edge in the job market as an entry-level
            project manager in as little as 3 months. No prior
          </p>
          <span className="font-[700] text-[22px] leading-[26px] text-[#1460DD]">
            Read More
          </span>
        </div>
        <div className="flex mt-10 gap-7 max-lg:flex-wrap items-start justify-center">
          <div
            className="p-8  rounded-3xl flex flex-col gap-2 max-w-[750px] w-full"
            style={{ boxShadow: " 5px 5px 13.1px 4px #0000001C" }}
          >
            {data.map((item) => {
              return (
                <>
                  <AccordianComp item={item} />
                </>
              );
            })}
          </div>

          <div
            className=" p-8 rounded-3xl max-w-[400px] w-full flex-auto "
            style={{ boxShadow: "5px 5px 13.1px 4px #0000001C" }}
          >
            <h1 className="text-[43px] font-[600] text-[#939393]">
              Instructors
            </h1>
            <ProfileComp data={instructor} />

            <h1 className="text-[22px] font-[600] text-[#939393]">
              Description
            </h1>
            <p className=" text-[15px] font-[300] text-[#000000]">
              I am Visual Communication Designer more than 5 years of
              Experience. I am Visual Communication Designer more than 5 years
              of Experience. I am Visual Communication Designer more than 5
              years of Experience. I am Visual Communication Designer more than
              5 years of Experience.
            </p>
<br />
            <h1 className="text-[26px] font-[600] text-[#939393]">
              More Courses
            </h1>
            <div className="flex flex-col gap-2">
              {courseData.map((item) => {
                return (
                  <>
                    <ProfileComp data={item} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfessionalCertificateSec;
