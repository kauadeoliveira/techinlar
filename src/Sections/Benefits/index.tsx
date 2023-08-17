import React from 'react';
import './style.scss';

interface BenefitsCardsData {
  id: number;
  title: string;
  description: string;
}

export default function Benefits() {
  const benefitsCardsData: BenefitsCardsData[] = [
    {
      id: 1,
      title: 'Segurança',
      description: 'A automação residencial oferece recursos avançados de segurança.Você pode instalar sistemas de vigilância por câmeras sensores de movimento e alarmes que podem ser monitorados remotamente. Além disso, é possível simular a presença em casa ao programar luzes e dispositivos para ligar e desligar durante períodos de ausência.',
    },
    {
      id: 2,
      title: 'Acessibilidade',
      description: 'A automação residencial também traz benefícios para pessoas com mobilidade reduzida ou necessidades especiais. Com a possibilidade de controlar dispositivos e sistemas por meio de comandos de voz ou aplicativos, é possível facilitar o acesso e o uso de diferentes funcionalidades da casa.',
    },
    {
      id: 3,
      title: 'Economia de energia',
      description: 'A automação residencial permite o controle eficiente do consumo de energia. Você pode programar o desligamento automático de luzes e dispositivos quando não estiverem em uso, ajustar a temperatura de acordo com os horários e necessidades, monitorar o consumo de energia em tempo real e tomar medidas para reduzir o desperdício.',
    },
    {
      id: 4,
      title: 'Conectividade & Praticidade',
      description: 'A automação residencial permite que diferentes dispositivos e sistemas da casa se comuniquem entre si. Isso significa que você pode criar cenários personalizados, como acionar a iluminação e música ambiente ao entrar em determinado cômodo, ou programar o sistema de irrigação para funcionar automaticamente com base nas condições climáticas.',
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits__title">
        <h2>Beneficios.</h2>
      </div>
      <ul className="benefits__cards">
        {benefitsCardsData.map((card) => {
          // destructure
          const { id, title, description } = card;
          return (
            <li key={id} className="benefits__cards__card">
              <div>
                <span>{id}</span>
                <h3>{title}</h3>
              </div>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
