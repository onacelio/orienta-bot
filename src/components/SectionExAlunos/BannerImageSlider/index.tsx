import { StaticImageData } from 'next/image';
import { BannerContainer, Descricao, Nome, Funcao, Image } from './styles';

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
      <Image image={image}></Image>
      <Nome>{nome}</Nome>
      <Funcao>{funcao}</Funcao>
      <Descricao>{descricao}</Descricao>
    </BannerContainer>
  );
}
