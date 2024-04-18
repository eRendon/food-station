import { Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../componentes/login/login.module').then(m => m.LoginModule)
  }
];

export default routes
