import { Component, EventEmitter ,Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  @Input() menu: string[] = []; // Inicializa a propriedade com um array vazio

  @Output() nomeClicado = new EventEmitter();

  enviarNome(value: any) {
    this.nomeClicado.emit(value);
  }

}
