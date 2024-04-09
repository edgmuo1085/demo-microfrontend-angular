import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaymentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mf-payment';
}
