import React from "react";
import Fade from "react-reveal/Fade";
import CarouselData from "./CarouselData";
function Section2() {
  return (
    <div style={{ marginTop: "400" }}>
      <div className="container mx-auto mt-5 pt-5" id="section2">
        <Fade left>
          <div className="col-3 mx-auto pb-5">
            <button type="button" className="btn btn-dark  ">
              WHAT DO WE DO
            </button>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md-6 ">
              <img src={CarouselData[2]} className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 ">
              <h4 className="text-center ">Web Design</h4>
              <p className="text-center">
                Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est. laboru
              </p>
              <div className=" col-3 mx-auto">
                <button type="button" class="btn btn-warning">
                  See more
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
export default Section2;
