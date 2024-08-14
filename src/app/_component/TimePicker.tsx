'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { fonts } from '@/styles/fonts';

export default function TimePicker() {
  const [selectHour, setSelectHour] = useState<number>();
  const [selectMinute, setSelectMinute] = useState<string>();

  const hourList: Array<number> = new Array(24).fill(0).map((_, i) => i);
  console.log(hourList);
  const minuteList: Array<string> = ['00', '30'];

  return (
    <Wrapper>
      <TimePickerWrap>
        {hourList?.map((hour) => (
          <SelectItem
            key={hour}
            className="mousePointer"
            onClick={() => setSelectHour(hour)}
            selected={hour === selectHour}
          >
            {hour}
          </SelectItem>
        ))}
      </TimePickerWrap>
      :
      <TimePickerWrap>
        {minuteList?.map((minute) => (
          <SelectItem
            key={minute}
            className="mousePointer"
            onClick={() => setSelectMinute(minute)}
            selected={minute === selectMinute}
          >
            {minute}
          </SelectItem>
        ))}
      </TimePickerWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const TimePickerWrap = styled.div`
  width: 5rem;
  height: 7rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;

  // 스크롤바 커스텀
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.NormalGray};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.NormalPrimary};
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
`;

const SelectItem = styled.span<{ selected: Boolean }>`
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem 0;
  text-align: center;
  border-radius: 0.3rem;
  color: ${(props) => (props.selected ? colors.DarkPrimary : colors.DarkGray)};

  &:hover {
    background-color: ${colors.LightGray};
  }
`;
