import styled from 'styled-components';
import { StaticImageData } from 'next/image';

interface SliderBannerImage {
  image: StaticImageData['src'];
}
export const BannerContainer = styled.div`
  width: 653.5px;
  height: 387px;
  position: relative;
  margin: 2rem auto 0 auto;
  display: flex;
  gap: 1rem;
  border-radius: 39px;
  background: #ffc045;
  padding: 2rem;
  flex-direction: column;
`;
export const Image = styled.div<SliderBannerImage>`
  width: 80.185px;
  height: 82.895px;
  background-image: src(${props => props.image});

  border-radius: 82.895px;
`;
export const Nome = styled.div`
  width: 283px;
  color: #181818;
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
export const Funcao = styled.div`
  color: #262525;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 278px;
`;
export const Descricao = styled.div`
  width: 517px;
  color: #1e1e1e;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.7;
`;
