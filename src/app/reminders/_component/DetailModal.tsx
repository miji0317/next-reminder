'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { remindList, remindType } from '@/static/remindList';
import { useGetDay } from '@/hooks/useGetDay';
import Clock from '@/app/_component/icon/Clock';
import ModalLayout from '@/app/_component/ModalLayout';

export default function DetailModal() {
  const router = useParams();
  const remindId = router.id;
  const [remind, setRemind] = useState<remindType>();

  // 날짜
  const remindDate = dayjs(remind?.remindAt);
  const year = remindDate.get('y');
  const month = Number(remindDate.get('M')) + 1;
  const date = remindDate.get('D');
  const day = useGetDay(remindDate.get('d'));
  const formatDate = `${year}년 ${month}월 ${date}일 (${day})`;

  // 시간
  const hour = remindDate.get('hour');
  const minute = remindDate.get('minute');
  const formatHour = String(hour).length === 1 ? `0${hour}` : hour;
  const formatMinute = String(minute).length === 1 ? `0${minute}` : minute;
  const formatTime = `${formatHour}:${formatMinute}`;

  useEffect(() => {
    const remindContent = remindList.find((remind) => remind.id === remindId);
    setRemind(remindContent);
  }, []);

  return (
    <ModalLayout>
      <ContentLayer>
        <Created>created at {remind?.createdAt}.</Created>
        <Date>
          <Clock size={'1.3rem'} color={colors.DarkPrimary} />
          {formatDate} {formatTime}
        </Date>
        <Content>{remind?.content}</Content>
      </ContentLayer>
    </ModalLayout>
  );
}

const ContentLayer = styled.div`
  padding: 1rem;
`;

const Created = styled.p`
  text-align: right;
  font-size: 1rem;
  font-weight: ${fonts.light};
  color: ${colors.DarkGray};
  margin-bottom: 0.5rem;
`;

const Content = styled.p`
  font-weight: ${fonts.normal};
  font-size: 1.8rem;
  padding: 1.3rem 0;
`;

const Date = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  font-weight: ${fonts.normal};
  font-size: 1.3rem;
  color: ${colors.DarkPrimary};
`;
