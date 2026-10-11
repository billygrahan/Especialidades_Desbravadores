type PageImageProps = {
  src: string
  alt: string
}

export function PageImage({ src, alt }: PageImageProps) {
  return (
    <img
      className="page-image"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  )
}
