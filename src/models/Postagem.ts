import { Temas } from "./Temas";
import { Usuario } from "./Usuario";

export interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Temas | null
  usuario?: Usuario | null
}