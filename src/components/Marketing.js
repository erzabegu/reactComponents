import React from "react";
import CarouselData from "./CarouselData";

export default function Marketing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <img src={CarouselData[4]} className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 pt-5">
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia,
              <br /> there live the blind texts. Separated they live in
              <br /> there live the blind texts. Separat Bookmarksgrove
            </p>
            <ul className="text-muted">
              <li> Front-end Design</li>
              <li> Branding</li>
              <li> Information Architecture</li>
              <li> Data Gathering</li>
              <li> Data Gathering</li>
              <li> Data Gathering</li>
              <li> Data Gathering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
