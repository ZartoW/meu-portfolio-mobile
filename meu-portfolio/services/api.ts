
const API_URL = 'http://192.168.1.5:3000';

export async function buscarCurriculo() {
  const response = await fetch(`${API_URL}/api/curriculo`);

  if (!response.ok) {
    throw new Error('Não foi possível carregar o currículo.');
  }

  return response.json();
}
