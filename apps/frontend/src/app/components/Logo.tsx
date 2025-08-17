// apps/frontend/components/Logo.tsx
import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
}

export function Logo({ src, alt }: LogoProps) {
  return (
    <div className="flex justify-center mb-6">
      <Image src={src} alt={alt} width={96} height={96} />
    </div>
  );
}