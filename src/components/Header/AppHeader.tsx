import * as React from 'react';

import logo from 'src/logo.svg';
import ShoppingCartIcon from '../ShoppingCart/CommonShoppingCart/ShoppingCartIcon';

const AppHeader = () => {
    return (
        <header className="App-header">
            <div className="App-info">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to My Shop</h1>
            </div>
            <div className="App-shipping-cart">
                <ShoppingCartIcon />
            </div>
        </header>
    );
}

export default AppHeader
