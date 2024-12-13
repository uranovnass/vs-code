// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  margin-top: 10px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>&copy; 2024 Тазажан. Все права защищены.</p>
        <FooterLinks>
          <FooterLink href="/about">О нас</FooterLink>
          <FooterLink href="/contact">Контакты</FooterLink>
          <FooterLink href="/privacy">Политика конфиденциальности</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
