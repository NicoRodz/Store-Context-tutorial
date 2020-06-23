import React from 'react';

import shoppingCartSvg from 'src/Assets/Icons/shopping-cart.svg';
import { AppContext } from 'src/providers/AppContext';
import '../ShoppingCart.css';

const ShoppingCartIcon = () => {
    const { shoppingCart } = React.useContext(AppContext)

    return (
        <div>
            <img className="cart-icon" src={shoppingCartSvg} />
            {
                shoppingCart.length > 0 &&
                <div className="products-count-badge">{shoppingCart.length}</div>
            }
        </div>
    )
}

export default ShoppingCartIcon;