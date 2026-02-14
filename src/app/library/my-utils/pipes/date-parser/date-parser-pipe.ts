import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'dateParser',
})
export class DateParserPipe implements PipeTransform {
  private _translateService = inject(TranslateService);

  transform(value: Date): string {
    const locale: string = this._translateService.getCurrentLang();
    return value.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
