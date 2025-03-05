import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { IonContent } from '@ionic/angular/standalone';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent],
})
export class LoginPage implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.router.url === '/login' || this.router.url === '') {
        this.router.navigate(['/home']);
      }
    }, 1000);
  }
}
