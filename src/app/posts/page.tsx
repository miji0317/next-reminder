'use client';

import styled from 'styled-components';
import Header from '@/app/_component/Header';
import PostItem from './_component/postItem';
import { colors } from '@/styles/colors';

export default function Posts() {
  return (
    <PostLayout className="defaultPadding">
      <Header />
      <PostItem />
      <PostItem />
      <PostItem />
    </PostLayout>
  );
}

const PostLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > div + div {
    border-bottom: 1px solid ${colors.NormalGray};
  }
`;
