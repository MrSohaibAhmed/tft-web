function Certificate() {
  return (
    <>
      <div className=" max-w-[1400px] w-full mx-auto flex justify-center max-md:p-4 p-16 items-center">
        <div className="w-full border-8 gap-2 flex relative  rounded-full border-[#350C50] p-6 mt-4">
          <img
            className=" aspect-auto "
            src="/images/Vector.png"
            alt="vector"
          />
          <div className="">
            {" "}
            <h1 className="font-[500] text-[50px] w-[60%] text-[#350C50]">
              Earn a career certificate
            </h1>
            <p className="font-[400] text-[20px]  w-[60%] leading-[26px] text-[#000000] p-2">
              Add this credential to your LinkedIn profile, resume, or CV Share
              it on social media and in your performance review
            </p>
          </div>
          <div
            // style={{ transform: "translate(-50%, -50%)" }}
            className="bg-white p-4 flex justify-center items-center top-[-15%]  bottom-[5%] right-[5%] aspect-square absolute  h-[240px] border-[#350C50] border-8 "
          >
            <img width={140} src="/images/certificate-outline.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
