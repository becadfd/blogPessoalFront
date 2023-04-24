import { Temas } from "./Temas";

export interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Temas | null
}