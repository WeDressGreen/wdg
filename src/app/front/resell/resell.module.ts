
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Material section
import {MaterialExampleModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ResellRoutingModule } from './resell-routing.module';
import { ResellMainComponent } from './pages/resell-main/resell-main.component';
import { ResellPageComponent } from './pages/resell-page/resell-page.component';
import { ResellProductComponent } from './pages/resell-product/resell-product.component';


@NgModule({
  imports: [
    CommonModule,
    ResellRoutingModule,


    // Material
    MatSlideToggleModule,
    MaterialExampleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ResellMainComponent,ResellPageComponent,ResellProductComponent]
})
export class ResellModule { }
