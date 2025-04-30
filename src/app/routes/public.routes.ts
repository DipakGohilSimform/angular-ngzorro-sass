import { Route } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';

export const publicRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    title: 'Forgot Password',
  },
];
