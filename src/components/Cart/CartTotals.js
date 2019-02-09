import React from 'react';
import { Link } from 'react-router-dom';
import CartPayPalButton from './CartPayPalButton';

export default function CartTotals({ value, history }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="col-12 mt-2 mr-sm-2 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button className="btn btn-danger" onClick={()=>clearCart()}>Clear Cart</button>
                        </Link>
                        <div className="my-3">
                        <h5>
                           Sub Total: <strong>${cartSubTotal}</strong> 
                        </h5>
                        <h5>
                           Tax: <strong>${cartTax}</strong> 
                        </h5>
                        <h5>
                           Total: <strong>${cartTotal}</strong> 
                        </h5>
                        </div>
                        <CartPayPalButton total={cartTotal} clear={clearCart} history={history} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}