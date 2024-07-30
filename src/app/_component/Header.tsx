import styled from 'styled-components';
import Logo from './Logo';
import DefaultProifle from './DefaultProfile';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';

export default function Header() {
  return (
    <HeaderLayout>
      <LeftArea className="mousePointer">
        <Logo size={'4rem'} />
      </LeftArea>
      <RightArea className="mousePointer">
        <DefaultProifle size={'4rem'} />
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
