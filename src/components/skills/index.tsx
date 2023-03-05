import styled from "styled-components";
import { Layout } from "../../styles/Global";
import Title from "../Title/principalTitle";

export default function Skills() {
  return (
    <SkillsContainer>
      <Title text1="MInhas" text2="Habilidades" />
      <div className="skills_container">
        <div className="skills">
          <h2>Frontend</h2>
          <p>HTML, CSS, SASS, Style Component, ReactJS, NextJS, ChackraUI</p>
        </div>

        <div className="skills">
          <h2>Backend</h2>
          <p>NodeJS, NestJS, PostgresQL, MongoDB, GraphQL, WebScraping</p>
        </div>
        <div className="skills">
          <h2>Outros</h2>
          <p>Electron, Testes Unitarios,Python, Docker e Linux</p>
        </div>
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled(Layout)`
  height: 50vh;

  .skills_container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    color: #fefefe;

    p {
      padding:1rem;
    }

  }

`;
