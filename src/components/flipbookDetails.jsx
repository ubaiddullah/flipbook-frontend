import React, { Component } from "react";
import { getFlipbook } from "./../services/flipbookService";
import FlipPage from "react-flip-page";
import { Col, Row, Container } from "react-bootstrap";
import Banner from "./common/banner";

class FlipbookDetails extends Component {
  state = {
    flipbook: {
      flipbookImgs: [],
    },
    bannerImg: "/img/banner.jpg",
  };

  async populateFlipbook() {
    const flipbookId = this.props.match.params.id;
    if (!flipbookId) return;
    try {
      const { data } = await getFlipbook(flipbookId);
      this.setState({ flipbook: data });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateFlipbook();
  }

  render() {
    const { flipbook, bannerImg } = this.state;
    const apiEndPoint = process.env.REACT_APP_API_URL;
    let pages = flipbook.flipbookImgs;
    let updatedPages = [];

    pages.map((page) => {
      return updatedPages.push(page.replace(`\\`, `/`));
    });

    return (
      <React.Fragment>
        <Banner backgroundImg={bannerImg} />

        <Container className="mb-5 text-center">
          <Row>
            <Col lg={8} md={12} sm={12} className="offset-2 mt-5">
              <h3 className="text-center" id="flipbook-heading">
                {flipbook.title}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="offset-2">
              <FlipPage
                orientation="horizontal"
                width="700"
                height="380"
                uncutPages="true"
                showSwipeHint="true"
              >
                {updatedPages.map((page) => {
                  return (
                    <article>
                      <img
                        src={`${apiEndPoint}/${page}`}
                        alt=""
                        className="img-fluid"
                      />
                    </article>
                  );
                })}
              </FlipPage>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={12} sm={12} className="offset-2 mt-5">
              <p className="lead">{flipbook.description}</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FlipbookDetails;
