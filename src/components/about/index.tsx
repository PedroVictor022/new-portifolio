import styled from "styled-components";
import { WrapLine } from "../../styles/utils";
import Title from "../Title/principalTitle";

export default function About() {
  return (
    <>
      <AboutComponent>
      <Title text1="Sobre" text2="Mim" />
      {/* MAKE A BOX */}
      <div>
        <p>
          Meu nome é Pedro Victor, sou dev Full Stack Junior, tenho 20 anos e
          moro em Minas Gerais.
        </p>
        <p>
          Começei a programar há 3 anos e em outubro de 2022 consegui a minha
          primeira vaga de desenvolvedor Junior.
        </p>
        <br />
        <p>
          Estou cursando Analise e Desenvolvimento de Sistemas na PUC Minas e
          estou no 3 periodo, apos me formar pretendo iniciar o curso de
          Ciencias da Computacao e me especializar na area.
        </p>
      </div>
    </AboutComponent>
    <WrapLine />
    </>
  );
}

const AboutComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;

  div {
    max-width:480px;
    color: #fefefe;
    @media (max-width:700px) {
      max-width: 380px;
    }
  }
`;
