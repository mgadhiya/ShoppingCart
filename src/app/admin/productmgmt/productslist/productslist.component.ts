import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../model/product';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService,  private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.productService.getAllProucts().subscribe(products => this.products = products);
  }

}
