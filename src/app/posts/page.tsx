'use client';

import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import styled from 'styled-components';
import PostItem from './_component/PostItem';
import { colors } from '@/styles/colors';
import { postList } from '@/static/postList';

export default function Posts() {
  // 정렬된 데이터
  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    if (postList) {
      const copyPostList = JSON.parse(JSON.stringify(postList));
      // 최신 포스트순 정렬
      const sortedData = [...copyPostList].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      // 미리보기 3문장
      sortedData.forEach((data) => {
        const previewContent = data.content.split('.').slice(0, 3).join('. \n ') + '.';
        data.content = previewContent;
      });
      setPosts(sortedData);
    }
  }, [postList]);

  return (
    <PostLayout className="defaultPadding">
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
