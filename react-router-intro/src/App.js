import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import { Route, Switch } from "react-router-dom";

import contacts from "./contacts.json";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list" exact render={() => <List contacts={contacts} />} />
        <Route
          path="/list/:contactID"
          render={(props) => <Contact contacts={contacts} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
