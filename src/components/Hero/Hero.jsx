import "./Hero.css";
import { useState, useEffect } from "react";
import img1 from "../../../public/--1-3@2x.png";
import img2 from "../../../public/id.png";
import img3 from "../../../public/--1-4@2x.png";
import img4 from "../../../public/circle@2x.png";
import img5 from "../../../public/--1-3@2x.png";
import img6 from "../../../public/--1-4@2x.png";
import img7 from "../../../public/--1-1@2x.png";
import img8 from "../../../public/Element-Blend-circle.png";

const Header = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMousePosition({ x: event.clientX, y: event.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (event) => {
      setIsMouseMoving(true);
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-[url('/Gradient-Banner.png')] bg-no-repeat bg-cover relative h-[80vh] md:h-[100vh] overflow-hidden">
      <div className="bg-[url('/Pixel-Effect.png')] relative h-[80vh] md:h-[100vh] overflow-hidden">
        <div className="w-[100%] h-[100%] relative flex items-center flex-col ">
          <div className="relative flex justify-center items-center flex-col">
            <h1 className="flex justify-center items-center relative top-16 z-2 leading-tight">
              <h1
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                className="w-full text-center relative z-10 text-white"
              >
                <span className="font-semibold div text-center text-[67px] max-sm:text-[37px]">
                  Let&apos;s
                </span>
                <span className="font-semibold div text-center text-[67px] max-sm:text-[37px]">
                  &nbsp; Make a Smart and Tech <br />
                </span>
                <div className="">
                  <span className="div2 font-semibold text-[67px] max-sm:text-[37px]">
                    Buddy
                  </span>
                  <span className="div2 font-semibold text-[67px] max-sm:text-[37px]">
                    <i>Future</i> Together
                  </span>
                </div>
              </h1>
            </h1>
          </div>
          <div className="absolute bottom-[-60px] z-10 flex justify-center items-center flex-col">
            <img
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              src="/womanstandingworkinghertabletremovebgpreview-1@2x.png"
              className="relative h-[60vh] md:h-[65vh] lg:h-[72vh] bottom-0"
              alt=""
            />
            <button
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className=" bg-custom-gradient  hover:scale-[0.97] text-[30px] absolute bottom-[150px]   font-bold py-[8px]  px-[20px] rounded-md text-white"
            >
              Course
            </button>
          </div>
        </div>
      </div>
      <img
        // src="/public/--1-3@2x.png"
        // src="../../../public/--1-3@2x.png"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        src={img1}
        className="absolute bottom-[50%] md:bottom-[40%] left-[13%] h-[100px] w-[100px] md:h-[150px] md:w-[150px]"
        alt=""
      />
      {/* iD1 */}
      <img
        // src="/public/id.png"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        src={img2}
        // src="../../../public/id.png"
        className="absolute top-[10%] md:top-[25%] left-[5%] h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
        alt=""
      />
      {/* id2 */}
      <img
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        // src="/public/id.png"
        src={img2}
        className="absolute bottom-[10%] md:bottom-[15%] left-[3%] h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
        alt=""
      />
      <img
        // src="/public/--1-4@2x.png"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        src={img3}
        // src="../../../public/--1-4@2x.png"
        className="absolute bottom-[80px] left-[20%] h-[200px] w-[200px]"
        alt=""
      />
      <img
        // src="/public/circle@2x.png"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        src={img4}
        // src="../../../public/circle@2x.png"
        className="absolute  h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] right-[-8vw] top-[0px]"
        alt=""
      />
      <img
        // src="/public/--1-3@2x.png"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        src={img5}
        // src="../../../public/--1-3@2x.png"
        className="absolute bottom-[50%] md:bottom-[20%] right-[5%] h-[70px] w-[70px] md:h-[100px] md:w-[100px]"
        alt=""
      />
      <img
        // src="/public/--1-4@2x.png"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        src={img6}
        // src="../../../public/--1-4@2x.png"
        className="absolute hidden bottom-[20%] md:block md:bottom-[40%] right-[15%] h-[70px] w-[70px] md:h-[100px] md:w-[100px]"
        alt=""
      />
      <img
        // src="/public/--1-1@2x.png"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        src={img7}
        // src="../../../public/--1-1@2x.png"
        className="absolute hidden sm:block sm:right-[10%] bottom-[25%] md:bottom-[20%] md:right-[35%] h-[70px] w-[70px] md:h-[150px] md:w-[150px]"
        alt=""
      />
      <img
        // data-aos="fade-down"
        // data-aos-offset="200"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="600"
        // src="/public/Element-Blend-circle.png"
        src={img8}
        // src="../../../public/Element-Blend-circle.png"
        className="absolute h-[35vh] animate-spin  sm:h-[45vh] md:h-[60vh] lg:h-[70vh] left-[-13vw] bottom-[-10vh]"
        alt=""
      />

      <div
        className="shine-effect"
        style={{
          left: mousePosition.x + "px",
          top: mousePosition.y + "px",
        }}
      ></div>
    </div>
  );
};

export default Header;
