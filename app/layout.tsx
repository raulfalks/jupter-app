import localFont from 'next/font/local';
import '@/app/ui/globals.css';

const consolas = localFont({
  src: './ui/Consolas.ttf',
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={consolas.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
