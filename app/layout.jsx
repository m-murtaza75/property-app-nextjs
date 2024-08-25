import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Property App Nextjs',
    description: 'Find your rental property',
    keywords: 'rent, find rental properties, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
    <body>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </body>
    </html>
  )
}

export default MainLayout