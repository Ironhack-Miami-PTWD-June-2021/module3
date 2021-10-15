import React, { Component } from "react";

class AddProduct extends Component {
    state = {
        _id: "",
        name: "",
        price: 0,
        inStock: false
    }

    // generic method that updates every field in the state based on the changes in input fields
    // ❤️ it is reusable for any form ever
    onChangeHandler = event => {
        // console.log(event.target.value);

        let { name, value, checked } = event.target;
        
        // console.log(name, value);

        if (name === "inStock"){
            value = checked;
        }

        // this.state["inStock"] = true;

        // [name] in square brackets is to create a dynamic key name in the object
        this.setState({
            [name]: value
        }, () => console.log("state in onChangeHandler: ", this.state))
    }

    onSubmitHandler = event => {
        //  this line is mandatory: it prevents the default HTML submit button behavior
        event.preventDefault();
        
        console.log("state in onSubmitHandler", this.state);

        // console.log(this.props.addProductToProductList);

        this.props.addProductToProductList(this.state);

        this.setState({
            _id: "",
            name: "",
            price: 0,
            inStock: false
        })
    }
    

    render(){
        // const { _id, name, price, inStock } = this.state;

        return (
            <>
                <form onSubmit={this.onSubmitHandler}>
                    <label> ID: 
                        <input 
                            name="_id"
                            type="text"
                            value={this.state._id}
                            onChange={this.onChangeHandler}
                        />
                    </label>
                    <br />
                    <label> Name: 
                        <input 
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeHandler}
                        />
                    </label>
                    <br />
                    <label> Price: 
                        <input 
                            name="price"
                            type="number"
                            value={this.state.price}
                            onChange={this.onChangeHandler}
                        />
                    </label>
                    <br />
                    <label> In Stock: 
                        <input 
                            name="inStock"
                            type="checkbox"
                            value={this.state.inStock}
                            onChange={this.onChangeHandler}
                        />
                    </label>

                    <br /><br />

                    <button>Save New Product</button>
                </form>
            </>
        )
    }
}


export default AddProduct;