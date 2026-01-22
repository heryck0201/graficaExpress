import { Component } from '@angular/core';

@Component({
  selector: 'app-o-que-fazemos',
  templateUrl: './o-que-fazemos.component.html',
  styleUrls: ['./o-que-fazemos.component.css']
})
export class OQueFazemosComponent {

  servicos = [
    {
      title: 'Impressão Gráfica',
      image: 'assets/imgServicos/adesVinil.jpg',
      description: 'Materiais gráficos com alta qualidade, rapidez e excelente acabamento.'
    },
    {
      title: 'Personalizados',
      image: 'assets/imgServicos/brindes.jpg',
      description: 'Canecas, camisas, copos, brindes e produtos exclusivos para sua marca.'
    },
    {
      title: 'Calendários e Agendas',
      image: 'assets/imgServicos/embalagens.jpg',
      description: 'Produção personalizada para empresas, eventos e ações promocionais.'
    },
    {
      title: 'Comunicação Visual',
      image: 'assets/imgServicos/eventosStands.jpg',
      description: 'Banners, faixas e materiais visuais para destacar seu negócio.'
    },
    {
      title: 'Comunicação Visual',
      image: 'assets/imgServicos/impreGraf.jpg',
      description: 'Banners, faixas e materiais visuais para destacar seu negócio.'
    },
    {
      title: 'Comunicação Visual',
      image: 'assets/imgServicos/papelaria.jpg',
      description: 'Banners, faixas e materiais visuais para destacar seu negócio.'
    },
    {
      title: 'Comunicação Visual',
      image: 'assets/imgServicos/pdvDisplay.jpg',
      description: 'Banners, faixas e materiais visuais para destacar seu negócio.'
    },
  ];

}
