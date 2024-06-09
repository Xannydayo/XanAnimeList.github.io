import { Gabarito } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/app/component/utilities/navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Xan Anime List',
  description: 'Web Anime Yoga',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-slate-700`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
