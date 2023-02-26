import styled from "styled-components";

interface IMiniTitle {
  text1: string;
  text2?: string;
}

export default function MiniTitle({ text1, text2 }: IMiniTitle) {
  return (
    <MiniTitleComp>
      <span>{text1}</span>
      <span>{text2}</span>
    </MiniTitleComp>
  );
}

const MiniTitleComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  margin-top: -12px;

  /* padding: 1rem; */
  font-weight: 800;
  letter-spacing: 2px;

  color: white;
  span {
    color: var(--primary-color);
    background-color: transparent;
  }
  font-size: 26px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
