import React from "react";
import { MdCall } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
export default function Footer() {
  const d = new Date();

  return (
    <div
      className="container-fluid pb-5"
      id="footer"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <div className="container">
        <div className="col-12 text-center pt-3 pb-3">
          <MdCall style={{ marginRight: "20" }} />
          <MdInfo style={{ marginRight: "20" }} />
          <MdLocationOn />
        </div>
        <div className="row text-center">
          <div className="col-12 col-md-3">
            <h4 className="pb-3">ADDITIONAL LINKS</h4>
            <p>Lorem ipsum dolor sit ament ve wians ismpau</p>
          </div>
          <div className="col-12 col-md-3">
            <h4 className="pb-3">CONTACT US</h4>
            <p>
              Rr.Ylfete Humoll, Prishtine, 4000 Kosove Manhattan, New York +987
              654 3210
            </p>
          </div>
          <div className="col-12 col-md-3">
            <h4 className="pb-3">GALLERY</h4>
            <p>
              Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet
              ultrices,
            </p>
          </div>
          <div className="col-12 col-md-3">
            <h4 className="pb-3">Services</h4>
            <p>
              Data recovery Computer repair Mobile service Network solutions
              Technical support
            </p>
          </div>
        </div>
      </div>
      <p className="text-center pt-4">
        All rights reserved || {d.getFullYear()} - {d.getMonth()} -{d.getDate()}
      </p>
    </div>
  );
}
