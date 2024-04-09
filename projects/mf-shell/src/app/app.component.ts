import { Component, OnDestroy } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonsLibService } from '@commons-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  title = 'mf-shell';
  countCart: number = 0;
  suscribe$!: Subscription;

  constructor(
    public commonsLibService: CommonsLibService,
    private router: Router
  ) {
    this.suscribe$ = this.commonsLibService.channelPayment$.subscribe({
      next: response => {
        this.countCart = response;
      },
    });
  }

  ngOnDestroy(): void {
    if (this.suscribe$) {
      this.suscribe$.unsubscribe();
    }
  }

  clicCart() {
    this.router.navigate(['/payment']);
  }

  clicHome() {
    this.router.navigate(['/']);
  }
}
