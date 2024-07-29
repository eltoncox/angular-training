import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {

  mostraNome!: boolean;
  cursos: string [] = [];
  mostrar(): void {
    this.mostraNome = !this.mostraNome
  }
  getValor(): boolean {
    return this.mostraNome;
  }
  addCurso() {
     this.cursos.push('Angular 16')
  }




}
