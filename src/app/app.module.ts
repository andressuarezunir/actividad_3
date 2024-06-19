import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CaracteristicasComponent } from './componentes/caracteristicas/caracteristicas.component';
import { TestimonialComponent } from './componentes/testimonial/testimonial.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CaracteristicasComponent,
    TestimonialComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
