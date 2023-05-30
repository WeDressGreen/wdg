import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BodyComponent } from './body/body.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResellComponent } from './resell/resell.component';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'resell',
    component: ResellComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
