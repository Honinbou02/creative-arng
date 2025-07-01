import express from 'express';
const app = express();
app.use(express.json());

app.post('/auth/login', (req, res) => {
  const { email, senha } = req.body;
  if (email === 'admin@exemplo.com' && senha === '123') {
    res.json({ token: 'tokendefinitivo' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

app.get('/painel/resumo', (req, res) => {
  res.json({
    processos: 7,
    clientes: 3,
    mensagens: 20,
    totalFinanceiro: 1500.0,
  });
});

app.listen(3000);
