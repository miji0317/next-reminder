'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { remindType } from '@/static/remindList';
import dayjs from 'dayjs';

type Props = {
  remind: remindType;
};

export default function RemindItem({ remind }: Props) {
  const router = useRouter();
  const openRemindDetail = () => {
    router.push(`/reminders/${remind.id}`);
  };

  // 날짜 데이터 포멧
  const remindDate = dayjs(remind.remindAt);
  const hour = remindDate.get('hour');
  const minute = remindDate.get('minute');
  const formatHour = String(hour).length === 1 ? `0${hour}` : hour;
  const formatMinute = String(minute).length === 1 ? `0${minute}` : minute;
  const formatDate = `${formatHour}시 ${formatMinute}분`;

  return (
    <RemindItemWrap onClick={openRemindDetail} className="mousePointer">
      <Content>{remind.content}</Content>
      <At> {formatDate} </At>
    </RemindItemWrap>
  );
}

const RemindItemWrap = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const Content = styled.p`
  color: ${colors.DarkGray};
  font-weight: ${fonts.light};

  @media ${media.large} {
    font-size: 1.7rem;
    margin-top: 1rem;
  }

  @media ${media.regular} {
    font-size: 1.5rem;
  }
`;

const At = styled.p`
  color: ${colors.Black};
  font-weight: ${fonts.light};
  font-size: 1.3rem;
`;
