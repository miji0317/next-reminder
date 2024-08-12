'use client';

import styled from 'styled-components';
import { MouseEvent, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { colors } from '@/styles/colors';
import { media, breakPoints } from '@/styles/media';

type Props = { children: ReactNode };

export default function ModalLayout({ children }: Props) {
  const router = useRouter();

  // 모달 외 백그라운드 영역 클릭시 모달 닫기
  const closeModal = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === 'modalBackLayer') {
      router.back(); // 뒤로가기
    }
  };

  // 모달 영역 클릭시 닫힘 방지
  const preventClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <BackLayer id="modalBackLayer" onClick={closeModal}>
      <ModalLayer onClick={preventClick}>{children}</ModalLayer>
    </BackLayer>
  );
}

const BackLayer = styled.div`
  position: absolute;
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
