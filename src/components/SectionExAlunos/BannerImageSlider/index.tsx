import { BannerContainer, Descricao, Nome, Funcao, Card } from './styles';

interface CardProps {
  descricao: string;
  nome: string;
  funcao: string;
}

export function BannerImageSlider({ descricao, nome, funcao }: CardProps) {
  return (
    <BannerContainer>
      <Card>
        <Nome>{nome}</Nome>
        <Funcao>{funcao}</Funcao>
      </Card>
      <Descricao>{descricao}</Descricao>
    </BannerContainer>
  );
}
