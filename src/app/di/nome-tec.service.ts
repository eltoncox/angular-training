import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from './meu-log.service';

@Injectable({
  providedIn: 'root'
})
export class NomeTecService {

  constructor(@Optional() private meulog: MeuLogService) { }

  getNomesTec(): string [] {
    if(this.meulog) {
      this.meulog.setLog('consultou o array de tecnogias');
    }

    return ['Angular 16','Java', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Ionic', 'Node.js'];
  }
}
