import React from "react";
import Slider from "react-slick";
import Section1 from "./Section1";
import CarouselData from "./CarouselData";
function Section1Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="col-10 ms-auto">
      <Slider>
        {CarouselData.map((i, a) => {
          return <img src={i} style={{ width: "100%" }} />;
        })}
      </Slider>
    </div>
  );
}
export default Section1Carousel;
