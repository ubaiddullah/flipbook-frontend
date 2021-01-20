import React, { Component } from "react";
import _ from "lodash";

class Card extends Component {
  renderDetail = (item, detail) => {
    if (detail.content) return detail.content(item);
    const data = _.get(item, detail.path);
    return (
      <p className="px-3">
        <strong>{detail.label}</strong> {data}
      </p>
    );
  };

  createKey = (item, detail) => {
    return item._id + (detail.path || detail.key);
  };

  render() {
    const { data, details } = this.props;
    const { REACT_APP_API_URL: imgUrl } = process.env;

    return (
      <React.Fragment>
        <div className="row">
          {data.map((item) => (
            <div key={item._id} className="col-md-4 col-sm-6">
              <div className="card mb-4 pb-4 text-center">
                <img
                  className="card-img-top img-fluid"
                  style={{ height: "200px" }}
                  src={imgUrl + "/" + item.flipbookImgs[0]}
                  alt={item.title}
                />
                <div className="card-body"></div>
                {details.map((detail) => (
                  <div key={this.createKey(item, detail)}>
                    {this.renderDetail(item, detail)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
