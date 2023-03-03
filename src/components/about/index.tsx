import { useEffect, useState } from "react";
import styled from "styled-components";
import { WrapLine } from "../../styles/utils";
import Title from "../Title/principalTitle";

export default function About() {
  const [avatar, setAvatar] = useState();

  const profileLink = "https://api.github.com/users/PedroVictor022";

  const getAvatarAPI = async () => {
    const data = await fetch(profileLink);
    const resData = await data.json();
    setAvatar(resData.avatar_url);
  };

  useEffect(() => {
    getAvatarAPI();
  }, []);

  return (
    <AboutComponent>
      <Title text1="Sobre" text2="Mim" />
      {/* MAKE A BOX */}

      <div className="apresentation">
        <img src={avatar} alt="" />

        <TextContainer>
          <p>
            Meu nome é Pedro Victor, sou desenvolvedor Full Stack Júnior, tenho
            20 anos e moro em Minas Gerais. Comecei a programar há 3 anos e, em
            outubro de 2022, consegui minha primeira vaga como desenvolvedor
            Júnior.
          </p>
          <br />
          <p>
            Comecei a programar em Python, mas quando descobri o Javascript e decidi que eu gostaria de me tornar um desenvolvedor web.
          </p>

        </TextContainer>
      </div>
    </AboutComponent>
  );
}

const AboutComponent = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 700px) {
    height: auto;
  }

  .apresentation {
    img {
      width: 160px;
      height: 160px;
      border-radius: 0.4rem;
    }

    padding-top: 2rem;

    display: flex;
    align-items: flex-start;
    gap: 2rem;

    @media (max-width: 950px) {
      img {
        margin-top: 2px;
      }
    }

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const TextContainer = styled.div`
  max-width: 700px;
  min-width: 300px;

  font-weight: 600;
  color: #fefefe;

  @media (max-width: 950px) {
    max-width: 400px;
    min-width: 280px;
  }

  @media (max-width: 470px) {
    width: 320px;
  }
`;
