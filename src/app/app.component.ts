import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string="fernando hErrera";
  valor:number=1100;

  cambiarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}
