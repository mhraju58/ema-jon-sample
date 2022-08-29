import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const { img, name, seller, price, stock } = (props.product);
    return (
        <div className='product'>
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className='product-name'>{name}</h4>
                <p><small>Seller: {seller}</small></p>
                <h5>Price: ${price}</h5>
                <p><small>Stock: {stock} available</small></p>
                <button className='add-to-cart'
                    onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to cart
                </button>
            </div>
        </div >
    );
};

export default Product;