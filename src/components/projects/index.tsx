import styled from "styled-components";
import Title from "../Title/principalTitle";
import ProjectsItem from "./projectItem";

export default function MyProjects() {
  return (
    <>
      <ContainerProjects>
        <Title 
          text1="Meus"
          text2="Projetos"
        />
        <div
          className="project-items"
        >
          <ProjectsItem 
            title="Steam Redesing"
            description="Uma nova interface para o site da Steam."
            link="https://steam-new-desing.vercel.app/"
          />

          <ProjectsItem 
            title="Ecommerce"
            description="Ecommerce criado do total zero, feito com ReactJS e seus hooks."
            link="https://ecommercegeek.vercel.app/"
          />

          <ProjectsItem 
            title="Steam Redesing"
            description="Uma nova interface para o site da Steam."
            link="https://steam-new-desing.vercel.app/"
          />

          <ProjectsItem 
            title="Ecommerce"
            description="Ecommerce criado do total zero, feito com ReactJS e seus hooks."
            link="https://ecommercegeek.vercel.app/"
          />
        </div>
      </ContainerProjects>
    </>
  )
}

const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;

  .project-items {
    margin-top: 1rem;
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 2rem;
  }

`;