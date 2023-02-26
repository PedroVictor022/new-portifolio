import styled from "styled-components";
import Title from "../Title/principalTitle";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { WrapLine } from "../../styles/utils";

export default function Header() {
  return (
    <HeaderComponent>
      <Title />
      <div className="box_links">
        <LinkComponents color="#2B2D32">
          <a
            href="https://www.linkedin.com/in/pedro-victor-75440321a/"
            target="_blank"
          >
            Linkedin
          </a>
          <AiFillLinkedin className="icon" />
        </LinkComponents>

        <LinkComponents color="#5658DD">
          <a
            href="https://www.linkedin.com/in/pedro-victor-75440321a/"
            target="_blank"
          >
            Github
          </a>
          <AiFillGithub className="icon" />
        </LinkComponents>
      </div>
      <WrapLine />
    </HeaderComponent>
  );
}

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .box_links {
    padding-top: 2rem;
    display: flex;
    gap: 1rem;
  }
`;

const LinkComponents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#fff"};
  
  &:hover {
    a {
      color: #fff;
    }
  }

  a {
    background-color: transparent;
    font-weight: 600;
    text-decoration: none;
    color: #f3f3f3;
  }
  .icon {
    font-size: 29px;
    background-color: transparent;
    color: #fff;
  }
`;
