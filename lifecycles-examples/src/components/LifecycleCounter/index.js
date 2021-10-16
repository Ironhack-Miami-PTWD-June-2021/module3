import React from "react";


class LifecycleCounter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }

        console.log("1️⃣ --> CONSTRUCTOR");
    }

    increment = () => {
        // this.setState({ 
        //     count: this.state.count + 1
        // })

        // this.setState({ 
        //     count: this.state.count + 1
        // })

        // this.setState({ 
        //     count: this.state.count + 1
        // })

        // this.setState({ 
        //     count: this.state.count + 1
        // })


        this.setState( prevState => ({
            count: prevState.count + 1
        }))

        // this.setState( prevState => ({
        //     count: prevState.count + 1
        // }))

        // this.setState( prevState => ({
        //     count: prevState.count + 1
        // }))

        // this.setState( prevState => ({
        //     count: prevState.count + 1
        // }))
    }

    componentDidMount(){
        console.log("3️⃣ ---> COMPONENT DID MOUNT");
        // we use it for API calls the most
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("4️⃣ ---> COMPONENT DID UPDATE");

        console.log(prevProps, prevState, snapshot);

        // if(this.props.name !== prevProps.name){
        //     this.something(this.props.name)
        // }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        return "5️⃣ --->  Get Snapshot Before Update"
    }

    componentWillUnmount(){
        console.log("6️⃣ ---> COMPONENT WILL UNMOUNT (🗑)")
    }


    render(){
        console.log("2️⃣ --> RENDER");
        return (
            <> 
                <h3> Lifecycle Counter Component </h3> 

                <button onClick={this.increment}> { this.state.count } </button>
            </>
        )
    }
}

export default LifecycleCounter;