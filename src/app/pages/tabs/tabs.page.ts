import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTabButton,
    IonTabBar,
    IonLabel,
    RouterLink,
    RouterLinkActive,
  ],
})
export class TabsPage implements OnInit, OnDestroy {
  showTabs: boolean = true;
  private unsubscribe$ = new Subject<void>();
  readonly list = signal<any[]>([
    {
      route: '/home',
      label: 'All news',
      activeIcon: 'home',
      inactiveIcon: 'home-outline',
    },
    {
      route: '/transaction',
      label: 'Transaction',
      activeIcon: 'receipt',
      inactiveIcon: 'receipt-outline',
    },
    {
      route: '/account',
      label: 'Account',
      activeIcon: 'person',
      inactiveIcon: 'person-outline',
    },
  ]);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const segments = event.url.split('/');
        const lastSegment = segments.pop();
        this.showTabs = isNaN(Number(lastSegment));
      }
    });
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
