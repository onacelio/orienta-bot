import { styleGuide } from '@/styles';
import styled from 'styled-components';
import background from '@/assets/img/home/background.png';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 1.5rem;
  top: 64px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(
        127deg,
        #1a1a1a 0%,
        rgba(26, 26, 26, 0.95) 33.33%,
        rgba(26, 26, 26, 0.85) 66.67%,
        rgba(26, 26, 26, 0.5) 100%
      ),
      url(${background.src}),
      lightgray 0px -217.552px / 100% 169.911%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: grayscale(1);
  }

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    padding: 0;
  }

  @media (min-width: ${styleGuide.breakpoints.large}) {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const Hero = styled.div`
  width: 100%;
  position: relative;
  z-index: 999;
  max-width: 1440px;
  padding: 4rem 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  div {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  > :nth-child(1) {
    display: none;
  }

  > :nth-child(2) {
    h1 {
      color: white;
      font-size: ${styleGuide.fontSize.titleDefault};

      span {
        font-weight: 700;

        span {
          color: ${styleGuide.colors.yellow.yelloPrincipal};
        }
      }
    }

    p {
      color: white;
      font-size: ${styleGuide.fontSize.large};
    }

    button {
      background: ${styleGuide.colors.yellow.yelloPrincipal};
      max-width: 60%;
      border-radius: 0.3125rem;
      padding: 0.5rem;
      color: #fff;
      font-weight: 600;
      transition: 0.5s ease-in-out;

      &:hover {
        background: ${styleGuide.colors.yellow.yelloPrincipal};
      }
    }
  }

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    > :nth-child(1) {
      display: flex;
    }
  }
`;
