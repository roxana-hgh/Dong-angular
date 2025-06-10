import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  constructor(private translationService: TranslationService) {}
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
}
  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

toggleDarkMode() {
  const element = document.querySelector('html');
  
  if (this.darkMode) {
    element?.classList.add('app-dark', 'dark');
  } else {
    element?.classList.remove('app-dark', 'dark');
  }
}

  set_lang() {
    const lang = this.Langvalue;
    this.translationService.setLanguage(lang);
  }
}
