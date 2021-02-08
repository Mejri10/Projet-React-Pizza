import React, { Component } from 'react';
import { connect } from 'react-redux'
import { GlobalStyle } from '../../globalStyles';
import Feature from '../Feature';
import Footer from '../Footer';
import Hero from '../Hero';
import Products from '../Products';

class Home extends Component {
    
    render() {
        var productData = this.props.productData;
        var productDataTwo = this.props.productDataTwo;
        return (
            <div>
            {/* <GlobalStyle />
      <Hero /> */}
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      {/* <Footer /> */}
      </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
      productData:state.productData,
      productDataTwo:state.productDataTwo
      // items: state.items
    }
  }

export default connect(mapStateToProps)(Home ) 