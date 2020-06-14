import React from "react";
import Collapsible from "react-collapsible";
import ReactHtmlParser from "react-html-parser";

// import Account from "../images/Accounts.png";

const withoutBgStyle = {
  background: "none",
  color: "#006E7D",
  borderBottom: ".03em solid #a9a6a6",
  paddingLeft: " 0",
};

const Accordion = ({ title, image, children, details, withoutBg }) => {
  return (
    <Collapsible
      trigger={title}
      className={`accordion-title`}
      triggerStyle={withoutBg ? withoutBgStyle : null}
    >
      <div className="img-overlay">
        {image ? <img src={image} alt={title} /> : null}
      </div>
      <div className="child-accordion-wrapper">{children}</div>
      <p className="details">{ReactHtmlParser(details)}</p>
    </Collapsible>
  );
};

Accordion.defaultProps = {
  title: "default title",
};

export default Accordion;
