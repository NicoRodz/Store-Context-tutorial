import React from 'react';
import '../products.css';

interface ICommonProduct {
    id: string;
    title: string;
    description?: string;
    onClickProduct: (id: string) => void
};

const CommonProduct = ({id, title, description, onClickProduct}:ICommonProduct) => {
    function handleOnClick(event: React.SyntheticEvent<HTMLDivElement>) {
        onClickProduct(id);
    }

    return (
        <div
            onClick={handleOnClick}
            className="common-product-container"
        >
            <div className="product-title">{title}</div>
            {description && <div className="product-description">{description}</div>}
        </div>
    )
}

export default CommonProduct;