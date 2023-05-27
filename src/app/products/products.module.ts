
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Material section
import {MaterialExampleModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,

    // Material
    MatSlideToggleModule,
    MaterialExampleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ProductListComponent,ProductPageComponent]
})
export class ProductsModule { }
