import { Component } from '@angular/core';


@Component({
 selector: 'app-blog-section',
 templateUrl: './blog-section.component.html',
 styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent {
 entrada1 = {
   categoria: 'News',
   tituloEntrada: 'Volcán de Barro',
   cuerpoEntrada: 'Reserve con antelación el traslado de ida y vuelta al volcán del Totumo, u opte por una excursión más completa que también incluye las entradas, el almuerzo y un guía local. Algunos viajeros combinan una visita al volcán de barro con una parada en una playa o un recorrido por el Mar Rosado de Colombia, las Salinas de Galerazamba, conocido por su producción de sal rosa',
   autor: 'Kelly Rowan',
   fecha: 'March 12, 2023',
   tiempoDeLectura: '7 min read'
 };


 entrada2 = {
   categoria: 'Media',
   tituloEntrada: 'Islas del Rosario',
   cuerpoEntrada: 'Aunque muchas de las islas son privadas y, por lo tanto, el acceso está restringido, las islas más grandes, Isla Grande, Isla Rosario e Isla Caribarú atraen un flujo constante de personas que hacen escapadas de un día. Las excursiones de día completo desde Cartagena suelen centrarse en Isla Barú, que se encuentra más cerca de tierra firme y alberga atracciones como Playa Blanca, Playa Azul, la Bahía de Cholón y las fortalezas de San Fernando y San José',
   autor: 'Josiah Barclay',
   fecha: 'March 23, 2023 ',
   tiempoDeLectura: '4 min read'
 }


 entrada3 = {
   categoria: 'News',
   tituloEntrada: 'Casco Colonial',
   cuerpoEntrada: 'El casco antiguo es un elemento básico de la mayoría de los recorridos turísticos de Cartagena, que brindan una introducción completa a la ciudad amurallada para quienes visitan por primera vez. Explore las principales atracciones, incluido el Palacio de la Inquisición (Palacio de la Inquisición), la iglesia de San Pedro Claver y Las Bóvedas (una serie de bóvedas debajo de la ciudad) a pie o en bicicleta, Segway o minibús con aire acondicionado',
   autor: 'Evelyn Martinez',
   fecha: 'April 2, 2023',
   tiempoDeLectura: '10 min read'
 }
 
}




