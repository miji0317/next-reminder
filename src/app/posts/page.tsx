'use client';

import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import styled from 'styled-components';
import Header from '@/app/_component/Header';
import PostItem from './_component/postItem';
import { colors } from '@/styles/colors';
import { postList } from '@/static/postList';

export default function Posts() {
  // 정렬된 데이터
  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    if (postList) {
      const sortedData = [...postList].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setPosts(sortedData);
    }
  }, [postList]);

  return (
    <PostLayout className="defaultPadding">
      <Header />
      {posts?.map((post) => (
        <PostItem key={post.postId} post={post} />
      ))}
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
