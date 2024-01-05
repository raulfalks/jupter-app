import StyledComponentsRegistry from './lib/registry'
import localFont from 'next/font/local'
import './globals.css'

// Font files can be colocated inside of `app`
const consolas = localFont({
  src: './Consolas.ttf',
})
 
export default function RootLayout({ children }) {
  return (
    <html className={consolas.className}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}