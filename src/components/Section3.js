import React from "react";
import Ecommerce from "./Ecommerce";
import Marketing from "./Marketing";
import Webdesign from "./Webdesign";
import Section2 from "./Section2";
import Fade from "react-reveal/Fade";

export default function Section3() {
  return (
    <div className="container mt-5 mb-5" id="section3">
      <h2
        className="col-12 text-center mt-5  mb-3"
        style={{ fontWeight: "bold" }}
      >
        What do we offer
      </h2>
      <p className="col-8  mx-auto mt-5 mb-5 text-center">
        Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus
        alias autem provident. Odit ab aliquam dolor eius.
      </p>
      <ul
        class="nav nav-pills nav-fil mb-3 col-12"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item  col-4" role="presentation">
          <button
            class="nav-link  active col-12 "
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
          >
            E-commerce
          </button>
        </li>
        <li class="nav-item  col-4 " role="presentation">
          <button
            class="nav-link  col-12"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
          >
            Marketing
          </button>
        </li>
        <li class="nav-item col-4" role="presentation">
          <button
            class="nav-link col-12"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
          >
            Web Design
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel">
          <Ecommerce />
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel">
          <Fade left>
            <Marketing />
          </Fade>
        </div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel">
          <Fade left>
            <Webdesign />
          </Fade>
        </div>
      </div>
    </div>
  );
}
