export type remindType = {
  id: number | string;
  content: string;
  createdAt: string;
  remindAt: string;
};

export const remindList = [
  {
    id: '1',
    content: 'to do 1',
    createdAt: '2024-08-06 13:00',
    remindAt: '2024-08-07 15:00'
  },
  {
    id: '2',
    content: 'to do 2',
    createdAt: '2024-08-06 10:00',
    remindAt: '2024-08-07 05:00'
  },
  {
    id: '3',
    content: 'to do 3',
    createdAt: '2024-08-10 12:00',
    remindAt: '2024-08-11 12:00'
  }
];
