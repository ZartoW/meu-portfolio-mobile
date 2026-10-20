const API_URL = 'https://curly-space-orbit-x5x7rjrw6r7wc66wp-3000.app.github.dev/';

export async function buscarCurriculo() {
  const response = await fetch(`${API_URL}/api/curriculo`);

  if (!response.ok) {
    throw new Error('Não foi possível carregar o currículo.');
  }

  return response.json();
}
