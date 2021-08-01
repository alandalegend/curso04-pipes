import { Component, OnInit } from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "app-no-comunes",
  templateUrl: "./no-comunes.component.html",
  styles: [],
})
export class NoComunesComponent {
  ///i10nselect
  nombre: string = "Alan";
  genero: string = "masculino";
  invitacionMapa = {
    masculino: "invitarlo",
    femenino: "invitarla",
  };
  //i10Plural
  clientes: string[] = ["Alan", "Carlos", "Guillermo", "Jorge", "Denisse"];
  clientesMapa = {
    "=0": "no tenemos ningún cliente esperando",
    "=1": "tenemos un cliente esperando",

    other: "tenemos # clientes esperando.",
  };

  cambiarCliente() {
    this.nombre = "Dennise";
    this.genero = "femenino";
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //key value pipe
  persona = {
    nombre: "Fernando",
    edad: 35,
    direccion: "Otawwa, Canadá",
  };

  heroes = [
    {
      nombre: "SuperMan",
      vuela: true,
    },
    {
      nombre: "SuperMan",
      vuela: false,
    },
    { nombre: "Acuaman", vuela: false },
  ];

  //async pípe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data de promesa");
    }, 3500);
  });
}
