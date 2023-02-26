import styled from "styled-components";

export default function Title() {
  return (
    <>
      <TitleComp>
        <span>Desenvolvedor</span>
        <span className="secondary">Full Stack</span>
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

  margin-top: 2rem;
  padding: 1rem;
  font-weight: 800;
  letter-spacing: 2px;

  color: white;
  .secondary {
    color: var(--primary-color);
  }
  font-size: 36px;

  @media (max-width:786px) {
    font-size: 32px;
  }
`;
