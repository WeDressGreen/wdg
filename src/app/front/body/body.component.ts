import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Set the default language
    this.translate.use('en'); // Use a specific language
  }


}
