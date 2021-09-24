import React from "react";
import Navbar from "./Navbar";
import Slider from "react-slick";
import Section1Carousel from "./Section1Carousel";
function Section1() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#ffc038" }}>
      <div
        className="container pt-5 pb-5"
        style={{ color: "white", fontWeight: "500" }}
      >
        <div className="row pt-3">
          <div className="col-12 col-md-6">
            <h4 style={{ color: "black" }}>
              UNIQUE-TECH APP <br />
              DEVELOPMENT
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco. laboris
              enim ad minim veniam, quis nostrud exercitation ullamco. laboris
              enim ad minim veniam, quis nostrud exercitation ullamco. laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit. sunt in culpa qui
              officia deserunt mollit.
            </p>
            <button type="button" class="btn btn-dark">
              View More
            </button>
          </div>
          <div className="col-12 col-md-6 ">
            <Section1Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section1;
