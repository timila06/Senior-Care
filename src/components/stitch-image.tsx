import Image from "next/image";
import { cn } from "@/lib/utils";

type StitchImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function StitchImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: StitchImageProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const resolvedSrc = src.startsWith("/") ? `${basePath}${src}` : src;

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
