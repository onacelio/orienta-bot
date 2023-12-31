import { styleGuide } from '@/styles';
import Slider from 'react-slick';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  align-items: center;
  position: relative;
  top: 64px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 64px;
`;
export const ExAlunos = styled.div`
  width: 100%;
  height: auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    text-align: center;
    color: #1e1e1e;
    font-size: ${styleGuide.fontSize.titleSmall};
    font-weight: 700;
    line-height: 3rem;
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;
  height: auto;
`;

export const SuccessStoriesSliderContainer = styled.div`
  position: relative;
`;

export const SliderButton = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: gray;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;

  display: none;
  z-index: 1;

  @media (min-width: ${styleGuide.breakpoints.default}) {
    display: flex;
  }
`;

export const SliderButtonPrev = styled(SliderButton)`
  left: 366px;
  margin-top: 224px;
  @media (min-width: ${styleGuide.breakpoints.large}) {
    left: 560px;
  }
`;
export const SliderButtonNext = styled(SliderButton)`
  right: 366px;
  margin-top: 224px;
  @media (min-width: ${styleGuide.breakpoints.large}) {
    right: 560px;
  }
`;

export const SliderItem = styled.div``;

export const StyledSlider = styled(Slider)`
  .slick-arrow {
    display: none !important;
  }
`;
