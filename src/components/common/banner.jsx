import React, { Component } from "react";

class Banner extends Component {
  render() {
    const { backgroundImg } = this.props;

    return (
      <React.Fragment>
        <div
          className="banner-section"
          style={{
            background: `url(${backgroundImg} )`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
            position: "relative",
          }}
        >
          <div className="banner-overlay"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
