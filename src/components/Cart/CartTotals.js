import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button className="btn btn-danger" onClick={()=>clearCart()}>Clear Cart</button>
                        </Link>
                        <div className="my-3">
                        <h5>
                           Sub Total: <strong>PKR.{cartSubTotal}/-</strong> 
                        </h5>
                        <h5>
                           Tax: <strong>PKR.{cartTax}/-</strong> 
                        </h5>
                        <h5>
                           Total: <strong>PKR.{cartTotal}/-</strong> 
                        </h5>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}