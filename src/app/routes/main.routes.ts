import { Route } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AnalyticsComponent } from '../pages/analytics/analytics.component';

export const mainRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    title: 'Analytics',
  },
];
