import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handleClick = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
    this.props.onPageChange(pageNumber);
  };

  render() {
    const { currentPage } = this.state;
    const { itemsPerPage, totalItems } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    const displayedPageNumbers = pageNumbers.slice(
      Math.max(0, currentPage - 5),
      Math.min(totalPages, currentPage + 5)
    );

    return (
      <div className="pagination">
        {displayedPageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => this.handleClick(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    );
  }
}

export default Pagination;
