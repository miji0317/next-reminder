'use client';

import dayjs from 'dayjs';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { fonts } from '@/styles/fonts';

interface Props {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

export default function DatePicker({ date, setDate }: Props) {
  const today = dayjs().format('YYYY-MM-DD');

  const selectDate = (event) => {
    console.log(event.currentTarget.value);
    setDate(event.currentTarget.value);
  };

  return (
    <Date>
      <Icon>📅</Icon>
      <DatePickerInput type="date" defaultValue={date} min={today} onChange={selectDate} />
    </Date>
  );
}

const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const Icon = styled.p`
  font-size: 2rem;
`;

const DatePickerInput = styled.input`
  position: relative;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${colors.LightPrimary};
  color: ${colors.DarkGray};
  font-weight: ${fonts.bold};
  font-size: 1.5rem;
  text-align: center;

  // 인풋 클릭 영역을 전체 영역으로 변경 & 아이콘 삭제
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }
`;
