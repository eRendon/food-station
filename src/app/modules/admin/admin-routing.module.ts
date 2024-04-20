import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component'
import { HomeComponent } from './pages/home/home.component'
import { AddProductComponent } from './pages/add-product/add-product.component'

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
    path: '',
    component: HomeComponent
  },
    {
      path: 'product',
      component: AddProductComponent
    },
    {
      path: 'product/:id',
      component: AddProductComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
