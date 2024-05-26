import PropTypes from "prop-types";

function ProfileComp(props) {
  return (
    <>
      <div className="flex items-center p-2  gap-3">
        <img src={props.data.img} alt="instructor" width={70} />
        <div className="flex flex-col gap-1 ">
          <h1 className="text-[22px] text-nowrap font-[600] leading-none  text-[#350C50]">
            {props.data.heading}
          </h1>
          <p className="text-[14px] font-[300] text-[#350C50]">
            {props.data.content}
          </p>
          <img src="src/assets/images/Stars.png" width={120} alt="" />
        </div>
      </div>
    </>
  );
}

export default ProfileComp;
ProfileComp.propTypes = {
  data: PropTypes.object,
};
