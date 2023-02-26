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
            title="Monitoramento"
            title2="de memoria RAM"
            description="Aplicativo desktop criado com ElectronJS, o app monitora o uso de memoria RAM do computador, exibindo as estatisticas em tempo real."
            link="https://steam-new-desing.vercel.app/"
          />

          <ProjectsItem 
            title="Banco de Imagens"
            description="O banco de imagens é um trabalho freelancer onde eu estou programando um ecommerce de videos de alta qualidade. Em breve disponivel para acesso."
            link="*"
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
    @media (max-width:700px) {
      grid-template-columns: 2fr;
    }
  }

`;