import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>{{ 'TITLE' | translate }}</h2>
      <label>
        {{ 'SELECT' | translate }}
        <select #langSelect (change)="onToggleLanguage(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
      <a (click) = "selectMenu(myHome)"> {{ 'home' | translate}}</a>
    </div>
  `,
})
export class AppComponent {

  direction = '';
  myHome = 'home';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'ar']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }

  onToggleLanguage(lang) {

    this.direction = lang === 'ar' ? "rtl" : 'ltr';

    document.body.dir = this.direction;

    this.translate.use(lang);
  }

  selectMenu(myHome) {
    console.log(myHome)
  }


}
