import { styleGuide } from '@/styles';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.5rem;
  top: 90px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: #000;
    font-size: ${styleGuide.fontSize.titleMedium};
    text-transform: uppercase;
    font-weight: 700;
    line-height: normal;
  }

  p {
    color: ${styleGuide.colors.gray.color80};
    font-size: ${styleGuide.fontSize.xlarge};
    font-weight: 500;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    gap: 3rem;
    flex-direction: row;
  }
`;

export const Topics = styled.div`
  padding: 2rem;
  width: 100%;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font-weight: 600;

  > div {
    display: flex;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    gap: 0.5rem;

    span {
      cursor: pointer;
      padding: 1rem;
      width: 100%;
      color: ${styleGuide.colors.yellow.yeellowCard};
      border-radius: 0.5rem;
      transition: 0.5s ease-in-out;
    }

    span:hover {
      color: #fff;
      background-color: #1c1c1c;
    }

    > .active {
      color: #fff;
      background-color: #1c1c1c;
    }
  }

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    width: calc(100% / 3);
    height: 100%;
    max-height: 50%;

    position: sticky;
    top: 150px;
    z-index: 9999;
  }
`;

export const Comands = styled.div`
  width: 100%;
  padding-top: 2rem;

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    width: calc((100% / 3) * 2);
    padding: 0 2rem;
  }
`;
