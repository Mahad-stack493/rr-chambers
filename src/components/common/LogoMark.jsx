function LogoMark({ size = 48, className = '', title = 'RR Chambers' }) {
  return (
    <svg
      viewBox="0 0 64 80"
      width={(size * 64) / 80}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      role="img"
      aria-label={title}
    >
      <path d="M9 72V33a23 23 0 0 1 46 0v39" strokeWidth="1.4" />
      <path d="M32 6.5l2.5 2.5-2.5 2.5-2.5-2.5z" fill="currentColor" strokeWidth="0.8" />

      <path d="M32 25v41" strokeWidth="3.4" />
      <path d="M26.5 25h11M26.5 66h11" strokeWidth="1.4" />

      <path d="M32 25h5a10.5 10.5 0 0 1 0 21h-5" strokeWidth="1.7" />
      <path d="M38 46l9 20" strokeWidth="2.6" />
      <path d="M44 66h7" strokeWidth="1.4" />

      <path d="M32 25h-5a10.5 10.5 0 0 0 0 21h5" strokeWidth="1.7" />
      <path d="M26 46l-9 20" strokeWidth="2.6" />
      <path d="M20 66h-7" strokeWidth="1.4" />

      <path d="M4 72h56" strokeWidth="1.4" />
      <path d="M9 76h46" strokeWidth="0.8" />
    </svg>
  )
}

export default LogoMark
