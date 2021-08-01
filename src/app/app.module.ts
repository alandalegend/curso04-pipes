import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SharedModule } from "./shared/shared.module";
import { AppRouterModule } from "./app-router.module";
import { VentasModule } from "./ventas/ventas.module";


//Cambiar el local de la app general
import localeEsMx from "@angular/common/locales/es-MX";
import localeEsHn from "@angular/common/locales/es-HN";
import localeFr from "@angular/common/locales/fr";
import localeDe from "@angular/common/locales/de";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsMx);
registerLocaleData(localeEsHn);
registerLocaleData(localeFr);
registerLocaleData(localeDe);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, BrowserModule, SharedModule, AppRouterModule, VentasModule],
  providers: [{ provide: LOCALE_ID, useValue: "es-MX" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
