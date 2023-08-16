'use client';

import React from 'react';
import '../styles/main.scss';

// Components
import {
  Hero,
  About,
  Benefits,
  Phrase,
  Works,
  Contact,
  Questions,
} from '@/Sections';

import { Footer, Header } from '@/components';

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
