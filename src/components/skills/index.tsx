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
      <Title text1="Skills" />

      <div className="projectItem">
        <DiReact className="icon" />
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
    margin-right: 25px;
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 4rem;
    /* background-color: red; */

    .icon {
      font-size: 90px;
      background-color: red;
      padding: 0.2rem;
      cursor: pointer;
      border-radius: 0.4rem;
    }

  }
`;
