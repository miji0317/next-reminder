import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { postType } from '@/static/postList';

type Props = {
  post: postType;
};

export default function Posts({ post }: Props) {
  return (
    <PostItemWrap>
      <Date>{post.createdAt}</Date>
      <PostItem className="mousePointer">
        {post.image && <ThumbnailBox src={post.image} alt="썸네일" />}
        <Title>{post.title}</Title>
        <Content>{post.content}</Content>
      </PostItem>
    </PostItemWrap>
  );
}

const PostItemWrap = styled.div`
  width: 100%;
  max-width: 80rem;
  padding: 2rem 0;
`;

const PostItem = styled.div`
  width: 100%;

  @media ${media.large} {
    display: grid;
    column-gap: 2rem;
    overflow-wrap: anywhere;
    grid-template-columns: 25rem 1fr;
    grid-template-rows: 3.8rem 1fr;
  }

  @media ${media.regular} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    & > * {
      width: 100%;
    }
  }
`;

const ThumbnailBox = styled(Image)`
  width: 100%;
  object-fit: cover;
  border-radius: 2rem;
  border: 1px solid ${colors.NormalGray};

  @media ${media.large} {
    grid-row: 1 / div 2;
    max-height: 20rem;
  }

  @media ${media.regular} {
    max-height: 15rem;
  }
`;

const Title = styled.p`
  color: ${colors.Black};
  font-weight: ${fonts.bold};
  white-space: nowrap;

  @media ${media.large} {
    font-size: 3rem;
  }

  @media ${media.regular} {
    font-size: 2.5rem;
  }
`;

const Content = styled.p`
  color: ${colors.DarkGray};
  font-weight: ${fonts.light};
  white-space: pre-wrap;
  word-break: break-word;

  @media ${media.large} {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  @media ${media.regular} {
    font-size: 1.3rem;
  }
`;

const Date = styled.p`
  color: ${colors.Black};
  font-weight: ${fonts.light};
  font-size: 1.3rem;
  text-align: right;
  margin-bottom: 1rem;
`;
