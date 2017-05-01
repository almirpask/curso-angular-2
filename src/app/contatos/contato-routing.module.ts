import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatosComponent } from './contatos.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const contatoRoutes: Routes = [
    {
        path: 'contato',
        component: ContatosComponent
    },
    {
        path:'contato/save',
        component: ContatoDetalheComponent
    },
    {
        path:'contato/save/:id',
        component: ContatoDetalheComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [RouterModule]
})

export class ContatoRoutingModule{}