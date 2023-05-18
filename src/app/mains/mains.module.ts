import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MainsRoutingModule } from './mains-routing.module';
import { MainListComponent } from './main-list/main-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MaterialExampleModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    MainsRoutingModule,
    MatSlideToggleModule,
    MaterialExampleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MainListComponent]
})
export class MainsModule { }
