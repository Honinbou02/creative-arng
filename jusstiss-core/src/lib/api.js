import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8529',
  headers: { 'Content-Type': 'application/json' }
});

export async function obterResumo(token) {
  return api.get('/painel/resumo', { headers: { Authorization: `Bearer ${token}` } });
}

export async function login(email, senha) {
  return api.post('/auth/login', { email, senha });
}

export default api;
