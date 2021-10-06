import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    console.log(this.props);

    const { movieData } = this.props;
    return (
      <div key={movieData.title}>
        <h1>
          {movieData.title} - {movieData.genre}
        </h1>
        <p>{movieData.director}</p>
      </div>
    );
  }
}
