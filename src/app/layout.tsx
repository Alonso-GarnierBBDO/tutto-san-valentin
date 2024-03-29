import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/scss/global.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tutto - Navidad',
  description: 'En navidad algunos le dejan sus deseos a Santa, pero esta Navidad vos dejámelos a mí.',
  applicationName: 'Tutto Navidad',
  referrer: 'origin-when-cross-origin',
  keywords: ['Navidad', 'Tutto', 'Regalos', 'Santa claus'],
  authors: [{ name: 'Garnier BBDO' }, { name: 'Garnier BBDO', url: 'https://garnierbbdo.com' }],
  openGraph: {
    title: 'Tutto Navidad',
    description: 'En navidad algunos le dejan sus deseos a Santa, pero esta Navidad vos dejámelos a mí.',
    siteName: 'Tutto navidad',
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
