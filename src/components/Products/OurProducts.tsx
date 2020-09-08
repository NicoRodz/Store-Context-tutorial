import React, { useContext } from 'react';
import { AppContext } from 'src/providers/AppContext';
import CommonProduct from './CommonProduct/CommonProduct';

const OurProducts = () => {
    const { availableProductsForUser, addProductToCart } = useContext(AppContext);

    return (
        <div>
            <h3>Our Products</h3>
            {
                availableProductsForUser.length > 0
                ? availableProductsForUser.map((product) => (
                        <CommonProduct
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            key={product.id}
                            onClickProduct={addProductToCart}
                        />
                    ))
                :
                    'No data'
            }
        </div>
    );
};

export default OurProducts;