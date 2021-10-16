import React from "react";
import "./App.css";

import LifecycleCounter from "./components/LifecycleCounter";

class App extends React.Component {

  state = {
    counterComponentIsActive: false
  }

  toggleCounter = () => {
    this.setState(prevState => ({
      counterComponentIsActive: !prevState.counterComponentIsActive
    }))
  }

  render(){
    return (
      <div className="App">
        <h1> Hello Lifecycles ♲ </h1>
  
        <hr />
  
        {/* <LifecycleCounter /> */}

      <button onClick={this.toggleCounter}> 
        { this.state.counterComponentIsActive ? "Unmount" : "Mount" } 
      </button>

      { this.state.counterComponentIsActive && <LifecycleCounter /> }  
      </div>
    );
  }
}


export default App;
