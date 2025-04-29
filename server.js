const express = require('express');
const path = require('path');
const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('/home', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/projects">Projetos</a></li>
                </ul>
            </nav>

            <h1>Bem-vindo ao meu site!</h1>
            <p>Este é o meu site pessoal onde você pode conhecer um pouco mais sobre meus projetos Full Stack e experiências de desenvolvimento web.</p>
        </body>
        </html>
    `);
});

server.get('/projects', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Projetos</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/projects">Projetos</a></li>
                </ul>
            </nav>

            <h1>Meus Projetos</h1>
           </ul>
    </nav>
    <h1>Projetos full stack</h1>
    <table>
        <tr>
            <th>Projetos</th>
            <th>Link dos projetos</th>
        </tr>
        <tr>
            <td>Página inicial</td>
            <td><a href="#">https://gulosospizza2.github.io/lab-1/</a></td>  
        </tr> 
        <tr>
            <th>Esqueleto do site</th>
            <td><a href="#">https://gulosospizza2.github.io/lab-02-2/</a></td>
        </tr>
        <tr> 
            <td>Copiando um Modelo</td>
            <td><a href='#'>https://gulosospizza2.github.io/lab-02/</a></td>  
        </tr> 
        <tr> 
             <td>Adivinhação</td>
             <td><a href="#">https://gulosospizza2.github.io/lab-04/</a></td>
        </tr>
        <tr>
            <td>Canvas</td> 
            <td><a href="#">https://gulosospizza2.github.io/lab-5/</a></td>
        </tr>
        <tr> 
             <td>Animação</td> 
             <td><a href="#">https://gulosospizza2.github.io/lab-066/</a></td>
        </tr>
    </table>
        </body>
        </html>
    `);
});
    
server.listen(80, () => {
    console.log('Servidor rodando na porta 80');
    console.log('Acesse pelo navegador: http://<seu-ip>/');
});