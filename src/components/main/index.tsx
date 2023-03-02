import styled from "styled-components"
import About from "../about"
import MyProjects from "../projects"

export default function MainApp() {
  return (
    <MainComponent>
      <About />
      {/* COMPONENT DE SKILLS E PROJECTS */}
    </MainComponent>
  )
}

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
`