// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:"Promt_Saver",
  description:"Discover & share AI prompts"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className='main'>
          <div className='gradient'/>
        </div>

        <div className='app'>
        {children}
        </div>
      </body>
    </html>
  )
}
