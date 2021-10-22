import React, { Component } from "react";

import { serviceBooks } from "../../service";

export default class Book extends Component {
  state = {};
  componentDidMount() {
    serviceBooks.getBook(this.props.match.params.id).then(({ book }) => {
      console.log(book);
      this.setState({
        book,
      });
    });
  }

  render() {
    console.log(this.state.books);
    return (
      <div>
        This
        <h1>{this.state.book?.title} </h1>
        <h3>{this.state.book?.description}</h3>
      </div>
    );
  }
}
