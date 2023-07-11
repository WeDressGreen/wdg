
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
import { LanguageSwitcherComponent } from '../shared/language-switcher.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import {TranslateLoader, TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    BodyComponent,
    AccountComponent,

  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
