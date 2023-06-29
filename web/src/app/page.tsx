import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  const textShadow = {
    color: '#ffffff',
    textShadow:
      '0 0 10px #26a9e0, 0 0 20px #26a9e0, 0 0 40px #26a9e0, 0 0 80px #26a9e0',
  }

  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Header />
      <h1 className="wrapper headline6 sm:headline4 lg:headline2 mt-5 font-playfair400 text-tGray  sm:text-center lg:max-w-5xl">
        Projeto de Timer com <b style={textShadow}>Nextjs 13 App Router</b>,
        React, Typescript e Tailwindcss.
      </h1>

      <Footer />
    </main>
  )
}
