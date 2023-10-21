import {FooterHome, Logo1, Overlap, OverlapGroup, Barrinha, Group, Texto1, Instagram, Discord, Github, Descricao, Rodape, Group2, Group3, Links, Group4, Link1, Link2, Link3, Link4, Group5, Separador1, Group6, Group7, Links2, Separador2, EEEP, Local1} from './styles';

export function Footer() {
  return (
    <FooterHome>
      <Logo1 src="https://c.animaapp.com/4hcN8HkZ/img/logo.svg" alt="Logo" />
      <Overlap>
        <OverlapGroup>
          <Barrinha alt="Vector" src="https://c.animaapp.com/4hcN8HkZ/img/vector-10.svg" />
          <Group>
            <Texto1>Acompanhe nosso trabalho</Texto1>
            <Descricao>
            Acompanhe nosso trabalho através das redes sociais para receber as últimas atualizações em primeira mão.
            </Descricao>
            <Rodape>2023 @ 3° ano Informática</Rodape>
            <Group2>
              <Instagram></Instagram>
              <Discord></Discord>
              <Github></Github>
            </Group2>
          </Group>
          <Group3>
            <Links>Links Úteis</Links>
            <Group4>
              <Link1>Dúvidas</Link1>
              <Link2>Documentação</Link2>
              <Link3>Comandos</Link3>
              <Link4>Acessar bot</Link4>
            </Group4>
          </Group3>
        </OverlapGroup>
        <Group5>
          <Links>Ajuda</Links>
          <Separador1>
            <Link1>FAQ</Link1>
          </Separador1> 
          <Group6>
            <Link1>Fale Conosco</Link1>
          </Group6>
        </Group5>
        <Group7>
          <Links2>Endereço</Links2>
          <Separador2>
            <EEEP> 
            EEEP Mária Célia Pinheiro <br /> Falcão - Pereiro/CE
            </EEEP>
          </Separador2>
          <Local1></Local1>
        </Group7>
      </Overlap>
    </FooterHome>
  );
}
