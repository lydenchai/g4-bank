import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankingPage } from './banking.page';

describe('BankingPage', () => {
  let component: BankingPage;
  let fixture: ComponentFixture<BankingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
