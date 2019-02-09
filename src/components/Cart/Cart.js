import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColums';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
    render() {
        return (
            <section className="py-2 m-bt-30px">
                <ProductConsumer>
                    {(value) => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title ptitle="My Cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        }
                        else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;