//import React from 'react';
import "./about.css";
import Bell from "../../assets/images/bell.png";
import Link from "../../assets/images/linkdin.png";

function About() {
    return (
        <>
            <section>
                <div className="about-section">
                    <div className='Menu-of-About'>
                        <ul>
                            <li className="button-color">About</li>
                            <li>Outcomes</li>
                            <li>Courses</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>
                    <hr style={{ 
                        border: "3px solid #E0E0E0", marginTop: "12px",
                    }} />
                    <div>
                        {/* First Part */}
                        <div className="one-part">
                            <h1 className="heading-style">What you&apos;ll learn</h1>
                            <div className="one-part-section">
                                <ul>
                                    <li>Apply your skills to projects and build a portfolio that showcases your proficiency to employers while preparing for the CAPM certification exam.</li>
                                    <li>Incorporate Agile concepts of adaptive planning, iterative development, and continuous improvement leading to early deliveries and customer value.</li>
                                    <li>Master the most up-to-date concepts, tools, principles, and language project managers use in their daily roles.</li>
                                    <li>Track and manage projects, including addressing difficult client situations and how activities shift throughout the project management lifecycle.</li>
                                </ul>
                            </div>
                        </div>
                        {/* Second Part */}
                        <div className="second-part">
                            <h1 className="heading-style">Skills you&apos;ll gain</h1>
                            <ul>
                                <li>Project Management</li>
                                <li>Team</li>
                                <li>System Administration</li>
                                <li>Notion</li>
                            </ul>
                        </div>
                        {/* Third Part */}
                        <div className="third-part">
                            <h1 className="heading-style">Details to know</h1>
                            <div className="third-part-section">
                                <div className="third-one">
                                    <img src={Link} alt="LinkedIn" />
                                    <h3>Shareable Certificate</h3>
                                    <h6>Add to your LinkedIn profile</h6>
                                </div>
                                <div className="third-second">
                                    <img src={Bell} alt="Bell" />
                                    <h3>Recently updated!</h3>
                                    <h6>February 2024</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
