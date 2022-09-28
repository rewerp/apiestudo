import "reflect-metadata"
import { DataSource } from "typeorm"
import { usuarios } from "./entity/usuarios"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: process.env.DB_SCHEMA,
  synchronize: true,
  logging: false,
  entities: [usuarios],
  migrations: [/*...*/],
  subscribers: [],
})

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))