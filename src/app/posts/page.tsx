import styled from 'styled-components';
import PostItem from './_component/postItem';

export default function Posts() {
  return (
    <PostLayout>
      <PostItem />
    </PostLayout>
  );
}

const PostLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
