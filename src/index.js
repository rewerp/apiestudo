const { request, response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.listen(3333);

app.use(express.json());

console.log('Servidor está sendo executado na porta 3333');


const cliente = {};
const clientes = [];

app.post('/cadastrar-cliente', (request, response) => {
  const { cpf, nome, statement } = request.body;

  const clienteExistente = clientes.some((cliente) => cliente.cpf === cpf);

  if (clienteExistente) {
    return response.status(400).json({ erro: 'Cliente já cadastrado.' })
  }

  const cliente = {
    id: uuidv4(),
    cpf,
    nome,
    statement: []
  }

  clientes.push(cliente)

  return response.status(201).json(cliente)
})

app.get('/clientes', (request, response) => {
  if (clientes.length == 0) {
    return response.json({ mensagem: 'Nenhum registro foi encontrado.' })
  }

  return (response.json(clientes))
})

app.get('/cliente/:cpf', (request, response) => {
  const { cpf } = request.params;

  const cliente = clientes.find(cliente => cliente.cpf === cpf);

  if (!cliente) {
    return response.json({ mensagem: 'Cliente não encontrado.' });
  }

  return response.json(cliente);
})