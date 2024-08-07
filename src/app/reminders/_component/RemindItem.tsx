'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { remindType } from '@/static/remindList';
import Clock from '@/app/_component/icon/Clock';
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
  const formatDate = `${formatHour}:${formatMinute}`;

  return (
    <RemindItemWrap onClick={openRemindDetail} className="mousePointer">
      <Clock size={'1.5rem'} color={colors.White} />
      <At>{formatDate}</At>
      <Divide> | </Divide>
      <Content>{remind.content}</Content>
    </RemindItemWrap>
  );
}

const RemindItemWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${colors.White};
  background-color: ${colors.NormalPrimary};
  border-radius: 1.5rem;
  padding: 1.3rem 1rem;
  & + & {
    margin-top: 0.8rem;
  }
`;

const Content = styled.p`
  font-weight: ${fonts.normal};

  @media ${media.large} {
    font-size: 1.7rem;
    margin-top: 1rem;
  }

  @media ${media.regular} {
    font-size: 1.5rem;
  }
`;

const At = styled.p`
  font-weight: ${fonts.bold};
  font-size: 1.3rem;
  margin-left: 0.3em;
`;

const Divide = styled.span`
  padding: 0 1rem;
`;
