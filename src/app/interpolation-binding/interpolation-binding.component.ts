import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent {

    getLivro(): string {
      return ' o Java Como Programar';
    }

    getNumero(): number {
        return 6;
    }

}
