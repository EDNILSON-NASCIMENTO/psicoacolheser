// apps/frontend/components/AuthForm.tsx
export function AuthForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h1 className="text-2xl font-bold text-center mb-1">
        Bem-vindo ao AcolheSer
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Faça login para continuar
      </p>

      <form>
        {/* Campo de Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="seu@exemplo.com"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Campo de Senha */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Senha
          </label>
          <input
            type="password"
            placeholder="········"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Botão de Login */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white p-3 rounded-md font-semibold hover:bg-blue-800"
        >
          Entrar
        </button>
      </form>

      {/* Links de Senha e Registro */}
      <div className="flex justify-between mt-4 text-sm">
        <a href="#" className="text-blue-600 hover:underline">
          Esqueceu a senha?
        </a>
        <div className="text-gray-500">
          Precisa de uma conta?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
}