'use client';

import styled from 'styled-components';
import Logo from './Logo';
import DefaultProifle from './DefaultProfile';
import { useWindowSize } from '@/hooks/useWindowSize';
import { colors } from '@/styles/colors';
import { breakPoints } from '@/styles/media';

export default function Header() {
  const size = useWindowSize();
  const isPC = size.width > breakPoints.tablet;

  return (
    <HeaderLayout>
      <LeftArea className="mousePointer">
        <Logo size={isPC ? '4rem' : '2.5rem'} />
      </LeftArea>
      <RightArea className="mousePointer">
        <DefaultProifle size={isPC ? '4rem' : '3rem'} />
      </RightArea>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${colors.NormalGray};
`;

const HorizontalWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const LeftArea = styled(HorizontalWrap)`
  justify-content: flex-start;
`;

const RightArea = styled(HorizontalWrap)`
  justify-content: flex-end;
`;
