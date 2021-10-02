// FUNCTIONAL COMPONENT

// make sure to import React
import React from "react";


// function Greeting(){
//     const message = "Hello Luis!";

//     return <div> { message } </div>
// }

const Greeting = (props) => {
    return <div> Hello { props.firstName }! </div>
}


// make sure you export the component
export default Greeting;