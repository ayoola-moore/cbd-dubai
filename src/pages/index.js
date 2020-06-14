import React from "react";
import Banner from "../components/banner";
import Logo from "../images/home-page-3-logo@2x.png";
import Accordion from "../components/accordion";
import Footer from "../components/footer";
import Thumbnail from "../components/thumbnails";
import { thumbnailData } from "../data/thumbnails";
import { accordionData } from "../data/accordions";

const index = () => {
  return (
    <section className="container">
      <div className="header">
        <img src={Logo} alt="" />
      </div>
      <Banner />
      <p className="home-para">
        In line with our default digital strategy, our award winning Mobile
        Banking App and Online Banking channels allow you to fulfill all your
        banking requirements quickly, conveniently and securely from the comfort
        of your home or office. As we continue on our digital journey, the
        following services will be offered exclusively only through{" "}
        <b>CBD Mobile and Online Banking channels</b> and no longer be available
        through the Contact Centre.
      </p>

      <section className="thumbnail-wrapper">
        {thumbnailData.map((data, i) => {
          const { image, text } = data;
          return <Thumbnail image={image} text={text} key={`thumbnail-${i}`} />;
        })}
        <div className="clearfix"></div>
      </section>

      <section className="accordion-wrapper">
        {accordionData.map((accordion, i) => {
          const { id, accordionHeader, image, subDetails } = accordion;

          return (
            <Accordion key={`${id}-${i}`} title={accordionHeader} image={image}>
              {subDetails.map((subAccordion, i) => {
                const { subTitle, details } = subAccordion;
                return (
                  <Accordion
                    title={subTitle}
                    details={details}
                    withoutBg={true}
                  />
                );
              })}
            </Accordion>
          );
        })}
      </section>

      <Footer />
    </section>
  );
};

export default index;
