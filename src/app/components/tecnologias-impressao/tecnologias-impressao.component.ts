import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias-impressao',
  templateUrl: './tecnologias-impressao.component.html',
  styleUrls: ['./tecnologias-impressao.component.css']
})
export class TecnologiasImpressaoComponent implements OnInit {

  tecnologias = [
  {
    titulo: 'Impressão Offset',
    descricao:
      'Ideal para grandes quantidades, a impressão offset garante o menor custo por unidade para materiais como flyers, cartões e revistas.',
    imagem: 'assets/imgTecnologias/maquinaOffSet.jpg'
  },
  {
    titulo: 'Gráfica Rápida',
    descricao:
      'Perfeita para pequenas tiragens e projetos com prazo curto, a impressão a laser entrega seus materiais com agilidade e alta qualidade.',
    imagem: 'assets/imgTecnologias/graficaRapida.jpg'
  },
  {
    titulo: 'Impressão Digital',
    descricao:
      'Para banners, adesivos, lonas e outros grandes formatos, oferecemos cores vibrantes e materiais resistentes.',
    imagem: 'assets/imgTecnologias/impressoraDigital.jpg'
  }
];


  constructor() {}

  ngOnInit(): void {}
}
