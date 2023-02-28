import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterComponent>
      <FooterItems>
        <BsWhatsapp className="icon"/>
        <span>
          <a href="https://api.whatsapp.com/send?phone=5531995083673">
            +55 31 995083673
          </a>
        </span>
      </FooterItems>
      <FooterItems>
        <BsInstagram className="icon"/>
        <span>
          <a href="https://api.whatsapp.com/send?phone=5531995083673">
            +55 31 995083673
          </a>
        </span>
      </FooterItems>
    </FooterComponent>
  );
}

const FooterComponent = styled.div`
  padding: 2.5rem;
  background-color: var(--footer-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
`;

const FooterItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: transparent;
  .icon {
    background-color: transparent;
    font-size: 28px;
    color: #04d84b;
  }

  span {
    background-color: transparent;
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 600;

    a {
      text-decoration: none;
      color: #fefefe;
      background-color: transparent;
    }
  }
`;
