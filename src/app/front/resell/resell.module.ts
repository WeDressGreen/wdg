
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Material section
import {MaterialExampleModule} from '../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ResellRoutingModule } from './resell-routing.module';
import { ResellMainComponent } from './resell-main/resell-main.component';


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
  declarations: [ResellMainComponent]
})
export class ResellModule { }
