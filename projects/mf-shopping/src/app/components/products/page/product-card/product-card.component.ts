import { Component, Input } from '@angular/core';
import { IProductCard } from '../../../models/product-card.interface';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: IProductCard;

  constructor(private _commonsLibService: CommonsLibService) {}

  clickCard(): void {
    this._commonsLibService.sendData({
      name: this.product!.name,
      price: this.product!.price,
    });
  }
}
