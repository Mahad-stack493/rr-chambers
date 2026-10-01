// Renders `*word*` segments of a string as <em> for italic gold accents.
export function emphasize(text) {
  if (typeof text !== 'string') return text
  return text.split(/(\*[^*]+\*)/g).map((part, index) =>
    part.startsWith('*') && part.endsWith('*') ? <em key={index}>{part.slice(1, -1)}</em> : part,
  )
}
