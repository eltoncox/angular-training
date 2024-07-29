import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {

  tamanho: number = 20;
  valorFonte: string = 20 + 'px' ;

  validaFonte:boolean = false;
  validaCor: boolean = false;

  incrementar() {
    this.tamanho++;
    this.valorFonte = this.tamanho + 'px';
  }
  mudaFonte() {
    this.validaFonte = !this.validaFonte;
  }

  mudaCor() {
    this.validaCor =!this.validaCor;
  }

}
