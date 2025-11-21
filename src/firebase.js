// src/firebase.js

// 1. Импортируем только то, что нам нужно
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <-- ВАЖНО: импортируем getAuth

// 2. Ваш конфиг, который вы нашли (он правильный)
const firebaseConfig = {
  apiKey: "AIzaSyC9By4yPTmlJkNDpyIfdh-QpuVW2ohFrN4",
  authDomain: "react-7-6381e.firebaseapp.com",
  projectId: "react-7-6381e",
  storageBucket: "react-7-6381e.firebasestorage.app",
  messagingSenderId: "916697350054",
  appId: "1:916697350054:web:2ffb746ec7a9b6d8e71967",
  measurementId: "G-7Q84FD63L2"
};

// 3. Инициализируем приложение
const app = initializeApp(firebaseConfig);

// 4. Получаем сервис аутентификации и ЭКСПОРТИРУЕМ его
//    Именно эта строка `export` исправляет ошибку
export const auth = getAuth(app);