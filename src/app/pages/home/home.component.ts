import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
