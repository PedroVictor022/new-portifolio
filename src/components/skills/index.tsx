import styled from "styled-components";
import { Layout } from "../../styles/Global";
import Title from "../Title/principalTitle";

export default function Skills() {
  return (
    <SkillsContainer>
      <Title text1="MInhas" text2="Habilidades" />
      <div className="skills_container">
        <div className="skills">
          <h2 className="title">Frontend</h2>
          <p>HTML, CSS, SASS, Style Component, ReactJS, NextJS, ChackraUI</p>
        </div>

        <div className="skills">
          <h2 className="title">Backend</h2>
          <p>NodeJS, NestJS, PostgresQL, MongoDB, GraphQL, WebScraping</p>
        </div>
        <div className="skills">
          <h2 className="title">Outros</h2>
          <p>Electron, Testes, Python, Docker e Linux</p>
        </div>
        {/* <div className="skills">
          <h2>Outros</h2>
          <p>Electron, Testes Unitarios,Python, Docker e Linux</p>
        </div> */}
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled(Layout)`
  height: 65vh;

  .skills_container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fefefe;
    gap: 1rem;

    .skills {
      text-align: center;
      transition: 0.4s all;
      border-radius: 2rem;

      p {
        padding: 2rem;
      }
      .title {
        padding-top: 1rem;
        display: inline-block;
      }

      &::after {
          content: "";
          position: absolute;
          width:100%;
          transform:scaleX(0);
          height: 2px;
          bottom: 0;
          left:0;
          background-color:var(--primary-color);
          transform-origin: bottom right;
          transition: transform 0.65s ease-out;
        }

        &:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

      &:hover {
        scale: 1.1;
        transition: 0.3s all;
        
        margin: 1rem;

        p {
          padding: 2rem;
          font-weight: 600;
        }
      }
    }
  }
`;
