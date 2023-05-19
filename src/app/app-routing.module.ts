import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

// @ts-ignore
const routes: Routes = [
    {
        path:'products',
        loadChildren:()=>import('./products/products.module').then(m => m.ProductsModule)
    },
  {
        path:'',
        component: BodyComponent,
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
