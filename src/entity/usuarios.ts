import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class usuarios {

  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  nome: string

  @Column({
    length: 11,
  })
  celular: string

  @Column({
    length: 50,
  })
  cidade: string

  @Column({
    length: 2,
  })
  uf: string

}