import { Metadata } from 'next'
import { metadata as metadataHome } from '../layout'
import { ListHistory } from './ListHistory'

export const metadata: Metadata = {
  ...metadataHome, // extend the common metadata
  title: 'Histórico do Timer',
  description:
    'Este é o repositório do Pomodoro Timer do portfólio de Livio Alvarenga, desenvolvedor fullstack. Ele apresenta uma página de histórico do timer com uma tabela exibindo tarefas, duração, início e status. Este repositório é uma forma de mostrar e compartilhar o meu conhecimento com outros desenvolvedores.',
  openGraph: {
    ...metadataHome.openGraph, // extend the common openGraph metadata
    title: 'Pomodoro Timer por Livio Alvarenga | Histórico do Timer',
    description:
      'Este é o repositório do Pomodoro Timer do portfólio de Livio Alvarenga, desenvolvedor fullstack. Ele apresenta uma página de histórico do timer com uma tabela exibindo tarefas, duração, início e status. Este repositório é uma forma de mostrar e compartilhar o meu conhecimento com outros desenvolvedores.',
    url: 'https://pomodoro-timer-qaf7ns626-livioalvarenga.vercel.app/history',
    type: 'website', // as it's a main page, keep it as a website
  },
  twitter: {
    ...metadataHome.twitter, // extend the common twitter metadata
    title: 'Pomodoro Timer por Livio Alvarenga | Histórico do Timer',
    description:
      'Este é o repositório do Pomodoro Timer do portfólio de Livio Alvarenga, desenvolvedor fullstack. Ele apresenta uma página de histórico do timer com uma tabela exibindo tarefas, duração, início e status. Este repositório é uma forma de mostrar e compartilhar o meu conhecimento com outros desenvolvedores.',
  },
  alternates: {
    ...metadataHome.alternates, // extend the common alternates metadata
    canonical:
      'https://pomodoro-timer-qaf7ns626-livioalvarenga.vercel.app/history',
  },
}

export default function History() {
  return (
    <div className="wrapper flex flex-1 flex-col p-3 lg:p-14">
      <h1 className="headline6 sm:headline4 lg:headline2 mt-5 font-playfair400 text-gray-100">
        Meu histórico
      </h1>
      <ListHistory />
    </div>
  )
}
