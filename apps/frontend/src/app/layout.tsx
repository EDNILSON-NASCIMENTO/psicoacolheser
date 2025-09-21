import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// 1. Importação dos estilos das bibliotecas
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';

// 2. Importação do seu CSS global (por último)
import './globals.css';

// 3. Importação do componente de inicialização do AOS
import { AOSInit } from './components/AOSInit';

// Configuração da fonte (pode ser qualquer uma do Google Fonts)
const inter = Inter({ subsets: ['latin'] });

// Metadados para SEO
export const metadata: Metadata = {
  title: 'Psico Acolhe Ser',
  description: 'Acolhimento e cuidado com a saúde mental.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}