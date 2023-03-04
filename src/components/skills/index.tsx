import { DiJavascript1, DiNodejs, DiReact } from "react-icons/di";
import {
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiStyledcomponents,
  SiTsnode,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrNode } from "react-icons/gr";
import styled from "styled-components";
import { Layout } from "../../styles/Global";
import Title from "../Title/principalTitle";

export default function Skills() {
  return (
    <SkillsContainer>
      <Title text1="Techs" text2="Favoritas" />

      <div className="projectItem">
        <DiReact  className="icon" />
        <DiJavascript1 className="icon" />
        <TbBrandNextjs className="icon" />
        <GrNode className="icon" />
        <SiGraphql className="icon" />
        <SiNestjs className="icon" />
        <SiVuedotjs className="icon" />
        <SiMongodb className="icon" />
        <SiPostgresql className="icon" />
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled(Layout)`
  /* background-color: green; */
  height: 60vh;
  .projectItem {
    /* margin-right: 25px; */
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 4rem;

    .icon {
      font-size: 90px;
      padding: 0.2rem;
      cursor: pointer;
      border-radius: 0.4rem;
      
      transition: all 0.2s;
      &:hover {
        scale: 1.2;
        color:var(--primary-color);
        transition: all 0.4s;
        background-color: #141414;
        padding:0.5rem;
      }
    }
  }
`;
