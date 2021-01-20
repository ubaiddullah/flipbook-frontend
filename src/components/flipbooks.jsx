import React, { Component } from "react";
import { getFlipbooks, deleteFlipbook } from "./../services/flipbookService";
import { Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import FlipbooksCard from "./flipbooksCard";
import Banner from "./common/banner";
import SearchBox from "./searchBox";
import Pagination from "./common/pagination";

class FlipBooks extends Component {
  state = {
    flipbooks: [],
    bannerImg: "/img/banner.jpg",
    currentPage: 1,
    pageSize: 6,
    searchQuery: "",
  };

  async componentDidMount() {
    const { data } = await getFlipbooks();
    this.setState({ flipbooks: data });
  }

  handleDelete = async (flipbook) => {
    const originalFlipbooks = this.state.flipbooks;
    const flipbooks = originalFlipbooks.filter((f) => f._id !== flipbook._id);
    this.setState({ flipbooks });
    try {
      await deleteFlipbook(flipbook._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("Flipbook has already been deleted");
      this.setState({ flipbooks: originalFlipbooks });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      flipbooks: allFlipbooks,
      searchQuery,
    } = this.state;

    let filtered = allFlipbooks;
    if (searchQuery)
      filtered = allFlipbooks.filter((f) =>
        f.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const flipbooks = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: flipbooks };
  };

  render() {
    const { pageSize, currentPage, searchQuery, bannerImg } = this.state;

    const { totalCount, data: flipbooks } = this.getPagedData();

    const { user } = this.props;

    return (
      <React.Fragment>
        <Banner backgroundImg={bannerImg} />
        <Container>
          <h3 className="text-center" id="menu-heading">
            Flipbooks
          </h3>
          <Row>
            {user && (
              <Link
                to="/flipbooks/new"
                className="btn text-white"
                style={{ backgroundColor: "#5641b3" }}
              >
                New Flipbook
              </Link>
            )}
            <SearchBox
              className="d-inline"
              value={searchQuery}
              onChange={this.handleSearch}
            />
          </Row>
          <Row>
            <FlipbooksCard flipbooks={flipbooks} onDelete={this.handleDelete} />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FlipBooks;
