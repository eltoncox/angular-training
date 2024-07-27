import { Component } from '@angular/core';
import { PessoaServiceService } from './pessoa-service.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css'],
  //providers:[PessoaServiceService]
})
export class ListaPessoaComponent {

  pessoas: string[];
  nome: string = "Renata";


  constructor(private service: PessoaServiceService) {
    this.pessoas = this.service.getPessoas();
  }

  enviarNome() {
    this.service.setPessoa(this.nome);
    //this.nome = "";
    //this.pessoas = this.service.getPessoas();
  }
}
