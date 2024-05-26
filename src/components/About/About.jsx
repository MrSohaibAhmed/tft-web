import { useState } from 'react';
import "./about.css";
import Bell from "../../assets/images/bell.png";
import Link from "../../assets/images/linkdin.png";

function About() {
    const [activeTab, setActiveTab] = useState('About');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <section>

                <div className="about-section">
                    {/* First Part */}
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 space-x-2">
                        <li className="me-2">
                            <a
                                href="#"
                                className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'About' ? 'text-gray-50 bg-purple-700' : 'hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                                onClick={() => handleTabClick('About')}
                            >
                                About
                            </a>
                        </li>
                        <li className="me-2">
                            <a
                                href="#"
                                className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'Outcomes' ? 'text-gray-50 bg-purple-700' : 'hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                                onClick={() => handleTabClick('Outcomes')}
                            >
                                Outcomes
                            </a>
                        </li>
                        <li className="me-2">
                            <a
                                href="#"
                                className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'Courses' ? 'text-gray-50 bg-purple-700' : 'hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                                onClick={() => handleTabClick('Courses')}
                            >
                                Courses
                            </a>
                        </li>
                        <li className="me-2">
                            <a
                                href="#"
                                className={`inline-block px-4 py-3 rounded-lg ${activeTab === 'Testimonials' ? 'text-gray-50 bg-purple-700' : 'hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                                onClick={() => handleTabClick('Testimonials')}
                            >
                                Testimonials
                            </a>
                        </li>
                    </ul>

                    <div className="content mt-4">
                        {activeTab === 'About' && (
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
                        )}
                        {activeTab === 'Outcomes' && (
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
                        )}
                        {activeTab === 'Courses' && (
                            <div> <div className="one-part">
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
                            </div>
                        )}
                        {activeTab === 'Testimonials' && (
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
                        )}
                    </div>

                    <hr style={{
                        color: "#454545", padding: "0px 14px"
                    }} />
                    <div>
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
                                    <h3 style={{ color: "black" }}>Shareable Certificate</h3>
                                    <h6 style={{ color: "#454545" }}>Add to your LinkedIn profile</h6>
                                </div>
                                <div className="third-second">
                                    <img src={Bell} alt="Bell" />
                                    <h3 style={{ color: "black" }}>Recently updated!</h3>
                                    <h6 style={{ color: "#454545" }}>February 2024</h6>
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


