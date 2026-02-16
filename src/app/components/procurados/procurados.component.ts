import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Trabalho {
  id: number;
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

 constructor(private router: Router) { }


  ngOnInit(): void {
    this.trabalhos = [
  {
    id: 1,
    titulo: 'Panfletos',
    descricao: 'Materiais gráficos com alta qualidade, rapidez e excelente acabamento.',
    img: 'assets/imgPanfleto/panfleto1.jpg'
  },
  {
    id: 4,
    titulo: 'Cartões de visita',
    descricao: 'Canecas, camisas, copos, brindes e produtos exclusivos para sua marca.',
    img: 'assets/imgCartoesDiversos/cartaoVisita1.jpg'
  },
  {
    id: 5,
    titulo: 'Calendários e Agendas',
    descricao: 'Produção personalizada para empresas, eventos e ações promocionais.',
    img: 'assets/imgCardapiosCartaz/cartaz1.jpg'
  },
  {
    id: 6,
    titulo: 'Canecas,Copos e Garrafas',
    descricao: 'Banners, faixas e materiais visuais para destacar seu negócio.',
    img: 'assets/imgCanecasCoposGarrafas/garrafa1.jpg'
  }
];

  }

goToProduct(id: number) {
  this.router.navigate(['/produto', id]);
}


}
