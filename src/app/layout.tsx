import type { Metadata } from 'next';
import CommonLayout from './_component/CommonLayout';

export const metadata: Metadata = {
  title: "B'",
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
        <div className="topLayer">{children}</div>
      </body>
    </html>
  );
}
