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
    const id = this.route.snapshot.params['id'];
    this.product = this.service.productDetails.find(x => x.id == id);
  }

  contactWhatsApp(model: any) {
  const phone = "5591985601849";
  const message = `Olá, eu gostaria de saber mais sobre ${this.product.name}.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
}
