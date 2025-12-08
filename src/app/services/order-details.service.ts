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
    name: "Diversos Envelopes",
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
    name: "Cartões Diversos",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/cartaoVisita1.jpg",

    models: [
      {
        img: "assets/imgCartoesDiversos/cartaoVisita1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgCartoesDiversos/cartaoCasamento1.jpg",
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
    name: "Cardápio e Cartazes",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/cardapio1.jpg",

    models: [
      {
        img: "assets/imgCardapiosCartaz/cardapio1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgCardapiosCartaz/cartaz1.jpg",
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
    img: "assets/img/panfleto1.jpg",

    models: [
      {
        img: "assets/imgPanfleto/modelo1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgPanfleto/modelo2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgPanfleto/modelo3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 1,
    name: "Calendário",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/panfleto1.jpg",

    models: [
      {
        img: "assets/imgPanfleto/modelo1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgPanfleto/modelo2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgPanfleto/modelo3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 1,
    name: "Bolsas",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/panfleto1.jpg",

    models: [
      {
        img: "assets/imgPanfleto/modelo1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgPanfleto/modelo2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgPanfleto/modelo3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 1,
    name: "Blocos",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/panfleto1.jpg",

    models: [
      {
        img: "assets/imgPanfleto/modelo1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgPanfleto/modelo2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgPanfleto/modelo3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 1,
    name: "Banners e Adesivos",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/panfleto1.jpg",

    models: [
      {
        img: "assets/imgPanfleto/modelo1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgPanfleto/modelo2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgPanfleto/modelo3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  {
    id: 1,
    name: "Agenda e apostilas",
    description: "Papel couché, reciclado, offset",
    img: "assets/img/panfleto1.jpg",

    models: [
      {
        img: "assets/imgPanfleto/modelo1.jpg",
        desc: "Modelo frente e verso 10x15cm"
      },
      {
        img: "assets/imgPanfleto/modelo2.jpg",
        desc: "Modelo promocional A5"
      },
      {
        img: "assets/imgPanfleto/modelo3.jpg",
        desc: "Modelo 1/3 de A4 – panfleto vertical"
      }
    ]
  },
  ];
}
