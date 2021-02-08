import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
// import { Cart } from './components/Cart/Cart';

function App() {
  return (

    <Router>
      
      {/* <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer /> */}
      <switch>
      <GlobalStyle />
      <Hero />
      <Route exact path="/" component={Home}/>
      <Route path="/cart" component={Cart}/>
      <Footer />
      </switch>
    </Router>
  );
}


export default App;
