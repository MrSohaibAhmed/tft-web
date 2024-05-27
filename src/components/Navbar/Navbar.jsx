import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import logo from "/Logo-main.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/course", label: "Course" },
    { href: "#products", label: "Team" },
    { href: "#contact-us", label: "Testimonials" },
  ];
  const [navbarAnimation, setNavbarAnimation] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("hello", window.scrollY);
      if (window.scrollY > 10) {
        setNavbarAnimation(true);
        console.log("i am greter");
      } else {
        setNavbarAnimation(false);
      }
    });
  }, []);
  return (
    <div
      className={`sticky top-0 bg-white z-50  ${
        navbarAnimation ? "bounce-once" : ""
      }`}
    >
      <header className="sm:px-8 px-4 py-2  z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-bold p-3">
            <img src={logo} alt="Logo" className="w-[150px]" />
          </a>
          <ul className="flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label} className="menu">
                <Link
                  to={item.href}
                  className="font-montserrat hover:border-b-2 border-[#892BC8] transition-all ease-linear font-semibold leading-normal text-lg text-slate-gray hover:text-[#a435f0]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24"> */}
            <button className=" bg-custom-gradient font-bold pt-[8px] pb-[8px] pl-[20px] pr-[20px] rounded-md text-white">
              Register
            </button>{" "}
          </ul>
          {/* </div> */}
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <CiMenuFries className="text-[#a435f0] text-lg font-bold" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-[#a435f0] font-extrabold" />
            </div>
            <ul className=" lg:hidden flex gap-4 flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-semibold hover:text-[#a435f0]  leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <button className=" bg-custom-gradient font-bold pt-[8px] pb-[8px] pl-[20px] pr-[20px] rounded-md text-white">
                Register
              </button>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
export default Navbar;
