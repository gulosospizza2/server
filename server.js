const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();

// Middleware para servir arquivos estáticos e processar requisições POST
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: true }));

// Redireciona a rota raiz para a página inicial
server.get('/', (req, res) => {
    res.redirect('/home');
});

// Serve a página home.html
server.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Serve a página project.html
server.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'project.html'));
});

// Serve a página Cadastro.html
server.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'));
});

// Serve a página Login.html
server.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

// Configuração do EJS para renderizar páginas dinâmicas
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Simula um banco de dados em memória para usuários
const users = [];

// Rota para processar o cadastro
server.post('/cadastra', (req, res) => {
    const { username, password } = req.body;
    if (users.find(user => user.username === username)) {
        return res.send('Usuário já cadastrado!');
    }
    users.push({ username, password });
    res.send('Cadastro realizado com sucesso! <a href="/login">Ir para Login</a>');
});

// Rota para processar o login e renderizar a resposta dinâmica
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    const status = user ? 'Sucesso' : 'Falha';
    res.render('resposta', { username, status });
});

// Inicia o servidor na porta 80
server.listen(80, () => {
    console.log('Servidor rodando na porta 80');
    console.log('Acesse pelo navegador: http://localhost/');
});