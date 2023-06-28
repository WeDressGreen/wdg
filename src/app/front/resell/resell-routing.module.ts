import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResellMainComponent } from './pages/resell-main/resell-main.component';
import { ResellPageComponent } from './pages/resell-page/resell-page.component';
import { ResellProductComponent } from './pages/resell-product/resell-product.component';
const routes: Routes = [
  {
    path:'',
    component: ResellMainComponent
  },
  {
    path:'sell',
    component: ResellPageComponent
  },
  {
    path:'add',
    component: ResellProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResellRoutingModule { }
