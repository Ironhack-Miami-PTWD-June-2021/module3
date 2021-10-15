import React, { Component } from "react";
import AddProduct from "../AddProduct";


//                      React.Component
class ProductList extends Component {
    state = {
        showInStock: false,
        products: [
            {
                _id: "ask89",
                name: "iPhone",
                price: 799.99,
                inStock: true
            },
            {
                _id: "lop876",
                name: "sweatshirt",
                price: 29.99,
                inStock: false
            },
            {
                _id: "97uj0",
                name: "coffee mug",
                price: 4.50,
                inStock: true
            }
        ]
    };

    listProducts = () => {
        return this.state.products.map(product => {
            return (
                (!this.state.showInStock || product.inStock) && (
                    <li key={product._id}>
                        <h3> { product.name } - ${ product.price } </h3>
                        <p> { product.inStock ? <em> In Stock </em> : <em style={{ color: "red" }}> Out of Stock </em> } </p>
                        <button onClick={ () => this.deleteProduct(product) }>Delete</button>
                        <hr />
                    </li>
                )
            )
        })
    }

    addNewProduct = newProduct => {
        // console.log("this is the new product and it is in ProductLis component: ", newProduct);

        const productsCopy = [...this.state.products];

        productsCopy.push(newProduct);

        this.setState({
            products: productsCopy
        });
    }

    deleteProduct = productToBeDeleted => {
        // console.log("to delete: ", productToBeDeleted);

        const allProductsExceptDeletedOne = 
            this.state.products.filter(product => product._id !== productToBeDeleted._id);

        // console.log(allProductsExceptDeletedOne);

        this.setState({
            products: allProductsExceptDeletedOne
        })
    }


    checkStock = () => {
        this.setState({
            showInStock: !this.state.showInStock
        })
    }


    render(){
        return (
            <>
                {/* AddProduct is the CHILD of ProductList component */}
                <AddProduct addProductToProductList={this.addNewProduct} />

                <br/><br/>

                <h1> Products </h1>
                <ul>{this.listProducts()}</ul>

                <br/><br/>

                <button onClick={ () => this.checkStock() }> { this.state.showInStock ? "All products" : "Show In Stock Only" } </button>

            </>
        )
    }
}

export default ProductList;