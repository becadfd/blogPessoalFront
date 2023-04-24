import { Temas } from "./Temas";

export interface Postagens {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Temas | null
}