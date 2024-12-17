import React from 'react';
import styled, { keyframes } from 'styled-components';

const PageContainer = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Banner = styled.div`
  background: url('https://oir.mobi/uploads/posts/2021-06/1624431325_1-oir_mobi-p-pshenichnoe-pole-na-zakate-priroda-krasivo-1.jpg') no-repeat center center/cover;
  height: 500px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 2s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
    height: 300px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin: 30px 0;
  transition: color 0.3s ease;

  &:hover {
    color: #4caf50;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 20px 20px;
  line-height: 1.6;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
    background-color: #388e3c;
  }
`;

const HighlightSection = styled.div`
  background-color: #f9f9f9;
  padding: 50px 20px;
  margin: 40px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const FeatureCard = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.8rem;
    color: #4caf50;
  }

  p {
    font-size: 1.2rem;
    color: #333;
  }
`;

const ProductGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ProductCard = styled.div`
  width: 250px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  h4 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const Home = () => {
  return (
    <PageContainer>
     
      <Banner>
        <p>Tazajan - Свежие органические продукты</p>
      </Banner>

      
      <SectionTitle>Добро пожаловать в Tazajan</SectionTitle>
      <Description>
        Мы гордимся тем, что предоставляем вам самые свежие и натуральные продукты, выращенные с заботой о земле и нашем сообществе. Присоединяйтесь к нам, чтобы узнать больше о наших традициях и ценностях.
      </Description>

      
      <HighlightSection>
        <h3>Почему выбирают нас:</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <FeatureCard>
            <h3>Натуральные продукты</h3>
            <p>Мы гарантируем, что все наши продукты на 100% натуральные и свежие.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Забота о Земле</h3>
            <p>Наши фермеры используют экологичные методы для выращивания продукции.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Поддержка локальных фермеров</h3>
            <p>Мы сотрудничаем с местными фермерами, помогая развивать малый бизнес.</p>
          </FeatureCard>
        </div>
      </HighlightSection>

      
      <ProductGallery>
        <ProductCard>
          <img src="https://snpk.in.ua/content/images/45/47739455517795.jpg" alt="Продукт 1" />
          <h4>Пшеница</h4>
         
        </ProductCard>
        <ProductCard>
          <img src="https://static.tildacdn.com/tild3732-3465-4761-b835-393738643035/yarovaya-pshenitsa.jpg" alt="Продукт 2" />
          <h4>Пшеница</h4>
         
        </ProductCard>
        <ProductCard>
          <img src="https://agromer-storage-public.storage.yandexcloud.net/st/images/736/offers/07fff232-3a24-4722-b9a7-1878e7be4169/963004cc47c1b9081b54c3856c6748d3.jpg" alt="Продукт 3" />
          <h4>Ячмень</h4>
          
        </ProductCard>
      </ProductGallery>

    
      <Button onClick={() => window.location.href = '/products'}>
        Узнать больше
      </Button>
    </PageContainer>
  );
};

export default Home;
