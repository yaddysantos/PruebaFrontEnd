import { Listado } from "./listado.model";

export class ListadoService {
  
  itemSeleccionado: string = "1";

  listados: Listado [] = [
    {id:1, descripcion:"Desarrollo de la app"},
    {id:1, descripcion:"Pruebas Unitarias"},
  ]

  eliminar(lista: Listado){
    const indice: number = this.listados.indexOf(lista);
    this.listados.splice(indice,1);
  }
}
