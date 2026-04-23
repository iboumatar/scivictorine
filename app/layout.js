import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'SCI Victorine - Immobilier de prestige au Sénégal',
  description: "Conception, réalisation et vente d'immeubles de standing au Sénégal",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}