import React, { useEffect, useState } from 'react';

import availableProducts from 'src/Assets/json/availableProducts.json';
import { IProduct } from 'src/types/Products';

const INITIAL_STATE = {
    addProductToCart: (productId: number) => null,
    products: [],
    removeProductFromCart: (productId: number) => null,
    shoppingCart: [],
}
export const AppContext = React.createContext<IAppContext>(INITIAL_STATE)

type ActionOverProduct = (productId: number) => void;
interface IAppContextState {
    products: IProduct[]
    shoppingCart: IProduct[]
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

    function _addProductToCart(productId: number) {
        return null;
    }

    function _removeProductFromCart(productId: number) {
        return null;
    }

    const availableActions = {
        addProductToCart: _addProductToCart,
        removeProductFromCart: _removeProductFromCart,
    }

    return (
        <AppContext.Provider
            value={{
                ...appState,
                ...availableActions,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;