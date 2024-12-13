import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-image: url('path-to-image.jpg');
  background-size: cover;
  text-align: center;
  padding: 100px 0;
  color: white;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <h1>Fresh Organic Products</h1>
      <p>Discover the best organic produce for your family</p>
      <button>Shop Now</button>
    </HeroContainer>
  );
};

export default HeroSection;
