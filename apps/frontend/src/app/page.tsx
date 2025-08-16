// apps/frontend/src/app/page.tsx
import { AuthLayout } from '@/app/components/AuthLayout';
import { AuthForm } from '@/app/components/AuthForm';
import { Logo } from '@/app/components/Logo';

// Lembre-se de que a imagem do logo deve ser 'logo.jpg' e estar na pasta public
const logoImage = '/logo.jpg'; 

export default function Home() {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <Logo src={logoImage} alt="AcolheSer Logo" />
        <AuthForm />
      </div>
    </AuthLayout>
  );
}