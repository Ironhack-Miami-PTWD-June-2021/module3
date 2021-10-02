// CLASS COMPONENT

import React from "react";

class Color extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }
    render(){
        return <hr style={{ border:`5px solid ${this.props.favColor}` }} />
    }
}

export default Color;