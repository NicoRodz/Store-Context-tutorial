import React, { useEffect, useState } from 'react';

import availableProducts from 'src/Assets/json/availableProducts.json';
import { IProduct } from 'src/types/Products';

const INITIAL_STATE = {
    addProductToCart: (productId: string) => null,
    availableProductsForUser: [],
    products: [],
    removeProductFromCart: (productId: string) => null,
    shoppingCart: [],
}
export const AppContext = React.createContext<IAppContext>(INITIAL_STATE)

type ActionOverProduct = (productId: string) => void;
interface IAppContextState {
    products: IProduct[]
    shoppingCart: IProduct[]
    availableProductsForUser: IProduct[]
}
interface IAppContext extends IAppContextState {
    addProductToCart: ActionOverProduct;
    removeProductFromCart: ActionOverProduct;
}
interface IAppContextProvider {
    children: React.ReactChild
}

const AppContextProvider = ({children}: IAppContextProvider) => {
    const [appState, setAppState] = useState<IAppContextState>(INITIAL_STATE);
    useEffect(()=> {
        setTimeout(() => {
            setAppState((prevState) => ({
                ...prevState,
                products: availableProducts
            }))
        }, 2000)
    }, []);

    function _addProductToCart(productId: string) {
        const itemIndex = appState.shoppingCart.findIndex((item)=> item.id === productId)

        if (itemIndex === -1) {
            const product = appState.products.find((item) => item.id === productId);
            if (product) {
                const newShoppingCart = appState.shoppingCart;
                newShoppingCart.push(product)
                setAppState((prevState) => ({
                    ...prevState,
                    shoppingCart: newShoppingCart,
                }))
            }
        }
    }

    function _removeProductFromCart(productId: string) {
        const newCart = appState.shoppingCart.filter((item) => item.id !== productId);
        setAppState((prevState) => ({
            ...prevState,
            shoppingCart: newCart
        }))
    }

    const availableActions = {
        addProductToCart: _addProductToCart,
        removeProductFromCart: _removeProductFromCart,
    }


    const userProductsIds = appState.shoppingCart.map(product => product.id)
    const availableProductsForUser = appState.products.filter((product) => !userProductsIds.includes(product.id))

    return (
        <AppContext.Provider
            value={{
                ...appState,
                ...availableActions,
                availableProductsForUser
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;