import React from "react";
import styled from "styled-components";

const ThumbnailStyle = styled.div((props) => ({
  background: `url(${props.image}) no-repeat  50% 14%`,
}));

const Thumbnail = ({ text, image }) => {
  return (
    <ThumbnailStyle image={image} className={"thumbnail"}>
      <div className="thumbnail-text">{text}</div>
    </ThumbnailStyle>
  );
};

export default Thumbnail;
