import React from "react";
import Collapsible from "react-collapsible";
import ReactHtmlParser from "react-html-parser";

// import Account from "../images/Accounts.png";

const Accordion = ({ title, image, children, details }) => {
  return (
    <Collapsible trigger={title} className={`accordion-title arrow-left`}>
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
