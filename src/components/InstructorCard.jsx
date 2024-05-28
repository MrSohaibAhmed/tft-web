import PropTypes from "prop-types";
function InstructorCard(props) {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className=" max-w-96 w-full flex justify-center items-center gap-1 flex-col p-8"
        style={{
          boxShadow: "5px 5px 13.1px 4px #0000001C",
          borderRadius: "181px 181px 0px 0px",
        }}
      >
        <img src={props.data.img} width={110} alt="" />
        <h1 className="text-[35px] leading-[42px] font-[600] text-[#350C50] ">
          {props.data.name}
        </h1>
        <p className="text-[15px] font-[300] text-[#350C50]">
          {props.data.subheading}
        </p>
        <div className="w-full border-2 my-2 border-[#93939373] "></div>
        <p className="text-[21px] leading-[25px] font-[500] italic text-[#000000]">
          {props.data.description}
        </p>
        <img src="src/assets/images/Stars.png" width={140} alt="" />
      </div>
    </>
  );
}

export default InstructorCard;
InstructorCard.propTypes = {
  data: PropTypes.object,
};
