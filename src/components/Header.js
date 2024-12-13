// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Контейнер хедера
const HeaderContainer = styled.header`
  background-color: #4caf50; /* Зеленый фон */
  padding: 20px 0;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Логотип
const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  letter-spacing: 2px;
  padding-left: 20px;
  display: flex;
  align-items: center;

  &:hover {
    color: #e4e4e4;
  }
`;

// Навигация
const Nav = styled.nav`
  display: flex;
  gap: 40px;
  padding-right: 20px;
`;

// Элемент навигации
const NavItem = styled.li`
  list-style: none;
  display: inline-block;
`;

// Ссылки
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #f5f5f5; /* Светлый оттенок на hover */
    transform: scale(1.05); /* Немного увеличивается при наведении */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      {/* Логотип */}
      <Logo to="/">Tazajan</Logo>
      
      {/* Навигация */}
      <Nav>
        <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
        <NavItem><StyledLink to="/about">About</StyledLink></NavItem>
        <NavItem><StyledLink to="/products">Products</StyledLink></NavItem>
        <NavItem><StyledLink to="/contact">Contact</StyledLink></NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
