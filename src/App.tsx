import * as React from 'react';
import './App.css';

import AppHeader from './components/Header/AppHeader';
import OurProducts from './components/Products/OurProducts';
import AddProductToCard from './components/ShoppingCart/CommonShoppingCart/AddProductToCart';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import AppContextProvider from './providers/AppContext';

const App = () => (
    <AppContextProvider>
        <div className="App">
            <AppHeader />
            <div className="App-body">
                <div className="app-body-container">
                    <AddProductToCard />
                    <OurProducts />
                </div>
                <div className="app-body-container">
                    <ShoppingCart />
                </div>
            </div>
        </div>
    </AppContextProvider>
);

export default App;
