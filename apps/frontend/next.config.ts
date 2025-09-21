import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilite o suporte a bibliotecas que precisam de transcompilação
  // como o react-simple-lightbox
  transpilePackages: ['react-simple-lightbox'],
};

export default nextConfig;