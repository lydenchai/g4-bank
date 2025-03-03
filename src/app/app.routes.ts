import { Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/banking/banking.page').then((m) => m.BankingPage),
          },
        ],
      },
      {
        path: 'transaction',
        loadComponent: () =>
          import('./pages/transaction/transaction.page').then(
            (m) => m.TransactionPage
          ),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./pages/account/account.page').then((m) => m.AccountPage),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
