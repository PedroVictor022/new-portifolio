import styled from "styled-components";
import Title from "../Title/principalTitle";

import { BsCreditCard2Front } from "react-icons/bs";
import { BiExtension, BiServer } from "react-icons/bi";

export default function Skills() {
  return (
    <>
      <Title text1="Techs" text2="favoritas" />
      <SkillsComponent>
        <div className="techs">          
            <BsCreditCard2Front className="icons" />
          <div>
            <p>HTML5, CSS3, Bootstrap,</p>
            <p>JavaScript, ReactJS, VueJS</p>
            <p>e NextJS</p>
          </div>
        </div>
        <div className="techs">
            <BiServer className="icons" />
          <div>
            <p>NodeJS, PostgresQL, GraphQL</p>
            <p>MongoDB</p>
          </div>
        </div>
        <div className="techs">
            <BiExtension className="icons" />
          <div>
            <p>Figma, Docker, Github</p>
            <p>Gitlab</p>
          </div>
        </div>
      </SkillsComponent>
    </>
  );
}

const SkillsComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  margin-top: 1rem;
  margin: 0 auto;

  .techs {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .icons {
      font-size: 50px;
      /* background-color: var(--primary-color); */
      border-radius: 4px;
      padding: 0.2rem;
      color: #fff;
      margin-bottom: 1rem;
    }
  }

  @media (max-width:830px) {
    flex-wrap:wrap;
    .techs {
      /* background-color: green; */
    }
  }
`;
