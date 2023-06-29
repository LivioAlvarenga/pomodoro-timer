import Image from 'next/image'

export function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-around bg-dark-500">
      <Image
        src={'./logoCodeDark.svg'}
        width={60}
        height={25}
        alt="ícone representando código de programação sinal menor e maior da cor azul"
        className="sm:hidden"
      />
      <Image
        src={'./logo-livioalvarenga-light.svg'}
        width={350}
        height={60}
        alt="Logo do desenvolvedor Livio Alvarenga escrito em letras brancas e um ícone de código de programação sinal menor e maior da cor azul"
        className="hidden sm:block"
      />
    </header>
  )
}
