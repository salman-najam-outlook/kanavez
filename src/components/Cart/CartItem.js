import React from 'react';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto my-auto col-lg-2">
                <img src={img} style={{ width: '5rem', height: "6 rem" }} className="img-fluid" alt={title} />
            </div>
            <div className="col-10 mx-auto my-auto col-lg-2">
                <span className="d-lg-none">Title:</span> {title}
            </div>
            <div className="col-10 mx-auto my-auto col-lg-2">
                <span className="d-lg-none">Price:</span> {price}
            </div>
            <div className="col-10 mx-auto my-5 col-lg-2 my-2 my-lg-0 p-t8px">
                <div className="d-flex justify-content-center my-auto">
                    <div className="my-4">
                        <span className="btn btn-black mx-" onClick={() => decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto my-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto my-auto col-lg-2">
                <strong>${total}</strong>
            </div>
        </div>
    )
}