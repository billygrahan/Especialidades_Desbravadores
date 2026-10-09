export function Shield({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`shield ${small ? 'shield-small' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 46">
        <path d="M20 2 36 8v12c0 11-7 19-16 24C11 39 4 31 4 20V8z" />
        <path d="m12 23 5 5 11-12" />
      </svg>
    </span>
  );
}

