'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { postList, postType } from '@/static/postList';
import PostHeader from './_component/PostHeader';

export default function PostDetail() {
  const router = useParams();
  const postId = router.postId;
  const [postDetail, setPostDetail] = useState<postType>();

  useEffect(() => {
    const postDetailData = postList.find((post) => post.postId === postId);
    setPostDetail(postDetailData);
  }, []);

  return (
    <>
      <PostHeader />
      <PostDetailLayout className="defaultPadding">
        <PostTitle>{postDetail?.title}</PostTitle>
        <PostInfo>
          <PostUser>{postDetail?.userId}</PostUser>
          <Line> | </Line>
          <PostDate>{postDetail?.createdAt}</PostDate>
        </PostInfo>
        {postDetail?.image && <PostImage src={postDetail.image} alt="썸네일" />}
        <PostDetailText>{postDetail?.content}</PostDetailText>
      </PostDetailLayout>
    </>
  );
}

const PostDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100dvh;
  padding-top: 2rem;
  padding-bottom: 5rem;
  overflow-y: visible;
`;

const PostTitle = styled.p`
  width: 100%;
  text-align: left;
  font-weight: ${fonts.heavy};

  @media ${media.large} {
    font-size: 5rem;
  }

  @media ${media.regular} {
    font-size: 4rem;
  }
`;

const PostInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 1rem 0;
`;

const Line = styled.span`
  text-align: center;
  font-size: 1.5rem;
  color: ${colors.DarkGray};
`;

const PostUser = styled.p`
  font-size: 1.5rem;
  font-weight: ${fonts.bold};
  color: ${colors.Black};
`;

const PostDate = styled.p`
  font-size: 1.2rem;
  font-weight: ${fonts.light};
  color: ${colors.DarkGray};
`;

const PostImage = styled(Image)`
  width: 80%;
  height: auto;
  object-fit: contain;
  padding: 5rem 0;

  @media ${media.small} {
    width: 100%;
  }
`;

const PostDetailText = styled.div`
  width: 100%;
  text-align: left;
  font-weight: ${fonts.light};
  color: ${colors.Black};
  word-break: keep-all;

  @media ${media.large} {
    font-size: 1.5rem;
  }

  @media ${media.regular} {
    font-size: 1.3rem;
  }
`;
