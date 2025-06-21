import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private language = new BehaviorSubject<string>('en');
  private translations = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      this.setLanguage(savedLanguage);
    } else {
      this.setLanguage('en');
    }
  }

  setLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.language.next(lang);
    this.loadTranslations(lang).subscribe();
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === 'fa' ? 'rtl' : 'ltr');
   
  }

  getLanguage(): Observable<string> {
    return this.language.asObservable();
  }

  private loadTranslations(lang: string): Observable<any> {
    return this.http.get(`assets/i18n/${lang}.json`).pipe(
      tap((translations) => {
        this.translations.next(translations);
      })
    );
  }

  getTranslations(): Observable<any> {
    return this.translations.asObservable();
  }

  translate(key: string, translations: any): string {
    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
      result = result[k];
      if (!result) {
        return key; // return key if translation is not found
      }
    }
    return result;
  }

  /**
   * Get translation for a key using the current loaded translations (synchronous)
   * @param key - The translation key (supports dot notation like 'user.name')
   * @returns The translated string or the key if translation is not found
   */
  getTranslation(key: string): string {
    const currentTranslations = this.translations.getValue();
    if (!currentTranslations || Object.keys(currentTranslations).length === 0) {
      return key; // Return key if translations not loaded yet
    }
    return this.translate(key, currentTranslations);
  }

  /**
   * Get translation as Observable (same as pipe logic)
   * @param key - The translation key
   * @returns Observable<string> with the translated value
   */
  getTranslation$(key: string): Observable<string> {
    return combineLatest([
      this.translations.asObservable(),
      this.language.asObservable()
    ]).pipe(
      map(([translations, lang]) => this.translate(key, translations))
    );
  }

  /**
   * Get current translation value synchronously
   * @param key - The translation key
   * @returns The translated string
   */
  get(key: string): string {
    return this.getTranslation(key);
  }
}