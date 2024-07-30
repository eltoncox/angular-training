import { Component } from '@angular/core';
import { NomeTecService } from './nome-tec.service';


@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent {

  tecnologias: string [] = [];

  constructor(private meuService: NomeTecService ) {
     this.tecnologias = this.meuService.getNomesTec();

  }


}
