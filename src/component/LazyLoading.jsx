import React from "react";
import LazyLoad from "react-lazyload";

const LazyBackground = ({ src, children, height }) => {
  return (
    <LazyLoad
      height={height}
      debounce={200}
      placeholder={<div style={{ height: height, background: "#d90429" }} />}
    >
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: height,
        }}
      >
        {children}
      </div>
    </LazyLoad>
  );
};

export default LazyBackground;
