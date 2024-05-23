import PropTypes from "prop-types";
function CertificationCard(props) {
  return (
    <>
      <div
        className="  font-[inter]  max-w-[292px] w-full rounded-lg overflow-hidden"
        style={{ boxShadow: "6px 8px 18.3px 5px #00000014" }}
      >
        <div className="relative rounded-lg">
          <img src={props.item.img} className="h-52" alt="" />
          <div
            className={
              "font-[600] text-[25px] bg-[linear-gradient(90deg,#350C50_0%,#9700FF_97%)] text-white absolute top-0 right-0 px-3 py-2 rounded-lg rounded-br-none bg-[linear-gradient(90deg, #350C50 0%, #9700FF 97%)]"
            }
          >
            {props.item.Off}% Off
          </div>
        </div>

        <div
          className={` flex flex-col gap-2 text-white p-3`}
          style={{ background: props.item.gradient }}
        >
          <div className="flex justify-between gap-1 props.items-center">
            <p className="italic font-[300] text-[17px]">Certification</p>{" "}
            <data value="" className="font-[500] text-[17px]">
              {props.item.month} month
            </data>
          </div>
          <h1 className=" max-w-[155px] w-full text-[27px] font-[700]">
            {props.item.heading}
          </h1>
        </div>
      </div>{" "}
    </>
  );
}

export default CertificationCard;

CertificationCard.propTypes = {
  item: PropTypes.object,
};
