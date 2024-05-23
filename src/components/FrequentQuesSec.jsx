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
      <div className="max-w-[1200px] w-full mx-auto p-4 flex flex-col gap-7 ">
        <h1 className="text-[43px] text-center leading-[52px] font-[600] text-[#000000]">
          Frequently asked questions
        </h1>
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          {data.map((item) => {
            return (
              <>
                <div
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
