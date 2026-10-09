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
  cover: CoverIllustration,
  timeline: TimelineIllustration,
  layers: LayersIllustration,
  devices: DevicesIllustration,
  flow: FlowIllustration,
  ports: PortsIllustration,
  components: ComponentsIllustration,
  memory: MemoryIllustration,
  network: NetworkIllustration,
  checklist: ChecklistIllustration,
  folders: FoldersIllustration,
  backup: BackupIllustration,
  text: TextIllustration,
  report: ReportIllustration,
  spreadsheet: SpreadsheetIllustration,
  quiz: QuizIllustration,
}

type IllustrationProps = {
  type: IllustrationKey
}

export function Illustration({ type }: IllustrationProps) {
  const Artwork = illustrations[type]
  return <Artwork />
}
