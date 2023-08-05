import React from 'react';
import './style.scss';
import Image from 'next/image';
// import Logo from './logo.svg';

export default function Header() {
  return (
    <header id="header">
      <div className="logo-container">
        <Image src="/logo.svg" alt="Logo Tech in Lar" fill />
      </div>
      <div className="btns-container">
        <button type="button" className="contact-btn">
          Contato
        </button>
        <button type="button" className="menu-btn">
          <div className="menu-btn__icon" />
        </button>
      </div>
    </header>
  );
}
