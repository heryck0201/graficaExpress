import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private service: OrderDetailsService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.product = this.service.productDetails.find(x => x.id == id);
  }
}
