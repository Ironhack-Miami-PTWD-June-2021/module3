import React from "react";

const UserList = (props) => {
    return <div> 
     <h2>{ props.location } Campus </h2>
    {props.children} 
    </div>
}

export default UserList;