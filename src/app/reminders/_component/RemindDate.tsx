import styled from 'styled-components';
import { fonts } from '@/styles/fonts';
import { colors } from '@/styles/colors';
import { useGetDay } from '@/hooks/useGetDay';
import dayjs from 'dayjs';

type Props = {
  groupDate: string;
};

export default function RemindDate({ groupDate }: Props) {
  // 날짜 데이터 포멧
  const remindDate = dayjs(groupDate);
  const year = remindDate.get('y');
  const month = Number(remindDate.get('M')) + 1;
  const date = remindDate.get('D');
  const day = useGetDay(remindDate.get('d'));
  const formatDate = `${year}년 ${month}월 ${date}일 ${day}요일`;

  return (
    <DateWrap>
      <At> {formatDate} </At>
      <AtLine />
    </DateWrap>
  );
}

const DateWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const At = styled.p`
  color: ${colors.DeepPrimary};
  font-weight: ${fonts.bold};
  font-size: 1.3rem;
`;

const AtLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${colors.DeepPrimary};
`;
