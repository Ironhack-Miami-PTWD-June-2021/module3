import React, { Component } from "react";
import { Link } from "react-router-dom";

import { serviceAuthors } from "../../service";

export default class Author extends Component {
  state = {};
  componentDidMount() {
    serviceAuthors.getAuthor(this.props.match.params.id).then(({ author }) => {
      console.log(author);
      this.setState({
        author,
      });
    });
  }

  render() {
    console.log(this.state.author);
    return (
      <div>
        This
        <h1>{this.state.author?.name} </h1>
        <ul>
          {this.state.author?.books.map((book) => (
            <li>
              <Link to={`/books/${book._id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
