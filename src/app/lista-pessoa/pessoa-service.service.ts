import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  nomesPessoa:string []=
  ['Buda', 'Olavo de Carvalho', 'Seneca','Martin Luther King', 'Malcolm X', 'Henry Thoreau', 'Luiza'];

  constructor() { }
  getPessoas(): string[]  {
    return this.nomesPessoa;
  }
  setPessoa(nome: string): void {
    this.nomesPessoa.push(nome);
  }

}
