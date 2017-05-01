import { ServiceInterface } from './../interfaces/service.interface';
import { Http, Headers, Response } from '@angular/http';
import { CONTATOS } from './contatos-moc';
import { Contato } from './contato.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ContatoService implements ServiceInterface<Contato>{
    //contatos: Contato[] = CONTATOS;
    private apiUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'aplication/jons'});
    constructor (   
        private http: Http
    ){}
    findAll(): Promise<Contato[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
        //return Promise.resolve(CONTATOS);
    }

    find(id: number): Promise<Contato>{
        return this.findAll()
        .then((contatos: Contato[])=> contatos.find(contato => contato.id === id));
    }

    create(contato: Contato): Promise<Contato>{

        return this.http
        .post(this.apiUrl, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then((response:Response)=> {
            return response.json().data as Contato;
        }).catch(this.handleError);

    }

    update(contato:Contato): Promise<Contato>{
        const url = `
            ${this.apiUrl}/${contato.id}
        `;//app /contatos/id
        return this.http
        .put(url, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then(()=> {
            return contato as Contato;
        }).catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato>{
         const url = `
            ${this.apiUrl}/${contato.id}
        `;//app /contatos/id
        return this.http
        .delete(url,{headers: this.headers})
        .toPromise()
        .then(()=> {
            return contato as Contato;
        }).catch(this.handleError);

    }
    private handleError(err: any): Promise<any>{
        console.log('Error:', err);
        return Promise.reject(err.message || err);
    }
    search(term: string): Observable<Contato[]>{

        return this.http
            .get(`${this.apiUrl}/?nome=${term}`)
            .map((res:Response) => res.json().data as Contato[]);

    }
} 