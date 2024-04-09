import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('mfShopping/ProductsModule').then(m => m.ProductsModule),
  },
  {
    path: 'payment',
    loadComponent: () => import('mfPayment/PaymentComponent').then(c => c.PaymentComponent),
  },
];
