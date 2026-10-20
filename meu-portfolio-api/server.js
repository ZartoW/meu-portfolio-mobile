const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const arquivoDados = path.join(__dirname, 'data', 'curriculo.json');

app.use(cors());
app.use(express.json());

function carregarDados() {
  return JSON.parse(fs.readFileSync(arquivoDados, 'utf8'));
}

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API do Currículo Zarto',
    status: 'online',
    endpoints: [
      '/api/curriculo',
      '/api/perfil',
      '/api/formacao',
      '/api/experiencias',
      '/api/projetos'
    ]
  });
});

app.get('/api/curriculo', (req, res) => {
  res.json(carregarDados());
});

app.get('/api/perfil', (req, res) => {
  res.json(carregarDados().perfil);
});

app.get('/api/formacao', (req, res) => {
  res.json(carregarDados().formacao);
});

app.get('/api/experiencias', (req, res) => {
  res.json(carregarDados().experiencias);
});

app.get('/api/projetos', (req, res) => {
  res.json(carregarDados().projetos);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API do Currículo Zarto rodando na porta ${PORT}`);
});
