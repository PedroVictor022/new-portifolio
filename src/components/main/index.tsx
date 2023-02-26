import styled from "styled-components"
import Skills from "../skills"

export default function MainApp() {
  return (
    <MainComponent>
      <Skills />
    </MainComponent>
  )
}

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;
`