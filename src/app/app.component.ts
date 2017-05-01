import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista de contatos';
  ruan = 'me chamo ruan';

  log(param:string):void{
    console.log('Capturou o evento ',param);
  }
}
