import { Component, OnInit } from '@angular/core';
import { Product } from "./product"
import { ProductService } from './product.service'
import { Observable } from '../../../node_modules/rxjs';
import { parse } from 'querystring';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  addedProduct:string;
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    this.productService.getProducts().subscribe(p => {
      var data = JSON.parse(p._body);
      this.products = data;
    });

  }

addToCart(product:Product){
this.addedProduct=product.productName;


}

}
