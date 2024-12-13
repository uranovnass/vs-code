import React from "react";
import styled, { createGlobalStyle } from "styled-components";

// Глобальные стили
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #f9f9f9;
    color: #333;
    font-family: 'Poppins', sans-serif;
  }
`;

// Контейнер для всей страницы
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0;
`;

// Слой для заголовка
const PageTitle = styled.h1`
  font-size: 44px;
  color: #333;
  text-transform: uppercase;
  margin-bottom: 40px;
  letter-spacing: 2px;
`;

// Контейнер для карточек
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  max-width: 1200px;
  margin-top: 20px;
`;

// Карточка продукта
const ProductCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }
`;

// Место для изображения
const ProductImage = styled.div`
  height: 200px;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
`;

// Название продукта
const ProductTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 10px 0;
  font-weight: bold;
`;

// Описание продукта
const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  padding: 0 10px;
`;

// Пример данных для продуктов (сортов)
const products = [
  {
    title: "Озимые Сорта Пшеницы",
    description:
      "Алексеич, Безостая 100, Тимирязевка 150, Баграт, Есаул, Еланчик",
    imageUrl: "https://snpk.in.ua/content/images/45/47739455517795.jpg" // Пример фото
  },
  {
    title: "Яровые Сорта Пшеницы",
    description: "Ликамеро, Тризо, Дарья",
    imageUrl: "https://static.tildacdn.com/tild3732-3465-4761-b835-393738643035/yarovaya-pshenitsa.jpg" // Пример фото
  },
  {
    title: "Яровой Ячмень",
    description: "Эксплоер, Калькюль, Маргрет, Вакула",
    imageUrl: "https://agromer-storage-public.storage.yandexcloud.net/st/images/736/offers/07fff232-3a24-4722-b9a7-1878e7be4169/963004cc47c1b9081b54c3856c6748d3.jpg" // Пример фото
  },
  {
    title: "Пустая карточка 1",
    description: "",
    imageUrl: "https://agromer-storage-public.storage.yandexcloud.net/st/images/401/offers/2243a79a-dd8d-4299-a07c-bd5660c9d483/1be7dac8d061062f6b256749dee1997f.png", // Пустое фото
    isEmpty: true
  },
  {
    title: "Пустая карточка 2",
    description: "",
    imageUrl: "https://media.istockphoto.com/id/148088874/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%BD%D0%B0%D1%8F-%D1%81%D0%B2%D1%91%D0%BA%D0%BB%D0%B0.jpg?s=612x612&w=0&k=20&c=lQPk6GQi3iLwiDcJZK-QB2D0GE9NnjySBqZM-R0SaHU=", // Пустое фото
    isEmpty: true
  },
  {
    title: "Пустая карточка 3",
    description: "",
    imageUrl: "https://cdn.botanichka.ru/wp-content/uploads/2016/03/Beetroot.jpg", // Пустое фото
    isEmpty: true
  }
];

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <PageTitle>Наша продукция</PageTitle>

        <CardContainer>
          {products.map((product, index) => (
            <ProductCard key={index}>
              {product.isEmpty ? (
                <>
                  <ProductImage style={{ backgroundImage: `url(${product.imageUrl})` }} />
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDescription>Добавьте описание и фото</ProductDescription>
                </>
              ) : (
                <>
                  <ProductImage style={{ backgroundImage: `url(${product.imageUrl})` }} />
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                </>
              )}
            </ProductCard>
          ))}
        </CardContainer>
      </PageContainer>
    </>
  );
};

export default App;
