const express = require("express");
const app = express();

// Estamos usando JSON no body
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

// [GET] /herois -> Read all
app.get("/herois", function (req, res) {
  res.send(herois.filter(Boolean));
});

// [GET] /herois/:id -> Read by ID
app.get("/herois/:id", function (req, res) {
  // Pegar ID pela rota
  const id = req.params.id;

  // Acessar o registro na lista
  const item = herois[id - 1];

  // Enviar registro encontrado
  res.send(item);
})

// [POST] /herois -> Create
app.post("/herois", function (req, res) {
  // Acessando valor enviado na req
  const item = req.body.nome;

  // Insere esse valor na lista
  herois.push(item);

  // Exibe uma mensagem de sucesso
  res.send("Criar um heroi");
});

// [PUT] /herois/:id -> Update
app.put("/herois/:id", function (req, res) {
  // Pega o ID
  const id = req.params.id;
  // Pega o item a ser atualizado
  const item = req.body.nome;
  // Atualiza na lista o valor recebido
  herois[id - 1] = item;
  // Retorna mensagem de sucesso
  res.send("Item atualizado com sucesso!");
});

// [DELETE] /herois/:id -> Delete
app.delete("/herois/:id", function (req, res) {
  // Pega o ID
  const id = req.params.id;

  // Atualiza na lista o valor recebido
  delete herois[id - 1];

  // Retorna mensagem de sucesso
  res.send("Item atualizado com sucesso!");
});

app.listen(3000, function () {
  console.log("Aplicação rodando em http://localhost:3000");
});