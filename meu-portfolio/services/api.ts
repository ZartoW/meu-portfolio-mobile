
const API_URL = 'https://meu-portfolio-api-jqi1.onrender.com';

export async function buscarCurriculo() {
  const response = await fetch(`${API_URL}/api/curriculo`);

  if (!response.ok) {
    throw new Error('Não foi possível carregar o currículo.');
  }

  return response.json();
}
