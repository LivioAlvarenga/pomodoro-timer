import { TableData } from './TableData'
import { TableHeader } from './TableHeader'

export default function History() {
  return (
    <div className="wrapper flex flex-1 flex-col p-3 lg:p-14">
      <h1 className="headline6 sm:headline4 lg:headline2 mt-5 font-playfair400 text-gray-100">
        Meu histórico
      </h1>
      <div className=" mt-8 max-h-[calc(100vh_-_30vh)] flex-1 overflow-auto">
        <table className="w-full min-w-[600px] border-collapse">
          <thead className="">
            <tr>
              <TableHeader>Tarefa</TableHeader>
              <TableHeader>Duração</TableHeader>
              <TableHeader>Início</TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData>Projeto de Timer</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData statusColor={'yellow'}>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer com Nextjs</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData statusColor={'red'}>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData statusColor={'green'}>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer com Nextjs</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer com Nextjs</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer com Nextjs</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData>Concluído</TableData>
            </tr>
            <tr>
              <TableData>Projeto de Timer com Nextjs</TableData>
              <TableData>25</TableData>
              <TableData>10:00</TableData>
              <TableData>Concluído</TableData>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
