import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BodyComponent } from './body/body.component';
import { ResellComponent } from './resell/resell.component';

// @ts-ignore
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
  }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
