import styled from "styled-components";
import { Layout } from "../../styles/Global";
import Title from "../Title/principalTitle";

export default function Skills() {
  return (
    <SkillsContainer>
      <Title text1="MInhas" text2="Habilidades" />
      <div
        className="skills"
      >
        <h2>Frontend</h2>
        <p>HTML, CSS, SASS, Style Component, ReactJS, NextJS, ChackraUI</p>
      </div>

      <div
        className="skills"
      >
        <h2>Backend</h2>
        <p>NodeJS, NestJS, PostgresQL, MongoDB, GraphQL, WebScraping</p>
      </div>

      <div
        className="skills"
      >
        <h2>Outros</h2>
        <p>Electron, Testes Unitarios,Python, Docker, Linux</p>
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled(Layout)`
  height: 60vh;
  .skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:1rem;
    h2 {
      color:#fff;
    }
    p {
      color: #fff;
    }
  }
`;
