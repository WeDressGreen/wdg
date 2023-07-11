import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  template: `
    <button (click)="switchLanguage('en')">English</button>
    <button (click)="switchLanguage('fr')">French</button>
  `
})
export class LanguageSwitcherComponent {
  constructor(private translate: TranslateService) { }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}

