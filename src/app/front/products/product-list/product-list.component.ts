import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  isRotated: boolean = false;
  toggleRotation() {
    this.isRotated = !this.isRotated;
  }
  constructor() { }

  ngOnInit() {
  }

}
