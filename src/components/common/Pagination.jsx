// import React, { Component } from 'react';
//
// class Pagination extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
//       currentPage: 1,
//       todosPerPage: 3,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id),
//     });
//   }
//   render() {
//     const { todos, currentPage, todosPerPage } = this.state;
//     // Logic for displaying current todos
//     const indexOfLastTodo = currentPage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
//     const renderTodos = currentTodos.map((todo, index) => {
//       return <li key={index}>{todo}</li>;
//     });
//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//       pageNumbers.push(i);
//     }
//     const renderPageNumbers = pageNumbers.map(number => {
//       return (
//         <li
//           style={{ float: 'left', padding: 5, margin: 5, cursor: 'pointer', background: 'orange' }}
//           key={number}
//           id={number}
//           onClick={this.handleClick}
//         >
//           {number}
//         </li>
//       );
//     });
//     return (
//       <div>
//         <ul>
//           {renderTodos}
//         </ul>
//         <ul style={{ listStyleType: 'none' }}>
//           {renderPageNumbers}
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default Pagination;

import React, { Component } from 'react';

const propTypes = {
  items: React.PropTypes.array.isRequired,
  onChangePage: React.PropTypes.func.isRequired,
  initialPage: React.PropTypes.number
};

const defaultProps = {
  initialPage: 1,
};

class Pagination extends React.Component {
  state = { pager: {} };
  
  // componentWillMount() {
  //   // set page if items array isn't empty
  //   if (this.props.items && this.props.items.length) {
  //     this.setPage(this.props.initialPage);
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   // reset page if items array has changed
  //   if (this.props.items !== prevProps.items) {
  //     this.setPage(this.props.initialPage);
  //   }
  // }
  
  data = ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'];
  
  setPage(page) {
    var items = this.data;
    var pager = this.state.pager;
    if (page < 1 || page > pager.totalPages) {
      return;
    }
    // get new pager object for specified page
    pager = this.getPager(items.length, page);
    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    // update state
    this.setState({ pager: pager });
    // call change page function in parent component
    this.onChangePage(pageOfItems);
  }
  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;
    // default page size is 10
    pageSize = pageSize || 5;
    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);
    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
  render() {
    var pager = this.state.pager;
    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }
    return (
      <ul className="pagination">
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(1)}>First</a>
        </li>
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
        </li>
        {pager.pages.map((page, index) =>
          <li key={index} className={pager.currentPage === page ? 'active' : ''}>
            <a onClick={() => this.setPage(page)}>{page}</a>
          </li>
        )}
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
        </li>
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
        </li>
      </ul>
    );
  }
}

// Pagination.propTypes = propTypes;
// Pagination.defaultProps = defaultProps;

export default Pagination;
