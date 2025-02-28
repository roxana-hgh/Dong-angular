import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translationService: TranslationService){}

  set_lang(lang: string) {
    this.translationService.setLanguage(lang);
  }
}
