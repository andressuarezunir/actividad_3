import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerSectionComponent } from './componentes/banner-section/banner-section.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarAppComponent } from './componentes/navbar-app/navbar-app.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerSectionComponent,
    HomeComponent,
    NavbarAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
