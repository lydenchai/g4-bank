import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonIcon,
  IonButtons,
  IonLabel,
  IonCard,
  IonItem,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.page.html',
  styleUrls: ['./account-list.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonCard,
    IonLabel,
    IonButtons,
    IonIcon,
    IonContent,
    RouterLink,
  ],
})
export class AccountListPage implements OnInit {
  accounts: any[] = [
    {
      name: 'Payroll',
      number: '019236437',
      balance: 123456789,
      currency: 'KHR',
      type: 'payroll',
      color: '#004da5',
    },
    {
      name: 'Visa',
      number: '002512231',
      balance: 617283,
      currency: 'USD',
      type: 'visa',
      color: '#11234f',
    },
    {
      name: 'Saving',
      number: '18923725',
      balance: 617283,
      currency: 'USD',
      type: 'saving',
      color: '#5b00a5',
    },
  ];

  totalUSD: number = 0;
  totalKHR: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.calculateBalances();
  }

  calculateBalances(): void {
    this.totalUSD = this.accounts
      .filter((account) => account.currency === 'USD')
      .reduce((sum, account) => sum + account.balance, 0);

    this.totalKHR = this.accounts
      .filter((account) => account.currency === 'KHR')
      .reduce((sum, account) => sum + account.balance, 0);
  }

  formatNumber(value: number): string {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }
}
