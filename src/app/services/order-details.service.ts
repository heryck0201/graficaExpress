import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrderDetailsService {

  constructor() { }

  productDetails = [
    {
      id: 1,
      name: "Panfleto",
      description: "Papel couche, reciclado, offset",
      img: "assets/img/panfleto1.jpg"
    },
    {
      id: 2,
      name: "Pastas com bolsa",
      description: "Papel couche, triplex, reciclado",
      img: "assets/img/pastaBolsa1.jpg"
    },
    {
      id: 2,
      name: "Blocos",
      description: "Papel couche, triplex, reciclado",
      img: "assets/img/blocoNotas1.jpg"
    },
    {
      id: 3,
      name: "Calendários",
      description: "Papel couche, triplex, reciclado",
      img: "assets/img/calendario1.jpg"
    },
    {
      id: 4,
      name: "Livretos",
      description: "Papel couche, triplex, reciclado",
      img: "assets/img/livretos1.jpg"
    },
    {
      id: 5,
      name: "agenda",
      description: "Papel couche, triplex, reciclado",
      img: "assets/img/agenda1.jpg"
    },
    {
      id: 6,
      name: "Apostila",
      description: "Papel couche, triplex, reciclado",
      img: "assets/img/apostila1.jpg"
    },
    {
      id: 7,
      name: "Cartões de visita",
      description: "Papel couche, triplex, reciclado",
      img: "assets/img/cartaoVisita1.jpg"
    },
    {
      id: 8,
      name: "Envelope",
      description: "Papel couche, triplex, reciclado",
      img: "assets/img/envelope1.jpg"
    },
    // {
    //   id: 9,
    //   name: "Camisas",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
    // {
    //   id: 10,
    //   name: "Banners",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
    //     {
    //   id: 10,
    //   name: "Banners",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
    //     {
    //   id: 11,
    //   name: "Canecas",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
    //     {
    //   id: 12,
    //   name: "Canetas",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
    // {
    //   id: 13,
    //   name: "Copos",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
    // {
    //   id: 14,
    //   name: "Garrafas",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
    // {
    //   id: 15,
    //   name: "Copos",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
    // {
    //   id: 13,
    //   name: "Bolsas",
    //   description: "Papel couche, triplex, reciclado",
    //   img: "assets/img/pastaBolsa1.jpg"
    // },
  ];
}
