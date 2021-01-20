import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./common/card";
import auth from "../services/authService";

class FlipbooksCard extends Component {
  details = [
    {
      path: "title",
      content: (flipbook) => (
        <h3 className="text-center">
          {" "}
          <Link to={`/flipbook-details/${flipbook._id}`}>{flipbook.title}</Link>
        </h3>
      ),
    },
  ];

  deleteButton = {
    key: "delete",
    content: (flipbook) => (
      <button
        onClick={() => this.props.onDelete(flipbook)}
        className="btn btn-danger my-2"
      >
        Delete
      </button>
    ),
  };

  editButton = {
    key: "edit",
    content: (flipbook) => (
      <Link to={`/flipbooks/${flipbook._id}`} className="btn btn-secondary ">
        Edit
      </Link>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) {
      this.details.push(this.deleteButton);
      this.details.push(this.editButton);
    }
  }

  render() {
    const { flipbooks } = this.props;

    return <Card details={this.details} data={flipbooks} />;
  }
}

export default FlipbooksCard;
