import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, pdt) => (total + pdt.price), 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    const tax = total / 10;

    let shipping = 0;
    if (total > 100) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const grandTotal = total + tax + shipping;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className='cart-details'>
            <h2>Order Summary</h2>
            <p>Item Ordered: {cart.length}</p>
            <p>Product Price: ${formatNumber(total)} </p>
            <p>Vat+Tax: ${formatNumber(tax)}</p>
            <p>Shipping: ${formatNumber(shipping)}</p>
            <hr />
            <p>Grand Total: ${formatNumber(grandTotal)} </p>

        </div>
    );
};

export default Cart;