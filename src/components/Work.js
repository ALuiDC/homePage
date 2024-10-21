import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Sem Sair de Casa",
      text: "Agende online com praticidade, agilidade e sem sair de casa!",
    },
    {
      image: ChooseMeals,
      title: "Escolha seu serviço",
      text: "Escolha qual a lavagem, o modelo do carro, a cera  e o horário de chegada!",
    },
    {
      image: DeliveryMeals,
      title: "Entrega Ágil",
      text: "Tenha todas as informações de seu carro e saiba quando estiver pronto para buscar, fácil, rápido e prático!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Serviço</p>
        <h1 className="primary-heading">Como agendar?</h1>
        <p className="primary-text">
          O agendamento é feito online de forma prática e simples, escolha o modelo do seu carro, informe a sua placa, o tipo de lavagem, para qual sábado quer marcar a lavagem e o horário que irá chegar. 
          Caso chegue atrasado seu carro será colocado na fila e terá de esperar a sua vez. A lavagem demora em média de 40 minutos para cada carro pequeno, e 1:20 (uma hora e vinte minutos) para camionetes.

        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;