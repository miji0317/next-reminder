import styled from 'styled-components';
import Image from 'next/image';
import Thumbnail from '../../../../public/thumbnail1.png';

export default function Posts() {
  return (
    <PostItem>
      <ThumbnailBox src={Thumbnail} alt="썸네일" />
      블라블라
    </PostItem>
  );
}

const PostItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 60rem;
`;

const ThumbnailBox = styled(Image)`
  max-width: 100%;
  max-height: 30rem;
  object-fit: cover;
  border-radius: 2rem;
`;
