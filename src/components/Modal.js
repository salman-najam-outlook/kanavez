import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-3">
                                            <h4 className="title-color">{title}</h4>
                                            <h6>has been added into cart!</h6>
                                            <img src={img} className="img-fluid p-2" alt={title} />
                                            <h6 className="text-muted">Price: ${price}</h6>
                                            <Link to="/">
                                                <button onClick={()=>closeModal()}
                                                className="btn btn-danger">
                                                Continue Shopping?
                                                </button>
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;
                                            <Link to="/cart">
                                                <button onClick={()=>closeModal()}
                                                className="btn btn-danger">
                                                Go to Cart
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background: white;
}
`;