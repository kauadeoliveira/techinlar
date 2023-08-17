import React from 'react';
import './style.scss';

export default function Phrase() {
  return (
    <section className="phrase">
      <div>
        <blockquote>
          A tecnologia move o mundo e facilita nossas vidas em tantos aspectos.
          Abraçar a inovação é o caminho para o progresso.
        </blockquote>
        <div className="phrase__author">
          <span>Jeff Bezos</span>
          <span>Fundador da Amazon</span>
        </div>
      </div>
    </section>
  );
}
