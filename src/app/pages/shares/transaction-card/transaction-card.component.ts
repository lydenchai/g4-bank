import { Component, Input, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
} from '@ionic/angular/standalone';
import { Transaction } from 'src/app/types/transaction';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss'],
  imports: [IonLabel, IonAvatar, IonItem],
})
export class TransactionCardComponent implements OnInit {
  @Input() data!: Transaction;
  @Input() lastIndex?: any;

  constructor() {}

  ngOnInit() {}
}
