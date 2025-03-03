import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonList,
} from '@ionic/angular/standalone';
import { Transaction } from 'src/app/types/transaction';
import { TransactionCardComponent } from '../shares/transaction-card/transaction-card.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
  standalone: true,
  imports: [
    IonList,
    IonCardContent,
    IonCard,
    IonContent,
    IonHeader,
    IonToolbar,
    TransactionCardComponent,
  ],
})
export class TransactionPage implements OnInit {
  todayTransactions: Transaction[] = [
    {
      profile:
        'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png',
      name: 'Spotify Premium(Duo)',
      amount: -0.99,
      date: '03 March 2025',
    },
    {
      profile: 'https://www.vectorlogo.zone/logos/amazon/amazon-tile.svg',
      name: 'Amazon',
      amount: -10,
      date: '03 March 2025',
    },
    {
      profile:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png',
      name: 'Facebook',
      amount: 1200,
      date: '03 March 2025',
    },
    {
      profile:
        'https://i.pinimg.com/736x/53/6b/f6/536bf6ce27c9da001fa7ff45af393693.jpg',
      name: 'TikTok Payments',
      amount: -50,
      date: '03 March 2025',
    },
  ];

  yesterdayTransactions: Transaction[] = [
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'Pu Thin lork pich',
      amount: -4500,
      date: '02 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'E bay chha',
      amount: -1.75,
      date: '02 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'Sister',
      amount: 100,
      date: '02 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'Tub Coffee',
      amount: -2.44,
      date: '02 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'Tub Coffee',
      amount: -2.44,
      date: '02 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'Tub Coffee',
      amount: -2.44,
      date: '02 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'Man Vannda',
      amount: 25,
      date: '02 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'Ngoun Chandevit',
      amount: 20,
      date: '02 March 2025',
    },
  ];

  fistOfMatchTransactions: Transaction[] = [
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'E bay chha',
      amount: -3.25,
      date: '02 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'brother',
      amount: 200,
      date: '03 March 2025',
    },
    {
      profile: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      name: 'Tub Coffee',
      amount: -2.44,
      date: '03 March 2025',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
