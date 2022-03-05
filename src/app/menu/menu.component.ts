import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  selectedLanguage = 'es';

    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang(this.selectedLanguage);
        this.translateService.use(this.selectedLanguage);
    }

    toogleLanguage(lang: string) {
        this.translateService.use(lang);
    }
}

