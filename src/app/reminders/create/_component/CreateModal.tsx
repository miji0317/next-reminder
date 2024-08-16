'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import ModalLayout from '@/app/_component/ModalLayout';
import InputRemind from '@/app/reminders/create/_component/InputRemind';
import DatePicker from '@/app/_component/DatePicker';
import TimePicker from '@/app/_component/TimePicker';

export default function CreateModal() {
  const today = dayjs().format('YYYY-MM-DD');
  const now = dayjs().format('HH:mm');

  const [content, setContent] = useState<string>('');
  const [date, setDate] = useState<string>(today);
  const [time, setTime] = useState<string>(now);

  useEffect(() => {
    console.log('content => ', content);
    console.log('date => ', date);
    console.log('time => ', time);
  }, [date, time, content]);

  return (
    <ModalLayout>
      <ContentLayer>
        <Title>새 리마인더</Title>
        <InputRemind value={content} setStateValue={setContent} />
        <DatePicker date={date} setDate={setDate} />
        <TimePicker time={time} setTime={setTime} />
        <SaveButton>저장✏️</SaveButton>
      </ContentLayer>
    </ModalLayout>
  );
}

const ContentLayer = styled.div`
  padding: 1.5rem;
  & > * + * {
    margin-top: 1rem;
  }
`;

const Title = styled.p`
  font-weight: ${fonts.bold};
  color: ${colors.Black};
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;

  @media ${media.large} {
    font-size: 2.2rem;
  }

  @media ${media.regular} {
    font-size: 2rem;
  }
`;

const SaveButton = styled.div`
  height: 4rem;
  font-size: 1.7rem;
  font-weight: ${fonts.bold};
  color: ${colors.White};
  background-color: ${colors.DarkPrimary};
  border-radius: 1rem;
  text-align: center;
  line-height: 4rem;
  margin-top: 1rem;
  cursor: pointer;
`;
