import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { ProductsComponent } from './views/products/products/products.component';
import { InvestmentsComponent } from './views/investments/investments/investments.component';
import { HolydaysComponent } from './views/holydays/holydays/holydays.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'investments',
        component: InvestmentsComponent,
      },
      {
        path: 'holydays',
        component: HolydaysComponent,
      },
    ],
  },
];
