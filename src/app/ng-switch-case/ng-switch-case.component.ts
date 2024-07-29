import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent {
  numero: number = 0;
  incremetarNumero() {
   this.numero++;
  }

}
