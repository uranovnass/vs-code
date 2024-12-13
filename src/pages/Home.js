
import React from 'react';
import styled from 'styled-components';


const PageContainer = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  position: relative;
`;


const Banner = styled.div`
  background: url('https://oir.mobi/uploads/posts/2021-06/1624431325_1-oir_mobi-p-pshenichnoe-pole-na-zakate-priroda-krasivo-1.jpg') no-repeat center center/cover; /* Замените на своё изображение */
  height: 500px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2rem;
    height: 300px;
  }
`;


const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin: 30px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0 40px; /* Отступ сверху и снизу */
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    border-radius: 8px;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  p {
    color: #555;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      {/* Баннер с фоновым изображением */}
      <Banner>
        <p>Tazajan - Fresh Organic Produce</p>
      </Banner>

      {/* Секция карточек */}
      <SectionTitle>Explore Our Offerings</SectionTitle>
      <CardContainer>
        <Card>
          <img src="https://ir.ozone.ru/s3/multimedia-a/c1000/6406302346.jpg" alt="Пщеница" />
          <h3>Пщеница</h3>
          <p>Grown organically and harvested fresh.</p>
        </Card>
        <Card>
          <img src="https://st29.stpulscen.ru/images/product/255/823/168_medium2.jpg" alt="Кукуруза" />
          <h3>Кукуруза</h3>
          <p>Perfect for salads and sandwiches.</p>
        </Card>
        <Card>
          <img src="https://images.prom.ua/2697441106_2697441106.jpg?PIMAGE_ID=2697441106" alt="Ячмень" />
          <h3>Ячмень</h3>
          <p>Sweet, crunchy, and full of flavor.</p>
        </Card>
      </CardContainer>
    </PageContainer>
  );
};

export default Home;
