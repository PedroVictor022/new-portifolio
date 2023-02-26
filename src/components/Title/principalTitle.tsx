import styled from "styled-components";

interface ITitleText {
  text1: string, 
  text2?: string
}

export default function Title({text1, text2} : ITitleText) {
  return (
    <>
      <TitleComp>
        <span>{text1}</span>
        <span className="secondary">{text2}</span>
      </TitleComp>
    </>
  );
}

export const TitleComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

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
