import { Component } from "@angular/core";

@Component({
  selector: "app-basicos",
  templateUrl: "./basicos.component.html",
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = "alan";
  nombreUpper: string = "ALAN";
  nombreCompleto: string = "alan pÉrÉz";
  fecha: Date = new Date();
}
