import { Component, OnInit } from '@angular/core';
import { Listado } from '../listado/listado.model';
import { ListadoService } from '../listado/listado.service';
import { Selector } from './selector.model';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  descripcionInput: string;
  id: number = 2;

  ListaSelector: Selector[]=[
    {name: "All", value:"1"},
    {name: "Eliminado", value:"2"}
  ];

  constructor(public listadoServicio: ListadoService) { 

  }

  ngOnInit(): void {

  }

  agregarValorLista(){
    if (this.descripcionInput != undefined) {
      this.listadoServicio.listados.push(new Listado(this.id+1,this.descripcionInput))
      this.descripcionInput = '';
    }else{
      alert("Campo vacio")
    }
  }
}
