import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './page/product-card/product-card.component';
import { ProductComponent } from './page/product/product.component';

@NgModule({
  declarations: [ProductCardComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductCardComponent, ProductComponent],
})
export class ProductsModule {}
