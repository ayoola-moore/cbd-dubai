import React from "react";
import Collapsible from "react-collapsible";

const Accordion = ({ title, image, children, withBackground }) => {
  return (
    <Collapsible
      trigger={title}
      className={`accordion-title`}
      style={withBackground}
    >
      <img src={image} alt={title} />
      <div className="child-accordion-wrapper">{children}</div>
    </Collapsible>
  );
};

Accordion.defaultProps = {
  title: "default title",
  image: "https://dummyimage.com/600x400/000/fff",
  children: "NO children",
  withBackground: { backgroudColor: "#000" },
};

export default Accordion;
