import { Routes } from '@angular/router';

export const routes: Routes = [

  { 
    path: 'main', 
    loadComponent: () => import('./main/main.page').then(m => m.MainPage) 
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  }
];
