// src/index.js
import React from 'react'; // Импортируем React
import ReactDOM from 'react-dom/client'; // Импортируем ReactDOM для рендеринга
import App from './App'; // Импортируем основной компонент приложения
import './index.css'; // Подключаем глобальные стили (если есть)

const root = ReactDOM.createRoot(document.getElementById('root')); // Получаем элемент с id 'root' из HTML
root.render(
  <React.StrictMode>
    <App /> {/* Рендерим компонент App */}
    
  </React.StrictMode>
);
