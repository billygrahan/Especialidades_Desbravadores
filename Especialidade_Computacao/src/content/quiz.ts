export type QuizQuestion = {
  q: string
  options: string[]
  answer: number
}

export const quiz = [
  {
    q: 'Qual memória perde os dados ao desligar?',
    options: ['SSD', 'RAM', 'HD'],
    answer: 1,
  },
  {
    q: 'Qual conexão costuma levar vídeo e áudio digital?',
    options: ['HDMI', 'VGA', 'USB'],
    answer: 0,
  },
  {
    q: 'O que é backup?',
    options: [
      'Um tipo de teclado',
      'Uma cópia de segurança',
      'Um sistema operacional',
    ],
    answer: 1,
  },
];
