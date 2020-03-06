import { Component, OnInit, ViewChild } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { ListaDeProdutosComponent } from '../lista-de-produtos/lista-de-produtos.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // pega um elemento filho 
  @ViewChild('lista') lista: ListaDeProdutosComponent

  constructor() { }

  // criando o evento de seleção do grupo
  listarGrupo(grupo: Grupo) {
    //console.log(grupo)
    // console.log(this.lista)
      this.lista.listaDoGrupo(grupo.codigo)
    

  }

  ngOnInit(): void {
  }

}
