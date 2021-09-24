import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import CarouselData from "./CarouselData";

export default function Ecommerce() {
  return (
    <div className="container mt-5">
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-5 text-center ">
            <div className="col-12 pb-5">
              <h5>
                <FiArrowDownRight style={{ color: "#ffc038" }} />
                Fully responsive
              </h5>
              <p>
                Facilis ipsum reprehenderit nemo molestias.
                <br />
                Aut cum mollitia reprehenderit.
              </p>
            </div>
            <div className="col-12 pb-5">
              <h5>
                <FiArrowDownRight style={{ color: "#ffc038" }} />
                Fully responsive
              </h5>
              <p>
                Facilis ipsum reprehenderit nemo molestias.
                <br />
                Aut cum mollitia reprehenderit.
              </p>
            </div>
            <div className="col-12 pb-5">
              <h5>
                <FiArrowDownRight style={{ color: "#ffc038" }} />
                Fully responsive
              </h5>
              <p>
                Facilis ipsum reprehenderit nemo molestias.
                <br />
                Aut cum mollitia reprehenderit.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-md-5">
            <img src={CarouselData[3]} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
