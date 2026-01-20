import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  productData: any;

  constructor(
    private service: OrderDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productData = this.service.productDetails;
  }

  goToProduct(id: number) {
    this.router.navigate(['/produto', id]);
  }

}
