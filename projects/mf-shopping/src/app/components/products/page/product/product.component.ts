import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { IProductCard } from '../../../models/product-card.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  products: IProductCard[] = [];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this._productsService.getAnimes().subscribe(response => {
      this.products = response;
    });
  }
}
