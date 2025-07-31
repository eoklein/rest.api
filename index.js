import express from 'express';

const app = express();
app.use(express.json());

var usuarios = []

app.get('/usuarios', (req, res) => {
    console.log("voce acessou a rota de usuarios");
    });

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    console.log(`voce acessou a rota de usuarios com o id`);
    res.send(`Usuario com id: ${id}`);
});

app.post('/usuarios/criar', (req, res) => {
    const { nome, idade } = req.body;
    usuarios.push({ nome, idade });
    console.log(`voce acessou a rota de usuarios para criar um novo usuario`);
    res.send(`Usuario criado com nome: ${nome} e idade: ${idade}`);
    
});

app.listen(3000);