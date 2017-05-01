import { DialogService } from './../dialog.service';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html'
  //styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit{
  contatos: Contato[] = [];
  mensagem: {};
  classesCss: {};
  currentTimeOut: any;
  
  constructor(private contatoService:ContatoService,
  private dialigService: DialogService){}

  ngOnInit():void {
    //this.contatos = this.contatoServide.getContatos();
    this.contatoService.findAll()
      .then((contatos: Contato[])=> {
        this.contatos = contatos;
      }).catch(err => {
        console.log(err);
        this.mostrarMensagem({
          tipo: 'danger',
          texto:'Ocorreu um erro ao buscar contatos!'
        })
      });
  }
  onDelete(contato:Contato): void{
    console.log('deletar',contato);
    this.dialigService.confirm('Realmente quer deletar'+ contato.nome +' ?')
    .then((canDelete:boolean)=> {
      if(canDelete){
        this.contatoService.delete(contato)
        .then(()=>{
          this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id);
          this.mostrarMensagem({
            tipo:'success',
            texto: 'Contato deletado!'
          })
        }).catch(err => {
          this.mostrarMensagem({
            tipo:'danger',
            texto: 'Ocorreu um erro ao deletar o contato!'
          })
        })
      }
    })
    
  }
  

  private mostrarMensagem(mensagem: {tipo: string, texto: string}): void{
    this.mensagem = mensagem;
    this.montarClasses(mensagem.tipo);
    if (mensagem.tipo != 'danger') {
      if(this.currentTimeOut){
        clearTimeout(this.currentTimeOut);
      };
      this.currentTimeOut = setTimeout(()=>{
      this.mensagem = undefined;
    }, 3000);
    }
    

  }

  private montarClasses(tipo:string):void{
    this.classesCss = {
      'alert': true
    };
    this.classesCss['alert-'+tipo] = true;


  }
}
