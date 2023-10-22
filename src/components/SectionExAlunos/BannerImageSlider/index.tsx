import { StaticImageData } from 'next/image';
import {
  BannerContainer,
  Descricao,
  Nome,
  Funcao,
  Image,
  Card,
  Card1
} from './styles';

interface CardProps {
  descricao: string;
  nome: string;
  funcao: string;
  image: StaticImageData['src'];
}

export function BannerImageSlider({
  descricao,
  nome,
  funcao,
  image
}: CardProps) {
  return (
    <BannerContainer>
      <Card1>
        <Image image={image}></Image>
        <Card>
          <Nome>{nome}</Nome>
          <Funcao>{funcao}</Funcao>
        </Card>
      </Card1>
      <Descricao>{descricao}</Descricao>
    </BannerContainer>
  );
}
