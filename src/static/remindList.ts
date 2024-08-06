export type remindType = {
  id: number | string;
  content: string;
  createdAt: string;
  remindAt: string;
};

export const remindList = [
  {
    id: '1',
    content: 'typescript',
    createdAt: '2024-08-06 13:00',
    remindAt: '2024-08-07 15:00'
  },
  {
    id: '2',
    content: 'next routing',
    createdAt: '2024-08-06 10:00',
    remindAt: '2024-08-09 05:30'
  },
  {
    id: '3',
    content: 'next api',
    createdAt: '2024-08-10 12:00',
    remindAt: '2024-08-11 12:00'
  }
];
