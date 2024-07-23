import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent {

  pessoas: string [] = ['Buda', 'Olavo de Carvalho', 'Seneca','Martin Luther King', 'Malcolm X'];

  nome: string = "Pedro"
  listar() {

  }

}
