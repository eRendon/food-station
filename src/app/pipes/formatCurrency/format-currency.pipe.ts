import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    });
    return formatter.format(value);
  }

}
