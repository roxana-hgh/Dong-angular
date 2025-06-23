import { Pipe, PipeTransform } from '@angular/core';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslationService } from '../service/translation.service';

@Pipe({
    name: 'translate',
    pure: false,
    standalone: true
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private translationService: TranslationService
) {}

  transform(key: string): Observable<string> {
    return combineLatest([
      this.translationService.getTranslations(),
      this.translationService.getLanguage()
    ]).pipe(
      map(([translations, lang]) => this.translationService.translate(key, translations))
    );
  }
}
