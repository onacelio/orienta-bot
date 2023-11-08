import styled from 'styled-components';
import { styleGuide } from '@/styles';

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  position: relative;
  top: 64px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    padding: 0;
  }

  @media (min-width: ${styleGuide.breakpoints.large}) {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const AboutUs = styled.div`
  width: 100%;
  height: auto;
  max-width: 1440px;
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
    color: #1e1e1e;
    font-size: ${styleGuide.fontSize.titleSmall};
    font-weight: 700;
    line-height: 3rem;
  }

  @media (min-width: ${styleGuide.breakpoints.medium}) {
    padding: 2rem 2.5rem 0;
  }

  @media (min-width: ${styleGuide.breakpoints.default}) {
    padding: 4rem 7.5rem 0;
  }

  @media (min-width: ${styleGuide.breakpoints.large}) {
    padding: 4rem 2.5rem 0;
  }
`;

export const Tabs = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;

  > button {
    color: ${styleGuide.colors.gray.color50};
    background: none;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: ${styleGuide.fontSize.medium};
    font-weight: 600;
    transition: 0.5s;
    position: relative;
    z-index: 9;
    border-bottom: 1px solid #000;
    padding: 1rem;

    p {
      display: none;
    }

    &:hover {
      color: ${styleGuide.colors.yellow.yelloPrincipal};
      border-bottom: 1px solid ${styleGuide.colors.yellow.yelloPrincipal};
    }
  }

  .active {
    color: ${styleGuide.colors.yellow.yelloPrincipal};
    border-bottom: 1px solid ${styleGuide.colors.yellow.yelloPrincipal};
  }

  @media (min-width: ${styleGuide.breakpoints.small}) {
    button {
      p {
        display: block;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transition: opacity 5s ease-in-out;

  div {
    @keyframes opacityText {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h3 {
      color: #474546;
      font-size: ${styleGuide.fontSize.xlarge};
      font-weight: 600;
    }

    &.opacityText {
      animation-name: opacityText;
      animation-duration: 1s;
    }

    img {
      @keyframes move {
        from {
          opacity: 0;
          transform: translateX(100%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      display: none;

      &.activeAnimation {
        animation-name: move;
        animation-duration: 1s;
      }

      @media (min-width: ${styleGuide.breakpoints.small}) {
        display: flex;
      }
    }
  }

  > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${styleGuide.breakpoints.small}) {
    flex-direction: row;
  }
`;
