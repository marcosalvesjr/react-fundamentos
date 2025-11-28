import { v4 as uuid } from "uuid";

export type OfficeProduct = {
  id: string;
  name: string;
  quantity: number;
  type: "material" | "eletronico" | "mobília" | "papelaria";
};

export const officeProducts: OfficeProduct[] = [
  {
    id: uuid(),
    name: "Cadeira ergonômica",
    quantity: 5,
    type: "mobília",
  },
  {
    id: uuid(),
    name: "Mesa de escritório",
    quantity: 3,
    type: "mobília",
  },
  {
    id: uuid(),
    name: "Monitor 24 polegadas",
    quantity: 10,
    type: "eletronico",
  },
  {
    id: uuid(),
    name: "Teclado sem fio",
    quantity: 15,
    type: "eletronico",
  },
  {
    id: uuid(),
    name: "Mouse sem fio",
    quantity: 15,
    type: "eletronico",
  },
  {
    id: uuid(),
    name: "Headset USB",
    quantity: 7,
    type: "eletronico",
  },
  {
    id: uuid(),
    name: "Impressora a laser",
    quantity: 2,
    type: "eletronico",
  },
  {
    id: uuid(),
    name: "Papel A4",
    quantity: 50,
    type: "papelaria",
  },
  {
    id: uuid(),
    name: "Caneta azul",
    quantity: 200,
    type: "papelaria",
  },
  {
    id: uuid(),
    name: "Caneta preta",
    quantity: 150,
    type: "papelaria",
  },
  {
    id: uuid(),
    name: "Post-it bloco amarelo",
    quantity: 40,
    type: "papelaria",
  },
  {
    id: uuid(),
    name: "Marcador permanente",
    quantity: 30,
    type: "papelaria",
  },
  {
    id: uuid(),
    name: "Grampeador",
    quantity: 12,
    type: "material",
  },
  {
    id: uuid(),
    name: "Caixa de grampos",
    quantity: 80,
    type: "material",
  },
  {
    id: uuid(),
    name: "Organizador de mesa",
    quantity: 10,
    type: "material",
  },
  {
    id: uuid(),
    name: "Lixeira de escritório",
    quantity: 6,
    type: "material",
  },
  {
    id: uuid(),
    name: "Roteador Wi-Fi",
    quantity: 3,
    type: "eletronico",
  },
  {
    id: uuid(),
    name: "Extensão elétrica 5 tomadas",
    quantity: 12,
    type: "material",
  },
  {
    id: uuid(),
    name: "Calculadora de mesa",
    quantity: 8,
    type: "eletronico",
  },
  {
    id: uuid(),
    name: "Clips de papel",
    quantity: 300,
    type: "material",
  },
];
