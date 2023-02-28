import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";
import Title from "../Title/principalTitle";

export default function Contact() {
  return (
    <>
      <Title text1="Entre em" text2="Contato" />

      <FlexContainer>
        <FooterItems>
          <BsWhatsapp className="icon" color="#04d84b" />
          <p>WhatsApp</p>
          <span>
            <a href="https://api.whatsapp.com/send?phone=5531995083673">
              +55 31 995083673
            </a>
          </span>
        </FooterItems>
        <FooterItems>
          <AiOutlineMail className="icon" color="orange" />
          <p>Email</p>
          <span>
            <a href="pedro20002victor@gmail.com">pedro20002victor@gmail.com</a>
          </span>
        </FooterItems>

        <FooterItems>
          <AiFillLinkedin className="icon" color="#5ba6ec" />
          <p>Linkedin</p>
          <span>
            <a href="https://www.linkedin.com/in/pedro-victor-75440321a/">
              Meu Linkedin
            </a>
          </span>
        </FooterItems>
        <FooterItems>
          <AiFillGithub className="icon" color="white" />
          <p>Github</p>
          <span>
            <a href="pedro20002victor@gmail.com">PedroVictor022</a>
          </span>
        </FooterItems>
      </FlexContainer>

    </>
  );
}

const FlexContainer = styled.div`
  padding-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin: 0 auto;

  p {
    color: white;
    font-weight: 600;
  }

  @media (max-width:700px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 2fr;
  }

  padding-bottom: 4rem;
`;

const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  p {
    margin-top: -10px;
    margin-bottom: -10px;
  }

  background-color: transparent;
  .icon {
    background-color: transparent;
    font-size: 28px;
    color: ${(props) => props.color || "var(--primary-color)"};
  }

  span {
    background-color: transparent;
    text-decoration: none;
    color: var(--primary-color);
    

    a {
      text-decoration: none;
      color: #fefefe;
      background-color: transparent;
    }
  }
`;
