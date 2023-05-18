import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// @ts-ignore
const routes: Routes = [
    {
        path:'products',
        loadChildren:()=>import('./products/products.module').then(m => m.ProductsModule)
    },
  {
        path:'',
        loadChildren:()=>import('./mains/mains.module').then(p => p.MainsModule)
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
