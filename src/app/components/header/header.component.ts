import { Component, Input, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

import { Drawer } from 'primeng/drawer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent {

  constructor(private translationService: TranslationService){}
  showFiller = false;
   @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e: Event): void {
        this.drawerRef.close(e);
    }

    toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
}

    visible: boolean = false;

    set_lang(lang: string) {
  this.translationService.setLanguage(lang);
}

}
