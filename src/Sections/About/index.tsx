import React, { forwardRef } from 'react';
import './style.scss';
import { SectionTitle } from '@/components';

const About = forwardRef((ref, props) => {
  console.log(ref, props);

  return (
    <section className="about">
      <div className="about__text">
        <SectionTitle title="Sobre nós" />
        <h3>
          Conectamos conforto
          <br />
          com segurança.
        </h3>
        <p>
          Somos uma empresa apaixonada por tornar sua casa mais inteligente e conectada.
          Especializados em automação residencial, oferecemos soluções inovadoras que
          permitem que você controle sua casa com o poder da sua voz, utilizando assistentes
          virtuais de última geração. Nossa equipe dedicada está pronta para transformar sua
          casa em um espaço tecnologicamente avançado, onde você pode simplesmente falar para
          ligar as luzes, ajustar a temperatura ou até mesmo reproduzir suas músicas favoritas.
        </p>
        <p className="desktop-paragraph">
          Na Tech In Lar, valorizamos a praticidade, segurança e conforto da sua casa.
          Nossas soluções de automação são projetadas sob medida para atender às suas necessidades
          e facilitar o seu dia a dia. Seja bem-vindo ao futuro da automação residencial,
          onde a sua voz é o controle mestre!
        </p>
      </div>
      <div className="about__image" />
      <p className="mobile-paragraph">
        Na Tech In Lar, valorizamos a praticidade, segurança e conforto da sua casa.
        Nossas soluções de automação são projetadas sob medida para atender às suas necessidades
        e facilitar o seu dia a dia. Seja bem-vindo ao futuro da automação residencial,
        onde a sua voz é o controle mestre!
      </p>
    </section>
  );
});

export default About;
