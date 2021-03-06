// routerConfig.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
// export default appRoutes;