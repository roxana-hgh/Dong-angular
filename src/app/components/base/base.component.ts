import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrl: './base.component.scss',
    standalone: false
})
export class BaseComponent {
constructor(private translationService: TranslationService) {}
set_lang(lang: string) {
  this.translationService.setLanguage(lang);
}
}
