import { Component } from '@angular/core';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular';

  foto: string = 'favicon.ico';

  constructor(private service: AlertaService) {}
  enviarMsg(): void {
    this.service.msgAlerta();
  }

  desenvolvimento: string [] = ['Angular 16', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java'];

  valor!: string;

  valorPassado(valorPassado: string) {
    this.valor = valorPassado;
  }

}


