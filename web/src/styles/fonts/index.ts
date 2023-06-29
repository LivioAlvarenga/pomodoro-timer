import {
  Inter,
  Playfair_Display as Playfair,
  Roboto_Mono as RobotoMono,
} from 'next/font/google'
// import localFont from 'next/font/local'

const inter400 = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter400',
  display: 'swap',
})

const inter700 = Inter({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-inter700',
  display: 'swap',
})

const playfair400 = Playfair({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-playfair400',
  display: 'swap',
})

const robotoMono700 = RobotoMono({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-robotoMono700',
  display: 'swap',
})

// To use personal fonts, add localFontName.woff2 in web/src/styles/fonts folder
// const localFont = localFont({
//   src: './localFontName.woff2',
//   variable: '--font-localFontName',
//   display: 'swap',
//   weight: '400',
// })
// Don't forget to export localFont below

export { inter400, inter700, playfair400, robotoMono700 }
