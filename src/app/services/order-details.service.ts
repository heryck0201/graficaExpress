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
    description: "Papel couché, reciclado, offset",
    img: "assets/img/panfleto1.jpg",

    models: [
      {
        img: "assets/imgPanfleto/panfleto1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgPanfleto/folheto1.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgPanfleto/folder1.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
    {
    id: 2,
    name: "Livretos",
    description: "Pastas com bolsa",
    img: "assets/img/livretos1.jpg",

    models: [
      {
        img: "assets/imgLivretosDiversos/livretos1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgLivretosDiversos/livroLombada.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgLivretosDiversos/revista1.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
    {
    id: 3,
    name: "Envelopes",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/envelope1.jpg",

    models: [
      {
        img: "assets/imgEnvelopeDiversos/envelope1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgEnvelopeDiversos/receituario1.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgEnvelopeDiversos/timbrado1.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
    {
    id: 4,
    name: "Cartões",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/cartaoVisita1.jpg",

    models: [
      {
        img: "assets/imgCartoesDiversos/cartaoVisita1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgCartoesDiversos/cartaoVisita3.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgCartoesDiversos/tag1.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
    {
    id: 5,
    name: "Cardápios",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/cardapio1.jpg",

    models: [
      {
        img: "assets/imgCardapiosCartaz/cardapio1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgCardapiosCartaz/cardapio2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgCardapiosCartaz/cartaz1.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
    {
    id: 6,
    name: "Canecas,Copos e Garrafas",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/caneca1.jpg",

    models: [
      {
        img: "assets/imgCanecasCoposGarrafas/caneca1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgCanecasCoposGarrafas/copo1.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgCanecasCoposGarrafas/garrafa1.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 7,
    name: "Camisas",
    description: "Papel couché, reciclado, offset",
    img: "assets/imgCamisas/camisa1.jpg",

    models: [
      {
        img: "assets/imgCamisas/camisa1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgCamisas/camisa2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgCamisas/camisa3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 8,
    name: "Calendários",
    description: "Papel couché, reciclado, offset",
    img: "assets/imgCalendario/calendario3.jpg",

    models: [
      {
        img: "assets/imgCalendario/calendario1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgCalendario/calendario1.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgCalendario/calendario3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 9,
    name: "Bolsas",
    description: "Papel couché, reciclado, offset",
    img: "assets/imgBolsas/ecoBag.jpg",

    models: [
      {
        img: "assets/imgBolsas/mochilaSacola.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgBolsas/ecoBag.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgBolsas/bolsa2.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 10,
    name: "Blocos",
    description: "Papel couché, reciclado, offset",
    img: "assets/imgBloco/bloco1.jpg",

    models: [
      {
        img: "assets/imgBloco/bloco1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgBloco/blocoNotas1.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgBloco/bloco1.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 11,
    name: "Banners",
    description: "Papel couché, reciclado, offset",
    img: "assets/imgBannersAdesivos/banner1.jpg",

    models: [
      {
        img: "assets/imgBannersAdesivos/banner1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgBannersAdesivos/banner2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgBannersAdesivos/banner3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 12,
    name: "Agendas",
    description: "Papel couché, reciclado, offset",
    img: "assets/imgAgendaApostila/agenda1.jpg",

    models: [
      {
        img: "assets/imgAgendaApostila/agenda2.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgAgendaApostila/agenda3.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgAgendaApostila/agenda1.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  ];
}
