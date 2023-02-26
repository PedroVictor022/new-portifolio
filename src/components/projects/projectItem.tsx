import styled from "styled-components";

interface IProjectItem {
  title: string;
  title2?: string;
  description: string;
  link: string;
}

export default function ProjectsItem({
  title,
  title2,
  description,
  link,
}: IProjectItem) {
  return (
    <Container>
      <div className="title">
        <span>{title}</span>
        <span>{title2}</span>
      </div>
      <div className="text">
        <p className="description">{description}</p>
      </div>
      <a href={link}>VER MAIS</a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 26px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-wrap: wrap;
  }

  .text {
    width: 250px;
    
  }

  .description {
    color: white;
    font-size: 14px;
  }
  a {
    text-decoration: underline;
    font-weight: 600;
    color: var(--primary-color);
    @media (max-width: 700px) {
      margin-top: 1rem;
    }
  }
`;
