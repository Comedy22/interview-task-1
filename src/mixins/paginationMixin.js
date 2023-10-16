const paginationMixin = {
  paginate: function () {
    return Math.ceil(this.state.totalItems / this.state.itemsPerPage);
  },
  getActiveCurrentPage: function () {
    return typeof this.state.activePage === "number"
      ? this.state.activePage
      : 1;
  },
};

export { paginationMixin };
