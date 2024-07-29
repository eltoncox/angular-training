import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  nomes: any [] = [
    { id:1, nome:'Renata'},
    { id:2, nome:'Malcolm'},
    { id:3, nome:'Maria Luiza'},
    { id:4, nome:'José Antônio'},
    { id:5, nome:'Elton Luiz'}];

    meuSave(index: number, nomes: any) {
      return nomes.id;
    }

    atualizar() {
      this.nomes = [
        { id:1, nome:'Renata'},
        { id:2, nome:'Malcolm'},
        { id:3, nome:'Maria Luiza'},
        { id:4, nome:'José Antônio'},
        { id:5, nome:'Elton Luiz'},
        { id:6, nome:'Teste'}
      ]
    }
}
