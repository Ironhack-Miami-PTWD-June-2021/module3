import React from "react";
import "./App.css";
import { serviceAuthors, serviceBooks } from "./service/index";
import { Switch, Route } from "react-router-dom";

// components
import List from "./components/Authors/List";
import ListBooks from "./components/Books/List";
import Author from "./components/Authors/Author";
import Book from "./components/Books/Book";
import Signup from "./components/Auth/Signup";

class App extends React.Component {
  state = {
    authors: null,
  };
  componentDidMount() {
    serviceAuthors.getAuthorsList().then((data) => {
      this.setState({
        authors: data.authors,
      });
    });
    serviceBooks.getBooksList().then((data) => {
      this.setState({
        books: data.books,
      });
    });
  }

  render() {
    return (
      <div className="App">
        React rocks
        <Switch>
          <Route
            exact
            path="/authors"
            render={() => <List authors={this.state.authors} />}
          />
          <Route
            exact
            path="/books"
            render={() => <ListBooks books={this.state.books} />}
          />
          <Route
            path="/authors/:id"
            render={(props) => <Author {...props} />}
          />
          <Route path="/books/:id" render={(props) => <Book {...props} />} />

          <Route
            exact
            path="/auth/signup"
            render={(props) => <Signup {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
