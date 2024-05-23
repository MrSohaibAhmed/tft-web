import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import logo from "/Logo-main.png"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Course" },
    { href: "#products", label: "Team" },
    { href: "#contact-us", label: "Testimonials" },
  ];
  return (
  
       <div className="relative z-50">
      <header className="sm:px-8 px-4 py-2 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="text-3xl font-bold p-3">
           <img src={logo} alt="Logo" className="w-[150px]" />
          </a>
          <ul className="flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat font-semibold leading-normal text-lg text-slate-gray hover:text-[#a435f0]"
                >
                  {item.label}
                </a>
              </li>
            ))}
         
          {/* <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24"> */}
           <button
            className=" bg-custom-gradient font-bold pt-[8px] pb-[8px] pl-[20px] pr-[20px] rounded-md text-white">Register</button> </ul>
          {/* </div> */}
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
        <CiMenuFries className="text-[#a435f0] text-lg font-bold"/>
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
             <AiOutlineClose className="text-[#a435f0] font-extrabold"/>
            </div>
            <ul className=" lg:hidden flex gap-4 flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-semibold hover:text-[#a435f0]  leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
               <button
            className=" bg-custom-gradient font-bold pt-[8px] pb-[8px] pl-[20px] pr-[20px] rounded-md text-white">Register</button>
            </ul>
          </nav>
        </div>
      )}
   </div>
  );
};
export default Navbar;