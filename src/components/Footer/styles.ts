import { styleGuide } from '@/styles';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: auto;
  top: 100px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: ${styleGuide.breakpoints.large}) {
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      display: none;
    }

    h3 {
      color: ${styleGuide.colors.yellow.yelloPrincipal};
    }
  }

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    flex-direction: row;
    text-align: start;
    align-items: flex-start;
    > div {
      max-width: 30%;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  height: auto;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    justify-content: start;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Suport = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-weight: bold;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`;
