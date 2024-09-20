import React from "react";
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // Armazena o ano atual em uma variável

  return (
    <footer className="footer">
      <p>Professor Adalmir - 55333 - Candidato Eleições 2024</p>
      <p>Para Vereador - PSD - CNPJ: 56.448.963/0001-07</p>
      <p>© {currentYear} Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
