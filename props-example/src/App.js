import logo from './logo.svg';
import './App.css';

// 1.
import Greeting from './components/Greeting';

// 2.
import Color from './components/Color';

// 3.
import Welcome from './components/Welcome';

// 4.
import User from './components/User';

// 5.
import UserList from './components/UserList';



// create a variable with student name
  // display the name
// capitalize both first and last name
// create and invoke a function that will capitalize just first letters of student's full name
// utilize image logo and display it in the app - so it still rotates

const name = "michael rodiles";

function capitalize(fullName){
  const upper = fullName
  .split(" ")
  .map(el => el.charAt(0).toUpperCase() + el.slice(1))
  .join(" ")

  return upper;
}

function App() {
  return (
    <div className="App">
      <div>
        <h2> { name } </h2>

        <h3> { name.toUpperCase() } </h3>

        <h3> { capitalize(name) } </h3>

        <img src={logo} alt="react logo" width="200" className="App-logo" />
      </div>

      <Greeting firstName="Rodrigo" />
      <Greeting firstName="Joe" />
      <Greeting firstName="Fernando" />

      <Color favColor="pink" />

      <Welcome />

      <User fullName="david landes" bootcamp="web dev" capitalize={capitalize} />

      <Color favColor="blue" />

      <UserList location="Miami">
        <User fullName="marcos palacios" bootcamp="web dev" capitalize={capitalize}  />
        <User fullName="sandra boskovic" bootcamp="cyber security" capitalize={capitalize} />
        <User fullName="stefan culafic" bootcamp="data analytics" capitalize={capitalize} />
        <User fullName="joe portelli" bootcamp="ux ui" capitalize={capitalize} />
        <User fullName="camilo espinosa" bootcamp="web dev" capitalize={capitalize} />
        <User fullName="kyle pla" bootcamp="data analytics" capitalize={capitalize} />
      </UserList>
    </div>
  );
}

export default App;
