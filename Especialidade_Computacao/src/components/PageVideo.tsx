type PageVideoProps = {
  src: string
  title: string
}

export function PageVideo({ src, title }: PageVideoProps) {
  return (
    <iframe
      className="page-video"
      src={src}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
