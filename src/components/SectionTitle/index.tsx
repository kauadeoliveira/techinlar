import React from 'react';
import './style.scss';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title">
      <div className="section-title__icon">
        <div className="section-title__icon__body" />
        <div className="section-title__icon__circle" />
      </div>
      <div className="section-title__text">
        {title}
      </div>
    </div>
  );
}
