import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss']
})
export class Tab4Page implements OnInit {

  items = [
    { id: 1, name: 'T-shirt for men', photo: 'assets/img/airpods.jpg', color: 'Yellow', price: 20, quantity: 1 },
    { id: 2, name: 'LED Backpack', photo: 'assets/img/pack.jpg', color: 'Black', price: 50, quantity: 1 },
    { id: 3, name: 'Jordan Shoes', photo: 'assets/img/cable.jpg', color: 'Blue', price: 499, quantity: 1 },
    { id: 4, name: 'Wireless Headphone', photo: 'assets/img/G2050-BLUE.jpg.webp', color: 'Navy Blue', price: 30, quantity: 1 },
  ];
  total = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    for (let i = 0; i < this.items.length; i++) {
      this.total += this.items[i].price * this.items[i].quantity;
    }
  }

  addQuantity(index: number) {
    this.items[index].quantity++;
    this.total += this.items[index].price;
  }

  minusQuantity(index: number) {
    this.total -= this.items[index].price;
    if (this.items[index].quantity > 1) {
      this.items[index].quantity--;
    } else {
      this.items = this.items.filter((item) => item.id !== this.items[index].id);
    }
  }

  navigateToTab4() {
    this.router.navigate(['/tabs/tab1']);
  }
  navigateToAccount() {
    this.router.navigate(['/tabs/tab3']);
  }
}
