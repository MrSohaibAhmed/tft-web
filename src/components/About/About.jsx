//import React from 'react';
import "./about.css";
import Bell from "../../assets/images/bell.png";
import Link from "../../assets/images/linkdin.png";

function About() {
  return (
    <>
      <section>
        <div className="about-section">
          <div className="mt-4">
            <ul className="flex flex-wrap font-medium text-center text-gray-500 dark:text-gray-400 text-[22px]">
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block px-4 py-3 text-gray-50 bg-purple-700
        rounded-lg active"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900
         hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Outcomes
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900
         hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Courses
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block px-4 py-3 rounded-lg hover:text-gray-900
         hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <hr
            style={{
              color: "#454545",
              padding: "0px 14px",
            }}
          />
          <div>
            {/* First Part */}
            <div className="one-part">
              <h1 className="heading-style">What you&apos;ll learn</h1>
              <div className="one-part-section">
                <ul className="font-[400] text-[20px]">
                  <li>
                    Apply your skills to projects and build a portfolio that
                    showcases your proficiency to employers while preparing for
                    the CAPM certification exam.
                  </li>
                  <li>
                    Incorporate Agile concepts of adaptive planning, iterative
                    development, and continuous improvement leading to early
                    deliveries and customer value.
                  </li>
                  <li>
                    Master the most up-to-date concepts, tools, principles, and
                    language project managers use in their daily roles.
                  </li>
                  <li>
                    Track and manage projects, including addressing difficult
                    client situations and how activities shift throughout the
                    project management lifecycle.
                  </li>
                </ul>
              </div>
            </div>
            {/* Second Part */}
            <div className="second-part">
              <h1 className="heading-style">Skills you&apos;ll gain</h1>
              <ul className="font-[400] text-[22px]">
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
                  <h6 style={{ color: "#454545" }}>
                    Add to your LinkedIn profile
                  </h6>
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
