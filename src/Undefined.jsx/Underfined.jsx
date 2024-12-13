import React from "react";
import styled, { createGlobalStyle } from "styled-components";


// Стили для страницы
const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

// Стили для текста ошибки
const ErrorText = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: #ff6347;
  margin: 0;
  animation: fadeIn 1s ease-in-out;
`;

// Стили для подзаголовка
const Message = styled.p`
  font-size: 24px;
  color: #666;
  margin: 20px 0;
  animation: fadeIn 1.5s ease-in-out;
`;

// Кнопка возврата на главную
const BackButton = styled.a`
  background-color: #4CAF50;
  color: white;
  padding: 12px 30px;
  font-size: 18px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Анимация для текста
const fadeIn = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Стили для добавления анимации
const GlobalStyles = createGlobalStyle`
  ${fadeIn}
`;

const NotFound = () => {
  return (
    <NotFoundPage>
      <GlobalStyles />
      <ErrorText>404</ErrorText>
      <Message>Страница не найдена</Message>
      <BackButton href="/">Вернуться на главную</BackButton>
    </NotFoundPage>
  );
};

export default NotFound;
