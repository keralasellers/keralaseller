import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kerala Sellers',
  description: 'Kerala Sellers is a platform to connect local sellers with customers.',

}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
