export default function Home() {
  const textShadow = {
    color: '#ffffff',
    textShadow:
      '0 0 10px #26a9e0, 0 0 20px #26a9e0, 0 0 40px #26a9e0, 0 0 80px #26a9e0',
  }

  return (
    <main className="flex flex-col items-start justify-start">
      <h1 className="wrapper headline6 sm:headline4 lg:headline2 mt-5 font-playfair400 text-tGray  sm:text-center lg:max-w-5xl">
        Projeto de Timer com <b style={textShadow}>Nextjs 13 App Router</b>,
        React, Typescript e Tailwindcss.
      </h1>
      <div className="wrapper my-20 flex flex-col rounded-lg bg-gray-800 p-5 lg:p-10">
        timer
      </div>
    </main>
  )
}
