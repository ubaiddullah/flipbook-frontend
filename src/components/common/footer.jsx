import React from "react";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row text-center text-white">
          <div className="col-md-4 py-2">
            <img
              className="mt-2"
              height="160px"
              width="160px"
              src="/img/logo.png"
              alt="logo"
            />
          </div>

          <div className="col-md-4 py-2">
            <h4 className="text-white">Location</h4>
            <p className="pt-2">50-Gulberg-3</p>
            <p>street 10</p>
            <p>Lahore, Pakistan</p>
          </div>

          <div className="col-md-4 py-2">
            <h4 className="text-white">Contact Us</h4>
            <p className="pt-2">Phone: +92-330-5258542</p>
            <p>Email: Emags@emags.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
