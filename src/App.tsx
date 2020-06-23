import * as React from 'react';
import './App.css';

import AppHeader from './components/Header/AppHeader';
import OurProducts from './components/Products/OurProducts';
import AddProductToCard from './components/ShoppingCart/CommonShoppingCart/AddProductToCart';
import AppContextProvider from './providers/AppContext';

const App = () => (
    <AppContextProvider>
        <div className="App">
            <AppHeader />
            <div className="App-body">
                <AddProductToCard />
                <OurProducts />
            </div>
        </div>
    </AppContextProvider>
);

export default App;
