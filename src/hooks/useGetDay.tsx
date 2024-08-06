interface dayType {
  [key: string]: string;
}

const dayObj: dayType = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토'
};

// dayNum : dayjs에서 반환해주는 요일 숫자 (0~6)
export const useGetDay = (dayNum: number | string) => {
  let dayIdx: number | string = dayNum;
  if (typeof dayIdx === 'string') {
    dayIdx = Number(dayIdx);
  }
  return dayObj[dayIdx];
};
