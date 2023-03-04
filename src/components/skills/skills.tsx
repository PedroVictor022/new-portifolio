import styled from "styled-components";

export default function SkillsContainer(title: string, children: any) {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{children}</p>
    </Container>
  )
}

const Container = styled.div``;