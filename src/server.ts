import express, { response } from "express";

const Port = 3333;

const app = express();

app.listen(Port, () => console.log(`Servidor em execução na porta: ${Port}`));

const usuarios = [
  {
    id: 1,
    nome: "Kiske",
    celular: "19998805030",
    cidade: "Rio Claro",
    uf: "SP",
  },
  {
    id: 2,
    nome: "Hansen",
    celular: "19987541256",
    cidade: "Piracicaba",
    uf: "SP",
  },
  {
    id: 3,
    nome: "Deris",
    celular: "19998556632",
    cidade: "Limeira",
    uf: "SP",
  }
];

app.get("/usuario/{id}", (request, response) => {
  // const { id } = request.header;

  // const usuario = usuarios.find(id);

  // return response.json({
  //   retorno: {
  //     usuario: usuario
  //   },
  // });
});

app.get("/usuarios", (request, response) => {
  return response.json({
    retorno: {
      usuarios: usuarios,
    },
  });
});

app.post("/usuario", (request, respose) => {
  const {
    id,
    nome,
    celular,
    cidade,
    uf
  } = request.body;

  const usuario = {
    id,
    nome,
    celular,
    cidade,
    uf
  };

  usuarios.push(usuario);

  return response.status(201).send();
});
