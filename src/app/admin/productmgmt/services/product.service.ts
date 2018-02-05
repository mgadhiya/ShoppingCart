import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from '../../model/product';

@Injectable()

export class ProductService {

        products: Product[] = [
        {
          productid : 1,

        productname: 'Bag',

        productcategoty: 'Travel',

        productdescription: 'Protect your laptop and secure your valuable stuffs',

        productprice: 22
        },
        {
          productid : 2,

        productname: 'Pen',

        productcategoty: 'Study',

        productdescription: 'Pen - for students',

        productprice: 25
        },
        {
          productid : 3,

        productname: 'Crossbodybag',

        productcategoty: 'Travel',

        productdescription: 'Protect your small stuffs',

        productprice: 10
        },
        {
          productid : 4,

        productname: 'Book',

        productcategoty: 'Study',

        productdescription: 'Book for students',

        productprice: 30
        }
    ];


  constructor() { }

  getAllProucts(): Observable<Product[]> {

    return of(this.products);
  }
}
