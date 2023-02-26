import styled from "styled-components";

interface IProjectItem {
  title: string;
  description: string;
  link: string;
}

export default function ProjectsItem({
  title,
  description,
  link,
}: IProjectItem) {
  return (
    <Container>
      <p className="title">{title}</p>
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
  }
`;
