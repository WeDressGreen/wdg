import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Material section
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './front/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FooterComponent,

    // Material
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialExampleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
