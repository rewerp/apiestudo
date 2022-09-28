import express, { response } from "express";
import "reflect-metadata";

require('dotenv/config');

const port = process.env.SERVER_PORT;

const app = express();

app.use(express.json());
app.listen(port, () => console.log(`Servidor em execução na porta: ${port}`));

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

app.get("/usuario/:id", (request, response) => {
  const usuarioFiltrado = usuarios.filter((usuario) => usuario.id == parseInt(request.params.id));

  console.log(usuarioFiltrado);

  return response.json({
    retorno: {
      usuario: usuarioFiltrado
    }
  });
});

app.get("/usuario/id", (request, response) => {
  const { id } = request.query;

  const usuarioFiltrado = usuarios.filter((usuario) => usuario.id === parseInt(id.toString()));

  console.log(usuarioFiltrado);

  return response.json({
    retorno: {
      usuario: usuarioFiltrado
    }
  });
});

app.get("/usuarios", (request, response) => {
  return response.json({
    retorno: {
      usuarios: usuarios,
    },
  });
});


app.post("/usuario", (request, response) => {
  const {
    id,
    nome,
    celular,
    cidade,
    uf
  } = request.body;

  usuarios.push({
    id,
    nome,
    celular,
    cidade,
    uf
  });

  return response.status(201).send();
});
