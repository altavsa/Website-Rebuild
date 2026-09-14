import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/** Real ALT AV circular mark (brand asset). */
export function LogoMark({ className = "h-9 w-9", priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo-alt-av.jpg"
      alt="Alt AV Entertainment Solutions logo"
      width={80}
      height={80}
      className={`rounded-full object-cover ${className}`}
      priority={priority}
    />
  );
}
