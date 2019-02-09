import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 mb-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-1"
                                onClick={() => value.handleDetail(id)}>
                                <Link to='/details'>
                                    <img src={img} className="card-img-top" alt={title} />
                                </Link>
                                <button className="btn btn-danger cart-btn" disabled={inCart ? true : false} onClick={() => { value.addToCart(id); value.openModal(id); }}>
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>Already In Cart</p>) : (<i className="fas fa-cart-plus" />)}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5>
                        ${price}
                    </h5>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        colors: PropTypes.string,
        code: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    })
}

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 0.2s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.2s linear;
}
&:hover{
    .card{
        border:0.04rem solid(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5)
    }
    .card-footer{
        background: rgba(247,247,230);
        color: #dc3545;
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.cart-btn{
    position: absolute;
    bottom:0;
    left:0;
    padding: 0.2rem 0.5rem;
    transform: translate(100%, 100%);
}
.img-container: hover .cart-btn {
    transition: all 0.2s linear;
    transform: translate(0,0);
}
`

export default Product;