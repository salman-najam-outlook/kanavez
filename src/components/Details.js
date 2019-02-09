import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, title, colors, code, company, img, price, description, inCart } = value.detailProduct;
                    return (
                        <div className="container py-2">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted my-2 title-color">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row m-bt-30px">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                                    <img src={img} className="img-fluid" alt="Product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                                    <h4><b>Brand:</b> {company}</h4>
                                    <h4><b>Available Color:</b> {colors}</h4>
                                    <h4><b>Code:</b> {code}</h4>
                                    <h4><b>Price:</b> ${price}</h4>
                                    <h4><b>Description:</b> {description}</h4>
                                    <br></br><br></br>
                                    <Link to="/">
                                        <button className="btn btn-danger"><span className="fas fa-angle-double-left"></span>&nbsp;&nbsp;&nbsp;Back to main</button>
                                    </Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <button
                                        disabled={inCart ? true : false}
                                        className="btn btn-danger"
                                        onClick={() => { value.addToCart(id); value.openModal(id); }}>
                                        <span className="fas fa-cart-plus"></span>
                                        &nbsp;&nbsp;&nbsp;{inCart ? "Already in cart" : "Add to cart"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }}

            </ProductConsumer>
        );
    }
}

export default Details;