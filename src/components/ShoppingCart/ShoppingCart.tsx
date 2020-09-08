import React, { useContext } from 'react';
import { AppContext } from 'src/providers/AppContext';
import CommonProduct from '../Products/CommonProduct/CommonProduct';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const { shoppingCart, removeProductFromCart } = useContext(AppContext)

    return (
        <div>
            <h3>Shopping Cart</h3>
            <div className="shoping-cart-container">
                {
                    shoppingCart.length > 0
                    ?
                        shoppingCart.map((product) => (
                            <CommonProduct
                                id={product.id}
                                title={product.title}
                                description={product.description}
                                key={product.id}
                                onClickProduct={removeProductFromCart}
                            />
                        ))
                    :
                        'No data'
                }
            </div>
        </div>
    )
}

export default ShoppingCart;