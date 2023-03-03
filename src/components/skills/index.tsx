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
        <DiReact />
        <DiJavascript1 />
        <TbBrandNextjs />
        <GrNode />
        <SiGraphql />
        <SiNestjs />
        <SiVuedotjs />
        <SiMongodb />
        <SiPostgresql />
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled(Layout)`
  background-color: green;
  .projectItem {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    background-color: red;
  }
`;
