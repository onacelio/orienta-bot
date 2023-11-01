import styled from 'styled-components';
import { StaticImageData } from 'next/image';
import { styleGuide } from '@/styles';

interface SliderBannerImage {
  image: StaticImageData['src'];
}
export const BannerContainer = styled.div`
  max-width: 653.5px;
  height: auto;
  position: relative;
  margin: auto;
  display: flex;
  gap: 1rem;
  border-radius: 39px;
  background: #ffc045;
  padding: 3rem;
  flex-direction: column;
  @media (max-width: ${styleGuide.breakpoints.xsmall}) {
    padding: 1rem 2rem 1rem 2rem;
  }
  @media (max-width: ${styleGuide.breakpoints.largesmall}) {
    padding: 1rem 2rem 1.5rem 2rem;
  }
`;
export const Image = styled.div<SliderBannerImage>`
  width: 80.185px;
  height: 82.895px;
  background-image: ${props => `url(${props.image})`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 82.895px;
  @media (max-width: ${styleGuide.breakpoints.xsmall}) {
    width: 60px;
    height: 62px;
  }
  @media (max-width: ${styleGuide.breakpoints.largesmall}) {
    width: 55px;
    height: 57px;
  }
`;
export const Card = styled.div`
  margin-top: 1.25rem;
  margin-left: 13px;
  @media (max-width: ${styleGuide.breakpoints.xsmall}) {
    margin-left: 0.5rem;
    margin-top: 7px;
  }
  @media (max-width: ${styleGuide.breakpoints.largesmall}) {
    font-size: 0.8rem;
  }
`;
export const Card1 = styled.div`
  display: flex;
  margin-left: 1rem;
  @media (max-width: ${styleGuide.breakpoints.xsmall}) {
    display: flex;
  }
  @media (max-width: ${styleGuide.breakpoints.largesmall}) {
    margin-left: 0.5rem;
  }
`;
export const Nome = styled.div`
  max-width: 350px;
  color: #181818;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  opacity: 0.5;
  @media (max-width: ${styleGuide.breakpoints.xsmall}) {
    font-size: 1rem;
  }
  @media (max-width: ${styleGuide.breakpoints.largesmall}) {
    font-size: 1rem;
  }
`;
export const Funcao = styled.div`
  color: #262525;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  max-width: 278px;
  opacity: 0.5;
  @media (max-width: ${styleGuide.breakpoints.xsmall}) {
    font-size: 0.95rem;
  }
  @media (max-width: ${styleGuide.breakpoints.largesmall}) {
    font-size: 0.75rem;
  }
`;
export const Descricao = styled.div`
  max-width: 570px;
  color: #1e1e1e;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.7;

  @media (max-width: ${styleGuide.breakpoints.xsmall}) {
    font-size: 1.3rem;
  }
  @media (max-width: ${styleGuide.breakpoints.largesmall}) {
    font-size: 1rem;
  }
`;
