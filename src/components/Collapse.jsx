import { Collapse } from "antd";
import { useState, useEffect } from "react";
import './collapse.css';  

const { Panel } = Collapse;
{/*Here is the file */}
const menuData = [
  {
    heading: "Product",
    links: [
      { label: "Store", href: "#about" },
      { label: "Developer", href: "" },
      { label: "Teams", href: "" },
      { label: "Pro", href: "" },
      { label: "API Docs", href: "" },
      { label: "Pricing", href: "" },
      { label: "Changelog", href: "" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Careers", href: "" },
      { label: "Manifesto", href: "" },
      { label: "Privacy Policy", href: "" },
      { label: "Terms of Services", href: "" },
      { label: "DPA", href: "" },
      { label: "Press Kit", href: "" },
      { label: "Contact", href: "" },
    ],
  },
  {
    heading: "Community",
    links: [
      { label: "Community Stories", href: "" },
      { label: "Slack", href: "" },
      { label: "Twitter", href: "" },
      { label: "Github", href: "" },
      { label: "Dribble", href: "" },
    ],
  },
];

const MyCollapse = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    // Render Collapse for small screens 
    return (
      <Collapse className="accordian">
        {menuData.map((section, index) => (
          <Panel
            header={<h3 className="heading">{section.heading}</h3>}
            key={index}
          >
            {section.links.map((link, linkIndex) => (
              <h4 className="fontsize" key={linkIndex}>
                <a href={link.href}>{link.label}</a>
              </h4>
            ))}
          </Panel>
        ))}
      </Collapse>
    );
  } else {
    // Render non-collapsed menu for large screens
    return (
      <div className="showing-accordion main-footer-part">
        {menuData.map((section, index) => (
          <div className="footer-content" key={index}>
            <h3>{section.heading}</h3>
            {section.links.map((link, linkIndex) => (
              <p key={linkIndex}>
                <a href={link.href}>{link.label}</a>
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  }
};

export default MyCollapse;
