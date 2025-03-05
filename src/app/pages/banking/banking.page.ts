import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  IonContent,
  IonAvatar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { Card } from 'src/app/types/card';
import { Transaction } from 'src/app/types/transaction';
import { Menu } from 'src/app/types/menu';
import { TransactionCardComponent } from '../shares/transaction-card/transaction-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.page.html',
  styleUrls: ['./banking.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonList,
    IonCardContent,
    IonCard,
    IonIcon,
    IonAvatar,
    IonContent,
    TransactionCardComponent,
    RouterLink,
  ],
})
export class BankingPage implements OnInit {
  cards: Card[] = [
    {
      type: 'payroll',
      number: '**** **** **** 1234',
      holder: 'Zhao Lusi',
      expiryDate: '12/30',
    },
    {
      type: 'visa',
      number: '**** **** **** 1234',
      holder: 'Zhao Lusi',
      expiryDate: '12/25',
    },
    {
      type: 'saving',
      number: '**** **** **** 1234',
      holder: 'Zhao Lusi',
      expiryDate: '12/26',
    },
  ];

  menuItems: Menu[] = [
    { label: 'Accounts', icon: 'person-outline', route: '../account-list' },
    {
      label: 'Fund Transfer',
      icon: 'swap-horizontal-outline',
      route: '../fund-transfer',
    },
    {
      label: 'Statement',
      icon: 'document-text-outline',
      route: '../statement',
    },
    { label: 'Loans', icon: 'cash-outline', route: '../loan' },
    { label: 'Deposit', icon: 'wallet-outline', route: '../deposit' },
    { label: 'More', icon: 'ellipsis-horizontal-outline', route: '' },
  ];

  transactions: Transaction[] = [
    {
      profile:
        'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png',
      name: 'Spotify Premium(Duo)',
      amount: -0.99,
      date: '02 March 2025',
    },
    {
      profile: 'https://www.vectorlogo.zone/logos/amazon/amazon-tile.svg',
      name: 'Amazon',
      amount: -10,
      date: '02 March 2025',
    },
    {
      profile:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/640px-Facebook_logo_%28square%29.png',
      name: 'Facebook',
      amount: 1200,
      date: '02 March 2025',
    },
    {
      profile: '',
      name: 'TikTok Payments',
      amount: -50,
      date: '02 March 2025',
    },
  ];

  newsAndPromotions: any[] = [
    {
      image:
        'https://www.toyota.com.kh/content/dam/cambodia/discover-toyota/news-and-events/christmas-promotion/image.jpg',
    },
    {
      image:
        'https://www.toyota.com.kh/content/dam/cambodia/discover-toyota/news-and-events/promotion/special-promotion/1.jpg',
    },
    {
      image:
        'https://www.toyota.com.kh/content/dam/cambodia/discover-toyota/news-and-events/promotion/ttfc/Artwork_Web_T-Cam.jpg',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7bg0Mg3R3B8JV3i9bMxoBvrPDYXcDYBdLp0Mo3QPMA1NS78MLopaTPnGa1y-QztiP0s&usqp=CAU',
    },
    {
      image:
        'https://d1yc6vwxvprgjf.cloudfront.net/kh/gallery_images/large/1450074930/2978948?1450074930',
    },
  ];

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('scrollTrack') scrollTrack!: ElementRef;

  scrollInterval: any;
  scrollSpeed = 5;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    this.scrollInterval = setInterval(() => {
      this.scrollContainer.nativeElement.scrollLeft += this.scrollSpeed;

      // If at end, reset to start (loop effect)
      if (
        this.scrollContainer.nativeElement.scrollLeft >=
        this.scrollTrack.nativeElement.scrollWidth / 2
      ) {
        this.scrollContainer.nativeElement.scrollLeft = 0;
      }
    }, 1);
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval);
  }
}
