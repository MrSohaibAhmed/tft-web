import React from 'react'
import "./footer.css";
import Img from "../../assets/logo.png";
import MyCollapse from '../Collapse';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer">
        <div className='main-footer-part'>
        <div className="footer-logo">
       <img src={Img} alt="" />
        </div>
        {/*Here is the collapse*/}
        <MyCollapse/>
         
</div>
        </div>
    </footer>
    </>
  )
}

export default Footer
