import type { Metadata } from 'next';
import { ReactNode } from 'react';
import CommonLayout from './_component/CommonLayout';

export const metadata: Metadata = {
  title: "B'",
  description: 'By JOY',
  icons: {
    icon: '/logo.png'
  }
};

type Props = { children: ReactNode; modal: ReactNode };

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="ko">
      <body>
        <CommonLayout />
        <div className="topLayer">
          {children}
          {modal}
        </div>
      </body>
    </html>
  );
}
