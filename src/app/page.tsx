'use client';
import Posts from './posts/page';
import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { color } from '@/styles/colors';

export default function Home() {
  return (
    <Main>
      <Title>Blog</Title>
      <Posts />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100dvh;
  min-width: 100dvw;
`;

const Title = styled.p`
  color: ${color.DarkPink};
  font-weight: ${fonts.bold};
  text-align: center;
  font-size: 3rem;
`;
