function FrequentQuesSec() {
  const data = [
    "1. Introduction to Project Management ?",
    "1. Introduction to Project Management ?",
    "2. You will receive an email from Coursera?",
    "2. You will receive an email from Coursera?",
    "1. Introduction to Project Management ?",
    "1. Introduction to Project Management ?",
  ];
  return (
    <>
      <div className="max-w-[1400px] w-full mx-auto  max-md:p-4 p-16 flex flex-col gap-7 ">
        <h1 className="text-[43px] text-center leading-[52px] font-[600] text-[#000000]">
          Frequently asked questions
        </h1>
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          {data.map((item) => {
            return (
              <>
                <div
data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                  className=" p-4 rounded-3xl"
                  style={{ boxShadow: "5px 5px 13.1px 4px #0000001C" }}
                >
                  <p className="text-[24px] leading-[29px] font-[600] text-[#001E36]">
                    {item}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FrequentQuesSec;
