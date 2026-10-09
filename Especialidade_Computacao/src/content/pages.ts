export type IllustrationKey =
  | 'cover' | 'timeline' | 'layers' | 'devices'
  | 'flow' | 'ports' | 'components' | 'memory'
  | 'network' | 'checklist' | 'folders' | 'backup'
  | 'text' | 'report' | 'spreadsheet' | 'quiz'

export type Page = {
  eyebrow: string
  title: string
  intro: string
  visual: IllustrationKey
  bullets: string[]
  tip?: string
}

export const pages: Page[] = [
  {
    eyebrow: 'SUA JORNADA COMEÇA AQUI',
    title: 'Especialidades de Computação',
    intro:
      'Descubra como a tecnologia funciona — e aprenda a usá-la para criar, resolver problemas e ajudar sua comunidade.',
    visual: 'cover',
    bullets: [
      'Computação 1 + Computação 2',
      'Um guia feito para Desbravadores curiosos',
      'Aprenda no seu ritmo, uma página por vez',
    ],
  },
  {
    eyebrow: '01 · PRIMEIROS PASSOS',
    title: 'O que é computação?',
    intro:
      'Computação é a ciência de organizar e transformar informações. O computador recebe dados, trabalha com eles e apresenta um resultado.',
    visual: 'timeline',
    bullets: [
      'Entrada: a informação que você fornece',
      'Processamento: o trabalho feito pela máquina',
      'Saída: o resultado que você consegue usar',
    ],
    tip: 'Exemplo: você digita uma conta (entrada), a calculadora resolve (processamento) e mostra a resposta (saída).',
  },
  {
    eyebrow: '02 · CONCEITOS ESSENCIAIS',
    title: 'O físico e o lógico',
    intro:
      'Um computador precisa de peças para existir e de instruções para funcionar. Essas duas partes trabalham juntas.',
    visual: 'layers',
    bullets: [
      'Hardware: tudo que podemos tocar, como teclado e tela',
      'Sistema operacional: organiza as tarefas e os recursos',
      'Software: aplicativos e programas usados no dia a dia',
      'Driver: ajuda o sistema a conversar com cada peça',
    ],
    tip: 'Analogia: hardware é o corpo; o sistema e os aplicativos são as instruções que orientam o que ele faz.',
  },
  {
    eyebrow: '03 · MUITAS FORMAS',
    title: 'A família dos computadores',
    intro:
      'Computadores têm tamanhos e formatos diferentes. A escolha depende da tarefa e de onde você vai usar.',
    visual: 'devices',
    bullets: [
      'Desktop: ótimo para uma mesa fixa',
      'Notebook: portátil, com tela e teclado integrados',
      'Tablet e smartphone: leves e controlados pelo toque',
      'Servidor: atende outros computadores pela rede',
    ],
    tip: 'Console, relógio inteligente e até alguns eletrodomésticos também têm computadores por dentro.',
  },
  {
    eyebrow: '04 · COMO A INFORMAÇÃO CIRCULA',
    title: 'Entrada, processamento e saída',
    intro:
      'Quase toda tarefa segue este caminho: os dados entram, o processador trabalha e a resposta sai.',
    visual: 'flow',
    bullets: [
      'Entrada: teclado, mouse, câmera e microfone',
      'Processamento: CPU interpreta e executa instruções',
      'Saída: monitor, caixa de som e impressora',
      'Comunicação: modem e roteador conectam dispositivos',
    ],
    tip: 'Um dispositivo pode ter mais de uma função: uma tela sensível ao toque mostra imagens e também recebe toques.',
  },
  {
    eyebrow: '05 · CONECTANDO PEÇAS',
    title: 'Portas e impressão',
    intro:
      'As portas permitem ligar acessórios. Antes de imprimir, vale revisar as opções para economizar papel e tinta.',
    visual: 'ports',
    bullets: [
      'USB: conecta periféricos e transfere dados',
      'HDMI: leva imagem e áudio digital',
      'VGA: conexão de vídeo analógica, comum em equipamentos antigos',
      'Impressão: confira cópias, papel, orientação e páginas',
    ],
    tip: 'Pré-visualize o documento antes de imprimir. Para compartilhar, exportar como PDF costuma preservar o layout.',
  },
  {
    eyebrow: '06 · POR DENTRO DO GABINETE',
    title: 'As peças principais',
    intro:
      'Os componentes internos trabalham em equipe. A placa-mãe conecta as peças e permite que troquem informações.',
    visual: 'components',
    bullets: [
      'CPU: executa instruções e cálculos',
      'Placa-mãe: conecta os componentes',
      'Placa de vídeo: prepara imagens e gráficos',
      'Fonte: entrega energia adequada ao computador',
    ],
    tip: 'A placa de som cuida do áudio. Muitos computadores já trazem vídeo e som integrados à placa-mãe.',
  },
  {
    eyebrow: '07 · GUARDAR E ACESSAR',
    title: 'Memória e armazenamento',
    intro:
      'Memória ajuda o computador a trabalhar agora. Armazenamento guarda seus arquivos para depois.',
    visual: 'memory',
    bullets: [
      'RAM: rápida e temporária; esvazia ao desligar',
      'ROM/firmware: guarda instruções importantes para iniciar',
      'HD: armazena em discos magnéticos e tem partes móveis',
      'SSD: usa chips, costuma ser mais rápido e resistente a impactos',
    ],
    tip: 'RAM não substitui o SSD: uma mantém tarefas abertas; o outro guarda fotos, trabalhos e aplicativos.',
  },
  {
    eyebrow: '08 · JUNTOS EM REDE',
    title: 'Redes e proteção elétrica',
    intro:
      'Uma rede permite que dispositivos troquem dados e compartilhem acesso à internet ou a uma impressora.',
    visual: 'network',
    bullets: [
      'LAN: rede local de casa, escola ou escritório',
      'Wi-Fi: conexão sem fio por ondas de rádio',
      'Filtro de linha: ajuda contra surtos e organiza tomadas',
      'Nobreak: mantém energia por um tempo durante uma queda',
    ],
    tip: 'Estabilizador não substitui proteção contra todos os problemas elétricos. Use equipamentos adequados e siga a orientação de um adulto.',
  },
  {
    eyebrow: '09 · CUIDAR PARA DURAR',
    title: 'Manutenção e segurança',
    intro:
      'Hábitos simples ajudam o computador a funcionar bem e protegem seus arquivos.',
    visual: 'checklist',
    bullets: [
      'Desligue pelo menu do sistema operacional',
      'Mantenha líquidos longe dos equipamentos',
      'Deixe as saídas de ar livres para evitar aquecimento',
      'Peça ajuda a um adulto para abrir ou limpar o gabinete',
    ],
    tip: 'Se o computador travar, espere um pouco e peça orientação antes de desligá-lo à força.',
  },
  {
    eyebrow: '10 · ENCONTRE TUDO',
    title: 'Arquivos e pastas',
    intro:
      'Pastas organizadas tornam mais fácil encontrar trabalhos, fotos e materiais do clube.',
    visual: 'folders',
    bullets: [
      'Crie pastas com nomes curtos e claros',
      'Copiar cria outra versão; mover troca o arquivo de lugar',
      'Ordene por nome, data ou tamanho',
      'Revise a Lixeira antes de esvaziá-la',
    ],
    tip: 'Uma estrutura útil: Clube → Especialidades → Computação → Meu trabalho.',
  },
  {
    eyebrow: '11 · PROTEGER O QUE IMPORTA',
    title: 'Compactação e backup',
    intro:
      'Compactar facilita enviar vários arquivos juntos. Backup protege uma cópia caso algo aconteça com o original.',
    visual: 'backup',
    bullets: [
      'ZIP reúne arquivos e pode reduzir o tamanho',
      'Mantenha uma cópia em outro local ou dispositivo',
      'Nuvem é prática, mas depende de internet e conta segura',
      'Faça cópias importantes regularmente',
    ],
    tip: 'Uma boa regra: mantenha mais de uma cópia e confira se o backup realmente abre.',
  },
  {
    eyebrow: '12 · COMUNICAR COM CLAREZA',
    title: 'Edição de texto · básico',
    intro:
      'Um editor de texto ajuda a preparar relatórios, convites e trabalhos com leitura confortável.',
    visual: 'text',
    bullets: [
      'Defina tamanho, margens e orientação da página',
      'Use títulos, parágrafos e listas para organizar ideias',
      'Negrito destaca; itálico dá ênfase; sublinhado use com moderação',
      'Alinhe o texto e revise ortografia antes de compartilhar',
    ],
    tip: 'Evite usar muitas fontes e cores. A consistência ajuda o leitor a encontrar as informações.',
  },
  {
    eyebrow: '13 · DOCUMENTOS COMPLETOS',
    title: 'Tabelas, imagens e PDF',
    intro:
      'Recursos avançados ajudam a apresentar informação com capricho e facilitar o compartilhamento.',
    visual: 'report',
    bullets: [
      'Use tabelas para comparar dados em linhas e colunas',
      'Ajuste imagens para não esconder o texto',
      'Cabeçalho, rodapé e número de página orientam o leitor',
      'Exporte para PDF para preservar a aparência do documento',
    ],
    tip: 'Antes de entregar, confira nome, data, páginas e se as imagens aparecem corretamente.',
  },
  {
    eyebrow: '14 · DADOS QUE AJUDAM',
    title: 'Planilhas e fórmulas',
    intro:
      'Planilhas organizam números e atualizam resultados automaticamente — ótimas para planejar uma atividade.',
    visual: 'spreadsheet',
    bullets: [
      'Células são os espaços formados por linhas e colunas',
      'Use uma coluna para item, outra para quantidade e outra para custo',
      '=SOMA(A1:A10) adiciona os valores do intervalo',
      '=MÉDIA(B1:B10) calcula a média dos valores',
    ],
    tip: 'Faça uma planilha simples de orçamento do acampamento: alimentação, transporte e materiais.',
  },
  {
    eyebrow: '15 · REVISÃO E CONQUISTA',
    title: 'Escolher, comparar, aprender',
    intro:
      'Para escolher um computador, pense primeiro no que você quer fazer. Depois compare as peças e confira a compatibilidade.',
    visual: 'quiz',
    bullets: [
      'RAM ajuda a manter mais tarefas abertas',
      'SSD deixa iniciar e abrir arquivos mais rápido',
      'Processador e vídeo devem atender às tarefas desejadas',
      'Confira conexões, tela, garantia e possibilidade de atualização',
    ],
    tip: 'Pronto para o desafio? Responda às perguntas e veja o que você já aprendeu.',
  },
];
