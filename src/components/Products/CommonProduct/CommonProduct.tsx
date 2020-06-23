import * as React from 'react';

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
        <div onClick={handleOnClick}>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
        </div>
    )
}

export default CommonProduct;