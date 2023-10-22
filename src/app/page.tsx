'use client';
import { SectionAboutUs, SectionHero } from '@/components';
import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  overflow: hidden;
`;

export default function Home() {
  return (
    <Container>
      <SectionHero />
      <SectionAboutUs />
    </Container>
  );
}
