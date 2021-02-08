// import React from 'react';
import React, { Component } from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';





// const Products = ({ heading, data }) => {
  class Products extends Component{
   handleClick = (id)=>{
    debugger;
    this.props.addToCart(id); 
  };
  render(){
  return (
    
    <ProductsContainer>
      <ProductsHeading>{this.props.heading}</ProductsHeading>
      <ProductWrapper>
        {this.props.data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price} DT</ProductPrice>
                <ProductButton onClick={()=>{this.handleClick(product.id)}}>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );}
  
};

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}

export default connect(null,mapDispatchToProps)(Products);
