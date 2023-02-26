import styled from "styled-components"
import About from "../about"
import Skills from "../skills"

export default function MainApp() {
  return (
    <MainComponent>
      <Skills />
      <About />
    </MainComponent>
  )
}

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
`