import styled from "styled-components";
import Title from "../Title/principalTitle";

import { BsCreditCard2Front } from "react-icons/bs";
import { BiExtension, BiServer } from "react-icons/bi";
import { WrapLine } from "../../styles/utils";
import MiniTitle from "../Title/miniTitle";

export default function Skills() {
  return (
    <>
      <Title text1="Techs" text2="favoritas" />
      <SkillsComponent>
        <div className="techs">          
            <BsCreditCard2Front className="icons" />
            <MiniTitle 
              text1="Front End"
            />
          <div>
            <p>HTML5, CSS3, Bootstrap,</p>
            <p>JavaScript, ReactJS, VueJS</p>
            <p>e NextJS</p>
          </div>
        </div>
        <div className="techs">
            <BiServer className="icons" />
            <MiniTitle 
              text1="Back End"
            />
          <div>
            <p>NodeJS, PostgresQL, GraphQL</p>
            <p>MongoDB</p>
          </div>
        </div>
        <div className="techs">
            <BiExtension className="icons" />
            <MiniTitle 
              text1="Ferramentas"
            />
          <div>
            <p>Figma, Docker, Github</p>
            <p>Gitlab</p>
          </div>
        </div>
      </SkillsComponent>
      <WrapLine />
    </>
  );
}

const SkillsComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  margin-top: 0rem;

  .techs {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    border-radius: 6px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;
      background-color: transparent;
      p {
        background-color: transparent;
      }
    }

    .icons {
      font-size: 50px;
      /* background-color: var(--primary-color); */
      border-radius: 4px;
      padding: 0.2rem;
      color: #fff;
      margin-bottom: 1rem;
      background-color: transparent;
    }
  }

  @media (max-width:830px) {
    flex-wrap:wrap;
    .techs {
      /* background-color: green; */
    }
  }
`;
