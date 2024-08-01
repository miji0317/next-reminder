'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Back from '@/app/_component/icon/Back';

// 글 상세 헤더
export default function PostHeader() {
  const router = useRouter();
  const backAction = () => {
    router.back();
  };

  return (
    <PostHeaderLayout className="defaultPadding">
      <Back size={'3rem'} onClick={backAction} />
    </PostHeaderLayout>
  );
}

const PostHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
