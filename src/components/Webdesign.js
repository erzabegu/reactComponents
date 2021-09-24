import React from "react";
import CarouselData from "./CarouselData";

export default function Webdesign() {
  return (
    <div className="container mt-5 mb-4">
      <div className="col-7 mx-auto text-center pb-3">
        <img src={CarouselData[5]} className="img-fluid" />
        <h4 className="pt-3">Team members</h4>
        <p>
          Making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for 'lorem ipsum' will uncover many web sites still in
          their infancy. Various versions have evolved over the years, sometimes
          by accident, sometimes on purpose (injected humour and the like)
        </p>
      </div>
    </div>
  );
}
