'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@/styles/colors';
import { media } from '@/styles/media';
import { fonts } from '@/styles/fonts';
import RemindDate from './_component/RemindDate';
import RemindItem from './_component/RemindItem';
import CreateRemind from './_component/CreateRemind';
import { remindList, remindType } from '@/static/remindList';
import dayjs from 'dayjs';

interface GroupedData {
  [key: string]: remindType[];
}

// 날짜별 그룹화
const groupByDate = (data: remindType[]): GroupedData => {
  return data.reduce((acc: GroupedData, current: remindType) => {
    const date = dayjs(current.remindAt).format('YYYY.MM.DD');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(current);
    return acc;
  }, {});
};

export default function Reminders() {
  const [reminds, setReminds] = useState<GroupedData>();

  useEffect(() => {
    if (remindList) {
      const copyRemindList: remindType[] = JSON.parse(JSON.stringify(remindList));
      // 다가오는 리마인드순 정렬
      const sortedData: remindType[] = [...copyRemindList].sort(
        (a, b) => new Date(a.remindAt).getTime() - new Date(b.remindAt).getTime()
      );
      // // 날짜별 그룹화
      const remindGroupData = groupByDate(sortedData);
      console.log(remindGroupData);
      setReminds(remindGroupData);
    }
  }, []);

  return (
    <>
      <Header>
        <ListTitle>리마인더 목록</ListTitle>
        <CreateRemind />
      </Header>

      <RemindersList>
        {reminds &&
          Object.keys(reminds).map((group, idx) => {
            return (
              <div key={group}>
                <RemindDate key={group} groupDate={group} />
                <RemindItemWrap>
                  {reminds[group].map((item, idx) => (
                    <RemindItem key={item.id} remind={item} />
                  ))}
                </RemindItemWrap>
              </div>
            );
          })}
      </RemindersList>
    </>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 3rem;

  @media ${media.large} {
    padding: 3rem 0 1.5rem 0;
  }

  @media ${media.regular} {
    padding: 2rem 0 1rem 0;
  }
`;

const ListTitle = styled.p`
  color: ${colors.Black};
  font-weight: ${fonts.bold};

  @media ${media.large} {
    font-size: 3rem;
  }

  @media ${media.regular} {
    font-size: 2.5rem;
  }
`;

const RemindersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RemindItemWrap = styled.div`
  padding: 1.2rem 0.8rem;
`;
