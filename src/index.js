import React from 'react';
import { createRoot } from 'react-dom/client'; // Atualize a importação
import App from './App'; // Supondo que seu componente principal seja App

// Selecione o elemento onde seu aplicativo será renderizado
const rootElement = document.getElementById('root'); // ou o id do seu elemento

// Crie a raiz e renderize seu aplicativo
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
