import styled from "styled-components";

export default function Title() {
  return (
    <>
      <TitleComp>
          <h1>Desenvolvedor</h1>
         <span>Full Stack</span>
      </TitleComp>
    </>
  );
}

const TitleComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1rem;

  font-size: 26px;
`;
