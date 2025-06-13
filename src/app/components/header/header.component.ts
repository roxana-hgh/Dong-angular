import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

import { Drawer } from 'primeng/drawer';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  constructor(private translationService: TranslationService, private themeService: ThemeService) {}
  showFiller = false;
  visible: boolean = false;
  darkMode: boolean = false;
  ThemeModeOptions: any[] = [{ label: 'Dark', value: true },{ label: 'Light', value: false }];
  langOptions: any[] = [
    { label: 'En', value: 'en' },
    { label: 'فا', value: 'fa' },
    
  ]
  Langvalue: string = 'en';
  @ViewChild('drawerRef') drawerRef!: Drawer;

  
ngOnInit(): void {
  this.translationService.getLanguage().subscribe((lang) => {
    this.Langvalue = lang;
  });

  this.themeService.getTheme().subscribe((theme) => {
    this.darkMode = theme == 'dark' ? true : false;
  });


}
  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

toggleDarkMode() {
  let selctedTheme = this.darkMode ? 'dark' : 'light'
  this.themeService.setTheme(selctedTheme)
}

  set_lang() {
    const lang = this.Langvalue;
    this.translationService.setLanguage(lang);
  }
}
