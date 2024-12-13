import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  width: 250px;
`;

const ProductCard = ({ title, image, price }) => {
  return (
    <ProductCardContainer>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button>Add to Cart</button>
    </ProductCardContainer>
  );
};

export default ProductCard;
