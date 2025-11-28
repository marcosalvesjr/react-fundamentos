import { v4 as uuidv4 } from "uuid";
import type { IUser } from "./types/IUser";

export const users: IUser[] = [
  { id: uuidv4(), user: "teste", password: "teste123" },
  {
    id: uuidv4(),
    user: "marcos_alves",
    password: "123456",
  },
  {
    id: uuidv4(),
    user: "joao_silva",
    password: "abc123",
  },
  {
    id: uuidv4(),
    user: "ana_mendes",
    password: "senha123",
  },
  {
    id: uuidv4(),
    user: "carlos_souza",
    password: "pass321",
  },
  {
    id: uuidv4(),
    user: "juliana_ferreira",
    password: "reactdev",
  },
];
