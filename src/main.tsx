import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import AppRoutes from './routes'; // Configuração das rotas

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes /> {/* Renderiza as rotas da aplicação */}
  </React.StrictMode>
);
