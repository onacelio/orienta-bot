import Image from 'next/image';
import { Container, FooterContainer, Icons, Suport } from './styles';
import logo from '@/assets/img/header/OrientaLogo.svg';
import {
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaMapMarkerAlt
} from 'react-icons/fa';

export function Footer() {
  return (
    <Container>
      <FooterContainer>
        <div>
          <Image src={logo} alt="Logo orienta bot" />
          <h3>Acompanhe nosso projeto</h3>
          <p>
            Acompanhe nosso trabalho através das redes sociais para receber as
            últimas atualizações em primeira mão.
          </p>
          <Icons>
            <FaInstagram
              onClick={() => {
                window.open('https://www.instagram.com/orienta.bot/');
              }}
            />
            <FaGithub
              onClick={() => {
                window.open('https://github.com/onacelio/orienta-bot');
              }}
            />
            <FaDiscord
              onClick={() => {
                window.open('https://discord.gg/XnyyU3dE2C');
              }}
            />
          </Icons>
        </div>

        <Suport>
          <h4>Links úteis</h4>

          <a href="/comandos">Comandos</a>
          <a href="https://web.telegram.org/k/#@MCPF_EstagioBot">Acesar bot</a>
        </Suport>

        <Suport>
          <h4>Endereço</h4>

          <a href="https://maps.app.goo.gl/4obUKp3o2oBs9vrq7">
            <FaMapMarkerAlt /> EEEP Maria Célia Pinheiro Falcão
          </a>
        </Suport>
      </FooterContainer>
    </Container>
  );
}
