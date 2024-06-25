import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerSectionComponent } from './componentes/banner-section/banner-section.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarAppComponent } from './componentes/navbar-app/navbar-app.component';
import { BlogSectionComponent } from './componentes/blog-section/blog-section.component';
import { FeaturesSectionComponent } from './componentes/features-section/features-section.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HeroSectionComponent } from './componentes/hero-section/hero-section.component';
import { TestimonialComponent } from './componentes/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerSectionComponent,
    HomeComponent,
    NavbarAppComponent,
    BlogSectionComponent,
    FeaturesSectionComponent,
    FormularioComponent,
    HeroSectionComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
