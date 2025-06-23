import { Component, ViewChild } from '@angular/core';
import { SHARED_IMPORTS } from '../../../shared/shared-imports';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { SelectButton } from 'primeng/selectbutton';
import { TranslationService } from '../../../service/translation.service';
import { ThemeService } from '../../../service/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [SHARED_IMPORTS, FormsModule, DrawerModule, SelectButton ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private translationService: TranslationService,
    private themeService: ThemeService
  ) {}
  showFiller = false;
  visible: boolean = false;
  darkMode: boolean = false;
  ThemeModeOptions: any[] = [
    { label: 'Dark', value: true },
    { label: 'Light', value: false },
  ];
  langOptions: any[] = [
    { label: 'En', value: 'en' },
    { label: 'فا', value: 'fa' },
  ];
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
    let selctedTheme = this.darkMode ? 'dark' : 'light';
    this.themeService.setTheme(selctedTheme);
  }

  set_lang() {
    const lang = this.Langvalue;
    this.translationService.setLanguage(lang);
  }
}
