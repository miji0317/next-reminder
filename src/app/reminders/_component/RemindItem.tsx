'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { remindType } from '@/static/remindList';
import { useGetDay } from '@/hooks/useGetDay';
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
  const year = remindDate.get('y');
  const month = Number(remindDate.get('M')) + 1;
  const date = remindDate.get('D');
  const day = useGetDay(remindDate.get('d'));
  const hour = remindDate.get('hour');
  const minute = remindDate.get('minute');
  const ampm = Number(hour) > 12 ? '오후' : '오전';
  const formatHour = String(hour).length === 1 ? `0${hour}` : hour;
  const formatMinute = String(minute).length === 1 ? `0${minute}` : minute;
  const formatDate = `${year}년 ${month}월 ${date}일 ${day}요일 ${ampm} ${formatHour}시 ${formatMinute}분`;

  return (
    <RemindItemWrap onClick={openRemindDetail} className="mousePointer">
      <DateWrap>
        <At> {formatDate} </At>
        <AtLine />
      </DateWrap>
      <Content>{remind.content}</Content>
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

const DateWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const At = styled.p`
  color: ${colors.Black};
  font-weight: ${fonts.light};
  font-size: 1.3rem;
`;

const AtLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${colors.DarkGray};
`;
