import { Component, OnInit } from '@angular/core';

interface Trabalho {
  titulo: string;
  descricao: string;
  img: string;
}

@Component({
  selector: 'app-procurados',
  templateUrl: './procurados.component.html',
  styleUrls: ['./procurados.component.css']
})
export class ProcuradosComponent implements OnInit {

  trabalhos: Trabalho[] = [];

  constructor() { }

  ngOnInit(): void {
    this.trabalhos = [
      {
        titulo: 'Panfletos',
        descricao: 'Materiais gráficos com alta qualidade, rapidez e excelente acabamento.',
        img: 'assets/trabalhos/trabalho1.jpg'
      },
      {
        titulo: 'Cartões de visita',
        descricao: 'Canecas, camisas, copos, brindes e produtos exclusivos para sua marca.',
        img: 'assets/trabalhos/trabalho2.jpg'
      },
      {
        titulo: 'Calendários e Agendas',
        descricao: 'Produção personalizada para empresas, eventos e ações promocionais.',
        img: 'assets/trabalhos/trabalho3.jpg'
      },
      {
        titulo: 'Banner e adesivos',
        descricao: 'Banners, faixas e materiais visuais para destacar seu negócio.',
        img: 'assets/trabalhos/trabalho4.jpg'
      }
    ];
  }

}
