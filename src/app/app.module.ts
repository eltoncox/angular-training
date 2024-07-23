import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
