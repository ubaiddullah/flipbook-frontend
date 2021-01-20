import React, { Component } from "react";
import Banner from "./common/banner";

class About extends Component {
  state = {
    bannerImg: "/img/banner.jpg",
  };

  render() {
    return (
      <React.Fragment>
        <Banner backgroundImg={this.state.bannerImg} />
        <div className="about">
          <div className="container my-5">
            <div className="row mb-5">
              <div className="col-md-6">
                <img
                  src="/img/macbook-preview-e1597596378306.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-6 p-5">
                <p className="lead ">
                  Our mission is to provide the best content to our viewers.
                  <br />
                  We provide the best e-magazines platform there is on the
                  internet. Our Viewers can view their favourite comics and
                  magazines on our website. From political nes magazines to
                  marvel cinematic universe we provide each magazine to our
                  special customers.
                </p>
              </div>
              <hr width="50%" />
            </div>

            <h2 className="mt-5 text-center">Image Gallery</h2>
            <div className="row mt-5">
              <div className="col-md-4">
                <img
                  src="/img/magazine-1.jpg"
                  height="354px"
                  width="236px"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/img/unnamed.jpg"
                  height="354px"
                  width="236px"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/img/mag-2.jpg"
                  height="354px"
                  width="236px"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-4">
                <img
                  src="/img/mag-3.jpg"
                  height="354px"
                  width="236px"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/img/mag-4.jpg"
                  height="354px"
                  width="236px"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <img
                  src="/img/mag-5.jpg"
                  height="354px"
                  width="236px"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
