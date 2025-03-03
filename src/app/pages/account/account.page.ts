import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonCard,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonToolbar,
    IonCard,
    RouterLink,
  ],
})
export class AccountPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
