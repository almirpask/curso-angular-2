import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { Contato } from "./contatos/contato.model";

export class InMemoryDataService implements InMemoryDataService {
    createDb(): {} {
        let contatos: Contato[] = [
            {id:1 , nome:'Almir', email: 'almir@email.com', telefone: '(00) 0000-0000'},
            {id:2 , nome:'Patic', email: 'patric@email.com', telefone: '(00) 0000-0000'},
            {id:3 , nome:'Ruan', email: 'ruan@email.com', telefone: '(00) 0000-0000'},
            {id:4 , nome:'Shiryu', email: 'shiryu@email.com', telefone: '(00) 0000-0000'},
            {id:5 , nome:'Bruna', email: 'bruna@email.com', telefone: '(00) 0000-0000'}
        ];

        return {contatos};
    }

}