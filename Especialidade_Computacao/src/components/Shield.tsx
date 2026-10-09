import React from 'react';

type ShieldProps = {
  small?: boolean;
};

export function Shield({ small = false }: ShieldProps) {
  return (
    <span
      className={`shield ${small ? 'shield-small' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 108 110" width="100%" height="100%">
        {/* Estrutura Externa Vermelha Levemente Alargada nas Laterais */}
        <path
          d="M 8,10 H 100 A 2,2 0 0 1 102,12 V 28 L 54,102 L 6,28 V 12 A 2,2 0 0 1 8,10 Z"
          fill="#E53935"
          stroke="#E53935"
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Borda Externa Amarela Levemente Alargada */}
        <path
          d="M 8,10 H 100 A 2,2 0 0 1 102,12 V 28 L 54,102 L 6,28 V 12 A 2,2 0 0 1 8,10 Z"
          fill="none"
          stroke="#FFD54F"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Linha Amarela Interna Ajustada */}
        <path
          d="M 20,20 H 88 V 28 L 54,82 L 20,28 Z"
          fill="none"
          stroke="#FFD54F"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Círculo Branco Preenchido no Centro */}
        <circle
          cx="54"
          cy="48"
          r="13"
          fill="#FFFFFF"
        />

        {/* Linha Azul Escura Cortando o Círculo em Diagonal */}
        <line
          x1="34"
          y1="68"
          x2="74"
          y2="28"
          stroke="#0D47A1"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}