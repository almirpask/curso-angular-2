import { ContatoBusca } from './contato-busca.component';
import { FormsModule } from '@angular/forms';
import { ContatoService } from './contato.service';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from './contatos.component';



@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule,
    FormsModule
  ],
  declarations: [
    ContatoBusca,
    ContatosComponent,
    ContatoDetalheComponent

    ],
  exports: [ 
    ContatoBusca,
    ContatosComponent
  ],
  providers:[
    ContatoService
  ]

})
export class ContatosModule { }
