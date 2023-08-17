import React from 'react';
import './style.scss';
import Image from 'next/image';
// import Logo from './logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image src="/logo.svg" alt="Logo Tech in Lar" fill />
      </div>
      <div className="btns">
        <button type="button" className="btns__contact-btn">
          Contato
        </button>
        <button type="button" className="btns__menu-btn">
          <div className="btns__menu-btn__icon" />
        </button>
      </div>
    </header>
  );
}
