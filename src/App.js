import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/pages/Sidebar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import ProductsPage from './components/pages/ProductsPageInProgress';
import Statistics from './components/pages/Statistics';

import ProductAdd from './components/productsPagesInProgress/ProductAdd';
import ProductEdit from './components/productsPagesInProgress/ProductEdit';

import MOCK_DATA from './MOCK_DATA.json';

import './App.css';

function App() {
  localStorage.setItem('data', JSON.stringify(MOCK_DATA));

  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/products-new' component={ProductsPage} />
          <Route path='/statistics' component={Statistics} />
          <Route path='/about' component={About} />
          <Route path='/add' component={ProductAdd} />
          <Route path='/edit' component={ProductEdit} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
