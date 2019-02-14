import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animation, style, animate } from '@angular/animations';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
  animations: [
   
  ]
})

export class KontaktComponent implements OnInit {
  linkedin: KontaktItem = new KontaktItem('Linkedin',
    ' ',
    '/src/kontaktItemImages/linkedin.jpg',
    'LinkedPic',
    '');

  techs = [this.linkedin];

  constructor() { }

  ngOnInit() {
  }

}

export class KontaktItem {
  name;
  link;
  imgSrc;
  imgAlt;
  descripcion;
  constructor(name, link, imgSrc, imgAlt, descripcion) {
    this.name = name;
    this.link = link;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.descripcion = descripcion;
  }
}
