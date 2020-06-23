import * as React from 'react';
import shoppingCart from 'src/Assets/Icons/shopping-cart.svg';

import '../ShoppingCart.css';

const ShoppingCartIcon = () => {
    return (
        <div>
            <img className="cart-icon" src={shoppingCart} />
        </div>
    )
}

export default ShoppingCartIcon;