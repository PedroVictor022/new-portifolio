import styled from "styled-components"
import About from "../about"
import MyProjects from "../projects"
import Skills from "../skills"

export default function MainApp() {
  return (
    <MainComponent>
      <About />
      <Skills />
      <MyProjects />
    </MainComponent>
  )
}

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
`