import * as React from 'react';
import './App.css';

import AppHeader from './components/Header/AppHeader';
import OurProducts from './components/Products/OurProducts';
import AddProductToCard from './components/ShoppingCart/CommonShoppingCart/AddProductToCart';

const App = () => (
    <div className="App">
        <AppHeader />
        <div className="App-body">
          <AddProductToCard />
          <OurProducts />
        </div>
    </div>
);

export default App;
