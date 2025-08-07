import express from "express";

//para todos os exercicios, considere a seguinte lista de objetos

/*
Exercicio 1 - Limitando o numero de resultados
Utilize a rota /usuarios, declarada a seguir, para a resolucao do exercicio

*considere que sera passado, via query param, um parametro chamado "limit"

faça com que a resposta contenha apenas o numero de registros solicitado pelo usuario

DICA: a funcao .slice(inicio, fim), "corta" a lista, retornando apenas os valores de um intervalo
*/
const usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Joana" },
  { id: 4, nome: "Carlos" },
];

const app = express();
app.use(express.json());

app.get("/usuarios", (req, res) => {
  const limit = parseInt(req.query.limit);
  
    // Verifique se o parâmetro 'limit' é válido
  if (!limit || isNaN(limit) || limit <= 0) {
    return res.json(usuarios);
  }
    // Limite o número de usuários retornados
  const limitedUsers = usuarios.slice(0, limit);
  res.json(limitedUsers);
});
app.listen(3000);
