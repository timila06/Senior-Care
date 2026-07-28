import Image from "next/image";

export function MockupImage({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return <figure><div className={`image-frame relative ${className}`}><Image src={`${basePath}${src}`} alt={alt} fill className="object-cover" priority={priority} sizes="(max-width: 768px) 100vw, 50vw" /></div><figcaption className="mockup-caption">AI-generated mockup image for design direction. Replace before launch.</figcaption></figure>;
}
