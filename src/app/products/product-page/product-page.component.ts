import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL' ,'3XL'];
  selectedSize: string | null = null;
  selectSize(size: string) {
    this.selectedSize = size;
  }

  constructor() { }

  ngOnInit() {
  }

}
