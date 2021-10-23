import React from "react";
import "./App.css";
import { serviceAuthors, serviceBooks } from "./service/index";
import authService from "./service/auth-service";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import List from "./components/Authors/List";
import ListBooks from "./components/Books/List";
import Author from "./components/Authors/Author";
import Book from "./components/Books/Book";
import Signup from "./components/Auth/Signup";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    authors: null,
    user: null,
    loading: true,
  };
  componentDidMount() {
    authService.getSession().then((data) => {
      console.log(data);
      const { user } = data;
      this.setState({
        user,
        loading: false,
      });
    });
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
        <Navbar user={this.state.user} loading={this.state.loading} />
        <Switch>
          {this.state.user && (
            <Route
              exact
              path="/authors"
              render={() => <List authors={this.state.authors} />}
            />
          )}
          <Route
            exact
            path="/books"
            render={({ history, location, match }) => (
              <ListBooks
                books={this.state.books}
                history={history}
                location={location}
                match={match}
              />
            )}
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
          <Route exact path="/blah" component={Navbar} />
        </Switch>
      </div>
    );
  }
}

export default App;
