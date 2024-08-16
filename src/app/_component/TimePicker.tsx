'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { fonts } from '@/styles/fonts';

interface Props {
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

export default function TimePicker({ time, setTime }: Props) {
  const hourList: Array<number> = new Array(24).fill(0).map((_, i) => i);
  const minuteList: Array<string> = ['00', '30'];

  const [selectHour, setSelectHour] = useState<number>(0);
  const [selectMinute, setSelectMinute] = useState<string>('00');
  const [hourView, setHourView] = useState<boolean>(false);
  const [minuteView, setMinuteView] = useState<boolean>(false);

  const selectItemAction = (type: string, selectItem: any) => {
    type === 'hour' ? setSelectHour(selectItem) : setSelectMinute(selectItem);
    type === 'hour' ? setHourView(false) : setMinuteView(false);
    setTime(`${selectHour}:${selectMinute}`);
  };

  return (
    <Time>
      <Icon>🕗</Icon>
      <Container>
        {/* Hour */}
        <Wrapper>
          <TimePickerItem onClick={() => setHourView(!hourView)}>{selectHour}</TimePickerItem>
          {hourView && (
            <SelectList>
              {hourList?.map((hour) => (
                <SelectItem key={hour} onClick={() => selectItemAction('hour', hour)} selected={hour === selectHour}>
                  {hour}
                </SelectItem>
              ))}
            </SelectList>
          )}
        </Wrapper>

        <Colon>:</Colon>

        {/* Minute */}
        <Wrapper>
          <TimePickerItem onClick={() => setMinuteView(!minuteView)}>{selectMinute}</TimePickerItem>
          {minuteView && (
            <SelectList>
              {minuteList?.map((minute) => (
                <SelectItem
                  key={minute}
                  onClick={() => selectItemAction('minute', minute)}
                  selected={minute === selectMinute}
                >
                  {minute}
                </SelectItem>
              ))}
            </SelectList>
          )}
        </Wrapper>
      </Container>
    </Time>
  );
}

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const Icon = styled.p`
  font-size: 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const Wrapper = styled.div`
  position: relative;
  width: 5rem;
  height: 4rem;
`;

const TimePickerItem = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 4rem;
  font-weight: ${fonts.bold};
  color: ${colors.DarkGray};
  border: 1px solid ${colors.LightPrimary};
  border-radius: 0.5rem;
  cursor: pointer;
`;

const SelectList = styled.div`
  position: absolute;
  top: 4.3rem;
  left: 0;
  width: 100%;
  height: 7rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  z-index: 10;
  border-radius: 0.5rem;
  border: 1px solid ${colors.LightPrimary};
  background-color: ${colors.White};

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
  border-radius: 0.5rem;
  color: ${(props) => (props.selected ? colors.DarkPrimary : colors.DarkGray)};
  cursor: pointer;

  &:hover {
    background-color: ${colors.BackPrimary};
  }
`;

const Colon = styled.p`
  font-size: 1.8rem;
  font-weight: ${fonts.bold};
  color: ${colors.Black};
`;
