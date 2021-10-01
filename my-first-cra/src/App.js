import React, { Component } from "react";
import "./App.css";

class App extends Component {
  capitalize = (first, last) => {
    return `${first[0].toUpperCase() + first.slice(1)} ${
      last[0].toUpperCase() + last.slice(1)
    }`;
  };

  render() {
    const students = ["Kyle", "Luis", "Fernando"];

    const student = {
      firstName: "luis",
      lastName: "quintero",
      age: 26,
      proffession: "web dev",
    };

    return (
      <div className="App">
        <h1>This is our title</h1>
        <div>
          <h2>React rocks 2021</h2>
        </div>
        <h3>Students: </h3>
        <ul className="studentList">
          {students.map((student, index) => {
            return <li key={index}>{student}</li>;
          })}
        </ul>

        <h3>
          Hi {this.capitalize(student.firstName, student.lastName)}. Happy{" "}
          {student.age + 1} birthday! Hope you like being a{" "}
          {student.proffession}
        </h3>
      </div>
    );
  }
}

export default App;
