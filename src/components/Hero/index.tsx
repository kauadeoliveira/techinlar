import React from 'react';
import './style.scss';
import Image from 'next/image';
import { HiMiniArrowDown } from 'react-icons/hi2';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-text">
        <div className="hero-title">
          <h1>Automatize sua casa, simplifique sua vida.</h1>
          <span>A Tech in Lar torna sua casa um lar inteligente.</span>
        </div>
        <button type="button" className="circle-btn">
          <HiMiniArrowDown />
        </button>
      </div>
      <div className="hero-image">
        <div>
          <Image
            src="/hero.svg"
            fill
            priority
            alt="Sala de estar com um sofá branco"
          />
        </div>
      </div>
    </section>
  );
}
