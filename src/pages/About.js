// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

// Контейнер для страницы
const AboutContainer = styled.div`
  padding: 40px;
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

// Заголовок раздела
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #4caf50; /* Зеленый цвет для отражения природы */
  margin-bottom: 20px;
  font-weight: bold;
`;

// Контейнер для текста о компании
const CompanyMission = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  font-size: 1.2rem; /* Увеличен размер текста */
  background-image: url('https://cdn.pixabay.com/photo/2016/11/29/03/10/harvest-1867724_960_720.jpg');
  background-size: cover;
  background-position: center;
  color: black; /* Цвет текста теперь черный */
`;

// Основной текст миссии
const MissionText = styled.p`
  color: black; /* Черный цвет текста */
  padding: 10px;
  text-shadow: none; /* Удален эффект свечения */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
   border: 2px solid #008000;
`;

// Контейнер для сотрудников
const TeamContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const TeamMember = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 250px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const TeamName = styled.h3`
  font-size: 1.4rem;
  margin-top: 15px;
  color: #4caf50;
`;

const TeamRole = styled.p`
  color: #777;
  font-style: italic;
`;

// Контейнер для галереи
const GalleryContainer = styled.div`
  margin-bottom: 40px;
`;

const GalleryTitle = styled.h3`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const GalleryImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;



const About = () => {
  return (
    <AboutContainer>
      {/* Заголовок страницы */}
      <SectionTitle>О Нас</SectionTitle>

      {/* Миссия кооператива */}
      <CompanyMission>
        <h3>Наша Миссия</h3>
        <MissionText>
          Мы стремимся создавать устойчивое будущее с помощью органического сельского
          хозяйства, выращивая качественные продукты и обеспечивая наших партнеров
          безопасной и экологически чистой продукцией. Мы верим в силу сотрудничества и
          в то, что коллективные усилия помогают нам расти и развиваться.
        </MissionText>
      </CompanyMission>

      {/* Команда */}
      <SectionTitle>Наша Команда</SectionTitle>
      <TeamContainer>
        <TeamMember>
          <TeamImage src="https://tophit.com/_next/image?url=https%3A%2F%2Ff.tophit.com%2Fget.php%3Fw%3D1080%26h%3D1080%26id%3D2462&w=640&q=75" alt="Team Member 1" />
          <TeamName>Иван Иванов</TeamName>
          <TeamRole>Основатель & Генеральный директор</TeamRole>
        </TeamMember>
        <TeamMember>
          <TeamImage src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_652d27fdea8a694d788e2ef7_652e28158365541c394d54ca/scale_1200" alt="Team Member 2" />
          <TeamName>Елена Петрова</TeamName>
          <TeamRole>Менеджер по маркетингу</TeamRole>
        </TeamMember>
        <TeamMember>
          <TeamImage src="https://vesti.az/storage/news/2024/october/12/big/6709efcc60baa6709efcc60bab17287044606709efcc60ba86709efcc60ba9.webp" alt="Team Member 3" />
          <TeamName>Максим Сидоров</TeamName>
          <TeamRole>Руководитель операций</TeamRole>
        </TeamMember>
      </TeamContainer>

      {/* Галерея */}
      <GalleryContainer>
        <GalleryTitle>Наша Галерея</GalleryTitle>
        <Gallery>
          <GalleryImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPfWz7mu9jXuvxSPI5x4pgpcLSpf9x-Y6LA&s" alt="Gallery Image 1" />
          <GalleryImage src="https://bf-logistic.ua/ru/images/article/2024/chem-raznitsa-mezhdu/987902204_987902204.jpg" alt="Gallery Image 2" />
          <GalleryImage src="https://agro-alyans.com/wp-content/uploads/2023/03/svarog-1.jpg" alt="Gallery Image 3" />
        </Gallery>
      </GalleryContainer>

    
    </AboutContainer>
  );
};

export default About;
