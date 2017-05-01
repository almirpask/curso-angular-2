import { DialogService } from './dialog.service';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { ContatosModule } from './contatos/contatos.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import './util/rxjs-extensions';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContatosModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
