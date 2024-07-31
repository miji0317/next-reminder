'use client';

import { useParams } from 'next/navigation';
import styled from 'styled-components';

export default function PostDetail() {
  const router = useParams();
  return <PostDetailLayout className="defaultPadding">{router.postId}</PostDetailLayout>;
}

const PostDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
`;
