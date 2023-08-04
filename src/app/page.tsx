import React from 'react';
import '../styles/main.scss';
// Components
import {
  Header,
  Hero,
  About,
  Benefits,
  Phrase,
  Works,
  Contact,
  Questions,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Phrase />
      <Works />
      <Contact />
      <Questions />
      <Footer />
    </>
  );
}
