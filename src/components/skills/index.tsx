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
        <DiReact  className="icon" color="cyan"/>
        <DiJavascript1 className="icon" color="yellow"/>
        <TbBrandNextjs className="icon" color="#fefefe"/>
        <GrNode className="icon" color="#4F9900"/>
        <SiGraphql className="icon" color="#d3009e"/>
        <SiNestjs className="icon" color="red"/>
        <SiVuedotjs className="icon" color="#0ba56a"/>
        <SiMongodb className="icon" color="#1aa707" />
        <SiPostgresql className="icon" color="#0759d3" />
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
        color:${(props) => props.color || "#fefefe"};
        transition: all 0.4s;
      }
    }
  }
`;
