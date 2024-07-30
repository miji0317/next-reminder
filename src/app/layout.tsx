import './globals.css';

export const metadata = {
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
      <body>{children}</body>
    </html>
  );
}
