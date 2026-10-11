import type { ReactNode } from 'react'
import type { IllustrationKey } from '../../content/pages'
import {
  DevicesIllustration,
  LayersIllustration,
  TimelineIllustration,
} from '../BasicsIllustrations'
import {
  ComponentsIllustration,
  FlowIllustration,
  MemoryIllustration,
  PortsIllustration,
} from '../HardwareIllustrations'
import {
  BackupIllustration,
  ChecklistIllustration,
  FoldersIllustration,
  NetworkIllustration,
} from '../SafetyIllustrations'
import { CoverIllustration } from './CoverIllustration'
import { QuizIllustration } from './QuizIllustration'
import { ReportIllustration } from './ReportIllustration'
import { SpreadsheetIllustration } from './SpreadsheetIllustration'
import { TextIllustration } from './TextIllustration'

type IllustrationComponent = () => ReactNode

const illustrations: Record<IllustrationKey, IllustrationComponent> = {
  cover: CoverIllustration, //imagem inicial de um menino com um computador, representando a linha do tempo da computação
  timeline: TimelineIllustration, //imagem da linha do tempo da computação, mostrando a evolução dos computadores ao longo do tempo
  layers: LayersIllustration,//piramide de retangulos
  devices: DevicesIllustration,// 6 elementos empilhados
  flow: FlowIllustration,//linha do tempo com 3 elementos com circulo no meio
  ports: PortsIllustration,//4 elementos lado a lado so que mais detalhado
  components: ComponentsIllustration,//imagem da placa mae ilustrativa
  memory: MemoryIllustration,//elementos mas com barra de carregamento/quantidade
  network: NetworkIllustration,//representação de equipamentos e skils
  checklist: ChecklistIllustration,// checklist com duas colunas
  folders: FoldersIllustration,//representação de pastas e subpastas
  backup: BackupIllustration,//representalçao de pastas e arquivos ou destinos
  text: TextIllustration,//representação de um documento de texto ilustrativa
  report: ReportIllustration,//representação de uma noticia/relatorio/documento com mensagem 
  spreadsheet: SpreadsheetIllustration,//representação de uma tabela no excel
  quiz: QuizIllustration,//retangulo com mensagems e emogi de trofel
}

type IllustrationProps = {
  type: IllustrationKey
}

export function Illustration({ type }: IllustrationProps) {
  const Artwork = illustrations[type]
  return <Artwork />
}
