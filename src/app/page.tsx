'use client';

import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { color } from '@/styles/colors';
import Header from './_component/Header';
import Posts from './posts/page';

export default function Home() {
  return (
    <Main>
      <Header />
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

  & > * + * {
    margin-top: 2rem;
  }
`;

const Title = styled.p`
  color: ${color.DarkPink};
  font-weight: ${fonts.bold};
  text-align: center;
  font-size: 3rem;
`;
