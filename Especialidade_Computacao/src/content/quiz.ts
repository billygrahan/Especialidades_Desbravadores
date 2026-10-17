export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
};

export const quiz = [
  {
    q: 'Qual é a parte física e tangível do computador?',
    options: ['Software', 'Hardware', 'Sistema Operacional'],
    answer: 1,
  },
  {
    q: 'Qual componente é considerado o cérebro do computador?',
    options: ['RAM', 'CPU (Processador)', 'GPU'],
    answer: 1,
  },
  {
    q: 'Qual destes é um periférico de entrada de dados?',
    options: ['Teclado', 'Impressora', 'Monitor'],
    answer: 0,
  },
  {
    q: 'Qual destes é um periférico de saída de dados?',
    options: ['Mouse', 'Scanner', 'Monitor'],
    answer: 2,
  },
  {
    q: 'Qual memória é temporária e perde os dados ao desligar?',
    options: ['HD', 'Memória RAM', 'Memória ROM'],
    answer: 1,
  },
  {
    q: 'Qual tipo de armazenamento moderno usa chips e é ultra-rápido?',
    options: ['SSD', 'HD', 'Disquete'],
    answer: 0,
  },
  {
    q: 'Qual placa principal conecta todos os componentes do computador?',
    options: ['Placa de Vídeo', 'Placa-Mãe', 'Placa de Som'],
    answer: 1,
  },
  {
    q: 'Qual cabo transmite tanto áudio quanto vídeo em alta definição?',
    options: ['VGA', 'USB', 'HDMI'],
    answer: 2,
  },
  {
    q: 'Qual componente é responsável por fornecer energia elétrica para as peças?',
    options: ['Fonte de Alimentação', 'Processador', 'HD'],
    answer: 0,
  },
  {
    q: 'Qual equipamento distribui o sinal de rede Wi-Fi para os dispositivos?',
    options: ['Scanner', 'Roteador', 'Mouse'],
    answer: 1,
  },
];
