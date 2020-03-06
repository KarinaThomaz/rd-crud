import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Produto } from 'src/app/models/Produto';


@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  formProduto:FormGroup;

  constructor() { }

  createForm(produto: Produto){
    this.formProduto=new FormGroup({
      cod: new FormControl(produto.codigo),
      desc: new FormControl(produto.desc),
      reg_anvisa: new FormControl(produto.reg_anvisa),
      controlado: new FormControl(produto.controlado),
      cod_grupo: new FormControl(produto.cod_grupo)
    })
  }

  ngOnInit(): void {
    this.createForm(new Produto());
  }

  enviarProduto(){
    console.log(this.formProduto);
  }

}
