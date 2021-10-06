import React from "react";

class LikeButton extends React.Component {
    state = {
        liked: false
    }

    handLikeStatus = () => {
        this.setState({
            liked: !this.state.liked
        }, () => console.log("updated state: ", this.state));
    }

    render(){
        return (
            <div>
                <button onClick={this.handLikeStatus}> 
                    {this.state.liked ? "Unlike" : "Like"} 
                </button>
            </div>
        )
    }
}

export default LikeButton;