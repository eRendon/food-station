import { Routes } from '@angular/router'
import { adminGuard } from '../guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/food-station/food-station-routing.module').then(m => m.FoodStationRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [adminGuard()]
  },
  {
    path: 'login',
    loadChildren: () => import('../componentes/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '*',
    redirectTo: ''
  }
];

export default routes
