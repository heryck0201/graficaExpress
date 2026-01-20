import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  productData: any;

  // 🔹 IMAGENS DO CARROSEL
  images: string[] = [
    'assets/imgBanner/banner1.jpg',
    'assets/imgBanner/banner2.jpg',
    'assets/imgBanner/banner3.jpg'
  ];

  currentIndex: number = 0;
  intervalId: any;

  constructor(
    private service: OrderDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productData = this.service.productDetails;
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.images.length;
    }, 5000); // 5 segundos
  }

  goToProduct(id: number) {
    this.router.navigate(['/produto', id]);
  }
}
