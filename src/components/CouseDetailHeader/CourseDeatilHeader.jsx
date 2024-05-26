import React from "react";

function CourseDeatilHeader() {
  return (
    <>
      <div className=" h-screen">
        <div className="w-full h-12 bg-gradient-to-r from-[#350C50] to-[#C83AF2]"></div>
        <div className="flex flex-wrap">
          <div className="w-1/2 p-14">
            <p className="font-[400] text-[27px] text-[#350C50]">
              Professional Certification
            </p>
            <h1 className="font-[650] text-[72px]  text-left   text-[#350C50]">
              Visual Communication Design
            </h1>
            <div className="flex flex-col space-y-4 mt-5">
              <div className="flex justify-between border-t-4 border-[#C83AF2] py-2">
                <div className="text-[#350C50] font-[400] text-[27px]">
                  Duration
                </div>
                <div className="text-[#350C50] font-semibold text-[27px]">
                  6 Months
                </div>
              </div>
              <div className="flex justify-between border-t-4 py-2 border-[#350C50]">
                <div className="text-[#350C50] font-[400] text-[27px]">
                  Modules
                </div>
                <div className="text-[#350C50] font-semibold text-[27px]">
                  6 Modules/ 120 Hours
                </div>
              </div>
              <div className="flex justify-between border-t-4 py-2 border-b-[#C83AF2] border-[#350C50]">
                <div className="text-[#350C50] font-[400] text-[27px]">
                  Course Fee
                </div>
                <div className="text-[#350C50] font-semibold text-[27px]">
                  90,000-/pkr
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-12 bg-gradient-to-r from-[#350C50] to-[#C83AF2]"></div>
      </div>
    </>
  );
}

export default CourseDeatilHeader;

//box Code

// <div className="h-full w-4/5 shadow-2xl">
// <div className="w-full h-  bg-gradient-to-r from-[#350C50] to-[#C83AF2]">

// </div>
// <div className="w-full">
//   <center>
//     <div className=" p-10">
//       <h2 className="text-[#350C50] font-[600] text-[35px]">
//         Salar Haris
//       </h2>

//       <p className="text-[#350C50]">
//         Visual Communication Designer
//       </p>
//     </div>
//   </center>
//   <div className=" p-6">
//     <h3 className="font-[500] text-[30px] text-[#350C50]">
//       Description
//     </h3>
//     <p className="text-[#350C50]">
//       I am Visual Communication Designer more than 5 years of
//       Experience. I am Visual Communication Designer more than 5
//       years of Experience. I am Visual Communication Designer
//       more than 5 years of Experience. I am Visual Communication
//       Designer more than 5 years of Experience.
//     </p>
//   </div>
//   <center>
//     <button className=" bg-custom-gradient text-[25px] font-bold pt-[8px] pb-[8px] pl-[20px] pr-[20px] rounded-md text-white">
//       Get Register
//     </button>
//   </center>
// </div>
// </div>
