import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthComponent } from './layouts/auth/auth.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./routes/public.routes').then(m => m.publicRoutes),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./routes/main.routes').then(m => m.mainRoutes),
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'auth/login' }, // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
