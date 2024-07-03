import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/scss/global.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tutto - San Valentín',
  description: 'Colección de suéters robables de San Valentín',
  applicationName: 'Tutto - San Valentín',
  referrer: 'origin-when-cross-origin',
  keywords: ['San Valentín', 'Tutto', 'Regalos', 'Suéters'],
  authors: [{ name: 'Garnier BBDO' }, { name: 'Garnier BBDO', url: 'https://garnierbbdo.com' }],
  openGraph: {
    title: 'Tutto - San Valentín',
    description: 'Colección de suéters robables de San Valentín',
    siteName: 'Tutto - San Valentín',
    type: 'website',
    images: [
      {
          url : '/favicon.ico',
          width: 300,
          height: 300,
      }
   ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
