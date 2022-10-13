import { Component, OnInit } from '@angular/core';
import { Listado } from "./listado.model";
import { ListadoService } from './listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  tittle: 'Listado funciona';
  
  listado: Listado[] = [];
  ListaEliminados: Listado[] = [];

  constructor(public listadoService: ListadoService) { }

  ngOnInit(): void {
    this.listado = this.listadoService.listados;
  }

  eliminarRegistro(lista: Listado){
    this.listadoService.eliminar(lista);
    this.ListaEliminados.push(lista);
  }
  
}
