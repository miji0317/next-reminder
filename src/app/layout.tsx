import type { Metadata } from 'next';
import CommonLayout from './_component/CommonLayout';

export const metadata: Metadata = {
  title: 'B comma',
  description: 'By JOY',
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <CommonLayout />
        {children}
      </body>
    </html>
  );
}
