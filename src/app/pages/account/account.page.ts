import { Component, OnInit } from '@angular/core';
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
  ],
})
export class AccountPage implements OnInit {
  menuList: any[] = [
    {
      icon: 'person-outline',
      label: 'My Profile',
    },
    {
      icon: 'lock-closed-outline',
      label: 'Security',
    },
    {
      icon: 'globe',
      label: 'Language',
    },
    {
      icon: 'call-outline',
      label: 'Contact Us',
    },
    {
      icon: 'reader-outline',
      label: 'Term & Condition',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
