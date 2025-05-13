const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const server = express();
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'; // URL do MongoDB (ajuste conforme necessário)
const client = new MongoClient(uri);

let db;

// Conecta ao banco de dados
client.connect()
    .then(() => {
        db = client.db('blogDB'); // Nome do banco de dados
        console.log('Conectado ao MongoDB');
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });

// Middleware para servir arquivos estáticos e processar requisições POST
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.redirect('/projects');
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
const posts = []; // Simula um banco de dados em memória para posts

server.get('/blog', async (req, res) => {
    try {
        const collection = db.collection('posts');
        const posts = await collection.find().toArray(); // Busca todos os posts
        res.render('blog', { posts });
    } catch (err) {
        console.error('Erro ao buscar posts:', err);
        res.status(500).send('Erro ao carregar posts.');
    }
});

// Serve a página cadastrar_post.html
server.get('/cadastrar_post', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
}); 

server.post('/cadastrar_post', async (req, res) => {
    const { titulo, resumo, conteudo } = req.body;

    try {
        const collection = db.collection('posts'); // Nome da coleção
        await collection.insertOne({ titulo, resumo, conteudo });
        res.redirect('/blog');
    } catch (err) {
        console.error('Erro ao cadastrar post:', err);
        res.status(500).send('Erro ao cadastrar post.');
    }
});

// Rota para cadastrar um novo post
server.post('/cadastrar_post', (req, res) => {
    const { titulo, resumo, conteudo } = req.body;
    posts.push({ titulo, resumo, conteudo });
    res.redirect('/blog');
});

// Inicia o servidor na porta 80
server.listen(80, () => {
    console.log('Servidor rodando na porta 80');
    console.log('Acesse pelo navegador: http://localhost/');
});