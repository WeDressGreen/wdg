
import { Component, NgModule, ViewChild } from '@angular/core';



// Material section
import {MaterialExampleModule} from '../front../../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FrontRoutingModule } from './front-routing.module';



import { BodyComponent } from './body/body.component';
import { AccountComponent } from './account/account.component';
import { MatTabGroup } from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    BodyComponent,
    AccountComponent,


  ],
  imports: [
    CommonModule,
    FrontRoutingModule,

    // Material
    MatSlideToggleModule,
    MaterialExampleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FrontModule {

}
