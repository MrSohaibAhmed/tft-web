import PropTypes from "prop-types";
import { useState } from "react";

function AccordianComp(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="border-b-2 p-2 flex flex-col gap-2">
      {" "}
      <div className="flex justify-between items-center   ">
        <div className="flex flex-col gap-1">
          <h1 className="text-[28px] max-sm:text-[18px] font-[600] text-[#001E36]">
            {props.item.heading}
          </h1>
          <p className="text-[18px] max-sm:text-[12px] font-[300] text-[#7D7D7D]">
            Course {props.item.course} &nbsp;&nbsp;&nbsp;&nbsp; ||
            &nbsp;&nbsp;&nbsp;&nbsp; {props.item.hour} hours
            &nbsp;&nbsp;&nbsp;&nbsp; || &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-[600]"> {props.item.rating}</span>
          </p>
        </div>
        <img
          src="../../../ArrowDown.png"
          onClick={() => {
            setToggle(!toggle);
          }}
          className={`cursor-pointer max-sm:w-[40px]  transition-all duration-300 ease-in-out   ${toggle ? " rotate-180" : " rotate-0"} `}
          width={75}
          alt="arrow button"
        />
      </div>
      <div
        className={`grid transition-all overflow-hidden duration-300 ease-in-out ${
          toggle ? " grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        } `}
      >
        <div className="overflow-hidden">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          quos consectetur impedit obcaecati, eos neque dolorem quaerat eveniet.
          Dolorem nostrum animi natus.
        </div>
      </div>
    </div>
  );
}

export default AccordianComp;
AccordianComp.propTypes = {
  item: PropTypes.object,
};
