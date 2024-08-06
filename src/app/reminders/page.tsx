'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import RemindItem from './_component/RemindItem';
import { remindList, remindType } from '@/static/remindList';
import dayjs from 'dayjs';

interface GroupedData {
  [key: string]: [];
}

// 날짜별 그룹화
const groupByDate = (data) => {
  return data.reduce((acc, current) => {
    const date = dayjs(current.remindAt).format('YYYY.MM.DD');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(current);
    return acc;
  }, {});
};

export default function Reminders() {
  // 정렬된 데이터
  const [reminds, setReminds] = useState<remindType[]>();

  useEffect(() => {
    if (remindList) {
      const copyRemindList: remindType[] = JSON.parse(JSON.stringify(remindList));
      // 다가오는 리마인드순 정렬
      const sortedData: remindType[] = [...copyRemindList].sort(
        (a, b) => new Date(a.remindAt).getTime() - new Date(b.remindAt).getTime()
      );
      // // 날짜별 그룹화
      // const remindGroupData = groupByDate(sortedData);
      // console.log(remindGroupData);
      setReminds(sortedData);
    }
  }, []);

  return (
    <RemindersList>{reminds && reminds.map((remind) => <RemindItem key={remind.id} remind={remind} />)}</RemindersList>
  );
}

const RemindersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
