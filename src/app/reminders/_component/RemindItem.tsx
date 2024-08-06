'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { remindType } from '@/static/remindList';

type Props = {
  remind: remindType;
};

export default function RemindItem({ remind }: Props) {
  const router = useRouter();
  const openRemindDetail = () => {
    router.push(`/posts/${remind.id}`);
  };

  return (
    <RemindItemWrap onClick={openRemindDetail}>
      <At> 생성 시각 : {remind.createdAt}</At>
      <Content>{remind.content}</Content>
      <At> 알람 시각 : {remind.remindAt}</At>
    </RemindItemWrap>
  );
}

const RemindItemWrap = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

const Content = styled.p`
  color: ${colors.DarkGray};
  font-weight: ${fonts.light};

  @media ${media.large} {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  @media ${media.regular} {
    font-size: 1.3rem;
  }
`;

const At = styled.p`
  color: ${colors.Black};
  font-weight: ${fonts.light};
  font-size: 1.3rem;
`;
