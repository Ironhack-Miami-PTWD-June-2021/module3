import React from "react";
import "./App.css";
// import Movie from "./components/Movie";

const data = [
  {
    title: "Lord of the Rings",
    director: "Peter Jackson",
    genre: "Adventure",
    awards: "Oscar",
  },
  {
    title: "Star wars",
    director: "George Lucas",
    genre: "Sci-Fi",
    awards: "Golden globe",
  },
  {
    title: "ET",
    director: "Steven Spielberg",
    genre: "Sci-Fi",
    awards: "Oscar, Golden globe",
  },
];

class App extends React.Component {
  state = {
    movies: data,
    counter: 0,
  };

  getMoviesList = (movies) => {
    return movies.map((movie, i) => {
      // return <Movie movieData={movie} key={movie.title} />;
      return (
        <div key={movie.title}>
          <h1>
            {movie.title} -{" "}
            {movie.genre === "Adventure"
              ? "This is an adventure awesome"
              : movie.genre}
          </h1>
          <p>{movie.director}</p>

          <button
            onClick={() => {
              this.setState({
                [movie.title]: !this.state[movie.title],
              });
            }}
          >
            Show awards
          </button>

          {this.state[movie.title] && <p>{movie.awards}</p>}
          <button
            onClick={() => {
              // const movieCopyArr = this.state.movies.filter(
              //   (movieFromFilter) => movieFromFilter.title !== movie.title
              // );
              // console.log(movie.title);

              const movieCopyArr = [...this.state.movies];

              // const indexOfMovieToRemove = movieCopyArr.findIndex((value) => {
              //   return value.title === movie.title;
              // });

              movieCopyArr.forEach((value, i) => {
                if (value.title === movie.title) {
                  movieCopyArr.splice(i, 1);
                }
              });

              this.setState({
                movies: movieCopyArr,
              });
            }}
          >
            Delete a movie
          </button>
        </div>
      );
    });
  };

  render() {
    // const arrayOfNumbers = [1, 2, 3, 4, 5, 6];

    // const arrayOfDivsFromNumbers = arrayOfNumbers.map((number, i) => (
    //   <div key={i}>{number}</div>
    // ));

    // const arrayToFill = [];
    // const whatIsThis = arrayOfNumbers.forEach((number) => {
    //   arrayToFill.push(<div>return this</div>);
    // });
    // console.log(arrayToFill);
    console.log("rerender occured");
    return (
      <div className="App">
        {/* <h1>This is our first h1</h1>
        {arrayOfDivsFromNumbers} */}
        {/* {this.getMoviesList(data)} */}

        {this.getMoviesList(this.state.movies)}
      </div>
    );
  }
}

export default App;
