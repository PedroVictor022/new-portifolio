import styled from "styled-components";
import Title from "../Title/principalTitle";

import { AiFillGithub, AiFillLinkedin, AiFillRead } from "react-icons/ai";
import { Layout } from "../../styles/Global";

export default function Header() {
  return (
    <HeaderComponent>
      <Title text1="Desenvolvedor" text2="Full Stack" />
      {/* TODO: MUDAR COR DE CADA ITEM */}
      <div className="box_1">
        <p>Bem vindo ao meu Portifolio</p>
        <p>Aqui você encontra um pouco sobre mim</p>
        <p>e meus projetos</p>
      </div>

      <div className="box_links">
 
        <LinkComponents color="#2B2D32">
          <a
            href="https://www.linkedin.com/in/pedro-victor-75440321a/"
            target="_blank"
          >
            Linkedin
          </a>
          <AiFillLinkedin className="icon" />
        </LinkComponents>

        <LinkComponents color={"var(--primary-color)"}>
          <a
            href="https://www.linkedin.com/in/pedro-victor-75440321a/"
            target="_blank"
          >
            Github
          </a>
          <AiFillGithub className="icon" />
        </LinkComponents>
      </div>
    </HeaderComponent>
  );
}

const HeaderComponent = styled(Layout)`
  background-color: var(--black-2);

  .box_1 {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 0.3rem;
    color: #fefefe;
  }
  .box_links {
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 400px) {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 700px) {
    height: auto;
    min-height: 50vh;
  }
`;

const LinkComponents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#ffffff"};

  &:hover {
    a {
      color: #fff;
    }
  }

  a {
    background-color: transparent;
    font-weight: 600;
    text-decoration: none;
    color: #f3f3f3;
  }
  .icon {
    font-size: 29px;
    background-color: transparent;
    color: #fff;
  }
`;
