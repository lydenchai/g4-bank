import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent],
})
export class LoginPage {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }
}
