import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {
  cityTitle: string = 'Cartagena de Indias';
  cityDescription: string = 'Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos. Con un clima tropical, la ciudad también es un destino popular por sus playas. Se puede llegar en bote a la Isla de Barú, con playas de arena blanca y palmeras, y a las Islas del Rosario, famosas por sus arrecifes de coral.';
  cityImage: string = 'assets/img/f4.jpg';

  features = [
    {
      icon: 'bi bi-collection',
      title: 'MUSEOS',
      description: 'Si ha visitado el Centro de Convenciones Cartagena de Indias, operado por Grupo Heroica, seguro ha sido recibido por ‘La Galerna’, un imponente mural que evoca lo abstracto y lo simbólico de la fauna colombiana y los vientos huracanas, con las características formas del destacado artista colombiano Alejandro Obregón, pintado previo a la inauguración del recinto en 1982.'
    },
    {
      icon: 'bi bi-building',
      title: 'HOSPEDAJE',
      description: 'Colombia ofrece vistas espectaculares, una gastronomía inigualable, una riqueza cultural y natural que no encuentras en otro lugar y gente amable que te espera con una sonrisa. La mezcla de todo esto da como resultado una serie de aventuras que debes tener antes de morir.'
    },
    {
      icon: 'bi bi-toggles2',
      title: 'RESTAURANTES',
      description: 'La gastronomía de Cartagena es una mezcla de sabores intensos que se cultivan en sus tierras y producen sensaciones indescriptibles al combinarse con algunas aves, carnes rojas y productos de la ciénaga, los ríos y el mar. ¡Cada bocado es una fiesta en el paladar!'
    },
    {
      icon: 'bi bi-cash-coin',
      title: 'COMPRAS',
      description: 'La oferta comercial de Cartagena abarca desde las pequeñas tiendas familiares hasta los grandes centros comerciales. Sin olvidar los mercados semanales al aire libre o los de abastos donde encontrar los mejores productos de nuestra tierra.'
    }
  ];

}
