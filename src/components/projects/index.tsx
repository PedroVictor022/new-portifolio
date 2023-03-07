import styled from "styled-components";
import { Layout } from "../../styles/Global";
import Title from "../Title/principalTitle";

import { DiJavascript1, DiReact } from "react-icons/di";

export default function MyProjects() {
  return (
    <ContainerProjects>
      <Title text1="Projetos" />

      {/*  */}
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ContainerProjects>
  );
}

const ContainerProjects = styled(Layout)``;
