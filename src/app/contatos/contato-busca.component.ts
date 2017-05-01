import { Router } from '@angular/router';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { ContatosModule } from './contatos.module';
import { Observable, Subject } from 'rxjs';
import { Component, EventEmitter , OnInit, Input , Output, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
@Component({
    selector: 'contato-busca',
    templateUrl: './contato-busca.component.html',
    styles: [`
        .curos-pointers:hover {
            cursor: pointer;
        }
    `]
    
})
export class ContatoBusca implements OnInit, OnChanges {
    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
    contatos: Observable<ContatosModule[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit():void {
        this.contatos = this.termosDaBusca
            .debounceTime(1000)
            .distinctUntilChanged()
            .switchMap(term => term ? this.contatoService.search(term): Observable.of<Contato[]>([]))
            .catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);    
            });
     }

     ngOnChanges(changes: SimpleChanges):void{
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
     }

     search(termo:string):void{
         this.termosDaBusca.next(termo);
         this.buscaChange.emit(termo);
     }

     verDetalhe(contato: Contato):void{
         let link = ['contato/save',contato.id];
         this.router.navigate(link);
         this.buscaChange.emit();
         
     }
}