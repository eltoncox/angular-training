import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  nome: string = "Renata";

  mudar(valor: string) {
    this.nome = valor;
    // this.nome = valor +  '-';
  }

}
