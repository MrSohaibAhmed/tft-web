import img1 from "/public/--1-1@2x.png";

function CourseDeatilHeader() {
  return (
    <div className="bg-white min-h-[120vh] max-w-[1400px] w-full mx-auto">
      <div className="bg-[url('/Gradient-Banner.png')] bg-no-repeat bg-cover relative h-fit min-h-[100vh] overflow-hidden">
        <div className="bg-[url('/Pixel-Effect.png')] relative  h-fit min-h-[100vh] overflow-hidden">
          <div className="flex  min-h-[110vh] items-center flex-col lg:flex-row">
            <div className="flex flex-wrap h-fit w-[100vw] lg:w-[60vw] bg-white rounded-tr-[60px] rounded-br-[60px]">
              <div
                data-aos="fade-zoom-out"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                className="w-full p-14"
              >
                <p  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600" className="font-[400]  text-[40px] sm:text-[62px] md:text-[27px] text-[#350C50]">
                  Professional Certification
                </p>
                <h1  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600" className="font-[650] text-[40px] sm:text-[62px] md:text-[72px]  text-left   text-[#350C50]">
                  Visual Communication Design
                </h1>
                <div className="flex flex-col space-y-4 mt-5">
                  <div className="flex justify-between border-t-4 border-[#C83AF2] py-2">
                    <div className="text-[#350C50] font-[400] text-[27px]">
                      Duration
                    </div>
                    <div className="text-[#350C50] font-semibold text-[24px] sm:text-[27px]">
                      6 Months
                    </div>
                  </div>
                  <div className="flex justify-between border-t-4 py-2 border-[#350C50]">
                    <div className="text-[#350C50] font-[400] text-[27px]">
                      Modules
                    </div>
                    <div className="text-[#350C50] font-semibold text-[24px] sm:text-[27px]">
                      6 Modules/ 120 Hours
                    </div>
                  </div>
                  <div className="flex justify-between border-t-4 border-b-4 py-2 border-b-[#C83AF2] border-[#350C50]">
                    <div className="text-[#350C50] font-[400] text-[27px]">
                      Course Fee
                    </div>
                    <div className="text-[#350C50] font-semibold text-[24px] sm:text-[27px]">
                      90,000-/pkr
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div  data-aos="fade-zoom-out"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600" className="right flex relative justify-center items-center w-[100vw] lg:w-[40vw]">
              <div className="card z-10  relative h-[110vh] w-[100%] md:pt-0 md:w-[70%] lg:w-[80%] rounded-bl-lg rounded-br-lg bg-custom-gradient">
                <img
                  src={img1}
                  className="absolute animate-bounce right-[-20px] top-[20px] w-[63px] h-[61px]"
                  alt=""
                />
                <img
                  src="--1-3@2x.png"
                  className="absolute animate-bounce right-[-20px] top-[160px] w-[113px] h-[111px]"
                  alt=""
                />
                <img
                  src="--1-2@2x.png"
                  className="absolute animate-bounce left-[-20px] top-[80px] w-[89px] h-[87px]"
                  alt=""
                />

                <div className="top h-[30%] flex justify-center items-center relative bottom-[-80px] ">
                  <img
                    src="Rectangle 15.png"
                    className="rounded-[50%]"
                    alt=""
                  />
                </div>
                <div
                 
                  className="bottom h-[70%] p-8 flex flex-col justify-center items-center lg:items-start bg-white"
                >
                  <h1 className=" font-bold text-gray-300">Instructor</h1>
                  <h1 className=" font-semibold text-[45px] text-[#350C50] ">
                    Salaar Haris
                  </h1>
                  <h1 className=" font-bold text-gray-300">Description</h1>
                  <p className="text-[#350C50] font-medium text-wrap">
                    This Course is Design for all type of Designing Modules.
                    This Course is Design for all type of Designing Modules.
                    This Course is Design for all type of Designing Modules.
                    This Course is Design for all type of Designing Modules.
                  </p>
                  <button className="mt-[60px] self-center bg-custom-gradient font-bold pt-[10px] pb-[10px] pl-[25px] w-[272px] h-[56px] pr-[25px] rounded-md text-white">
                    Register
                  </button>
                </div>
              </div>
              <img
                src="--1-4@2x.png"
                className="absolute z-10 animate-bounce left-[-90px] bottom-[280px] w-[130px] h-[135px]"
                alt=""
              />
              <img
                src={img1}
                className="absolute animate-bounce z-10 right-[20px] bottom-[80px] w-[130px] h-[135px]"
                alt=""
              />
              <div className=" h-[100vh] w-[30%] lg:w-[20%] hidden md:block bg-white rounded-tl-full rounded-bl-full rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDeatilHeader;
