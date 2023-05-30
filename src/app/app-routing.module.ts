import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './front/body/body.component';
import { NotFoundComponent } from './front/not-found/not-found.component';




// @ts-ignore
const routes: Routes = [
  {
    path: 'front',
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule)
  },
  {
    path: '',
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule)
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'front',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
