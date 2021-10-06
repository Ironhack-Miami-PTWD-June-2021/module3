import React from "react";

const User = (props) => {
    console.log("what is props: ", props);
    const { fullName, bootcamp, capitalize } = props;
    return <div> User is { capitalize(fullName) } and attends { capitalize(bootcamp) } </div>

    // return <div> User is { props.fullName } and attends { props.bootcamp } </div>
}


// THIS IS THE SAME AS THE CODE ABOVE - JUST A BIT SHORTER AND MAYYYYBEEEE CLEANER
// const User = ({ fullName, bootcamp, capitalize }) => {
//     return <div>
//         {capitalize(fullName)} - {bootcamp}
//     </div>
// }

export default User;