import React from "react";
import "./BlackFooter.css";

const BlackFooter = () => {
  const footerData = {
    subscribeTitle: "Subscribe to Aesop communications",
    sections: [
      {
        title: "Orders and support",
        links: [
          { label: "Contact us", href: "#" },
          { label: "FAQs", href: "#" },
          { label: "Shipping", href: "#" },
          { label: "Returns", href: "#" },
          { label: "Order history", href: "#" },
          { label: "Check gift card balance", href: "#" },
          { label: "Terms and conditions", href: "#" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Live assistance", href: "#" },
          { label: "Corporate gifts", href: "#" },
          { label: "Facial appointments", href: "#" },
          { label: "Click and Collect", href: "#" },
          { label: "Video consultation", href: "#" },
        ],
      },
      {
        title: "Location preferences",
        links: [
          { text: "Shipping:", label: "Hong Kong, SAR", href: "#" },
          { text: "Language:", label: "English", href: "#" },
          { label: "繁體中文", href: "#" },
        ],
      },
    ],
  };

  const footerData2 = [
    {
      title: "Sustainability",
      description:
        "All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more",
      links: [],
    },
    {
      title: "About",
      links: [
        { label: "Our story", href: "#" },
        { label: "Foundation", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Privacy policy", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
    {
      title: "Social media",
      links: [
        { label: "Instagram", href: "#", newTab: true },
        { label: "Twitter", href: "#", newTab: true },
        { label: "LinkedIn", href: "#", newTab: true },
        { label: "WeChat", href: "#" },
        { label: "Weibo", href: "#", newTab: true },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="subscribe-section">
        <div className="input-section">
          <h2>{footerData.subscribeTitle}</h2>
          <hr></hr>
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Email address"
              className="email-input"
            />
          </div>
          <div className="subscribe-text">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our{" "}
              <a href="#" className="privacy-link">
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="links-section">
          {footerData.sections.map((section, index) => (
            <div className="column" key={index}>
              <h3>{section.title}</h3>
              <hr />
              {section.description && <p>{section.description}</p>}
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.newTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      {link.label} {link.newTab && <span>↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="links-section2">
        {footerData2.map((section, index) => (
          <div className="column" key={index}>
            <h3>{section.title}</h3>
            <hr />
            {section.description && <p>{section.description}</p>}
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    target={link.newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {link.label} {link.newTab && <span>↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr style={{width: "100%"}}></hr>

      <div className="footer-note">
        <p>© Aesop</p>
      </div>
    </footer>
  );
};

export default BlackFooter;
