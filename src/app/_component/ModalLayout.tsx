'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { colors } from '@/styles/colors';
import { media, breakPoints } from '@/styles/media';

type Props = { children: ReactNode };

export default function ModalLayout({ children }: Props) {
  const router = useRouter();
  const closeModal = () => {
    router.back(); // 뒤로가기
  };

  return (
    <BackLayer onClick={closeModal}>
      <ModalLayer>{children}</ModalLayer>
    </BackLayer>
  );
}

const BackLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100dvh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalLayer = styled.div`
  min-height: 10rem;
  border-radius: 2rem;
  background-color: ${colors.White};
  z-index: 10;

  @media ${media.large} {
    width: ${breakPoints.tablet}px;
  }

  @media ${media.regular} {
    width: 80%;
  }
`;
