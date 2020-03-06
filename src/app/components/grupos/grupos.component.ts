import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];
  // evento criado para selecionar o grupo criado
  @Output() grupoClicado = new EventEmitter()

  private grupoTodo = new Grupo(0, "Todos");

  // adicionando o httpService para a comunicação do serviço
  constructor(private http: HttpService) {
    
    this.http.getGrupos().subscribe(
        (data) => {
          this.grupos=[this.grupoTodo, ...data]
        }
    )    

  }

  ngOnInit(): void {
  }

}
