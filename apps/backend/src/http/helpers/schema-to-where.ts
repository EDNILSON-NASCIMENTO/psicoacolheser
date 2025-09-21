export function schemaToWhere(obj: Record<any, any>) {
  // 1. Converte o objeto para um array de [chave, valor]
  const entries = Object.entries(obj);

  // 2. Filtra o array, mantendo apenas as entradas com valor "truthy"
  const filteredEntries = entries.filter(([key, value]) => value);

  // 3. Constrói um novo objeto a partir das entradas filtradas e faz o cast para T
  return Object.fromEntries(filteredEntries);
}