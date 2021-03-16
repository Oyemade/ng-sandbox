import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { PipeFormat } from './model';

/*
 * Firstly, we inject the CurrencyPipe and DatePipe into the component, then we
 * check if the value is undefined, if its undefined we return a "-" in other to * avoid empty spaces. Then we cater for the available format types specified in * the model.ts file. If the format is DEFAULT, we check if the value is an ARRAY * or an OBJECT then format accordingly. If the format is CURRENCY, we use the
 * injected CurrencyPipe to transform the value and if the format is DATE, we use * the injected DatePipe to transform the value.
 *
 * N.B: The CurrencyPipe and DatePipe injected into this pipe have to be added to * the providers property of the module.ts file.
 */

@Pipe({
  name: 'formatCell',
})
export class FormatCellPipe implements PipeTransform {
  constructor(
    private currencyPipe: CurrencyPipe,
    private datePipe: DatePipe,
    private percentPipe: PercentPipe
  ) {}

  transform(value: any, format: PipeFormat) {
    // If the value is Undefined
    if (value === undefined) {
      return '-';
    }

    // If the format is DEFAULT
    if (format === 0) {
      if (Array.isArray(value)) {
        if (typeof value[0] !== 'object') {
          return value.join(', ');
        } else {
          return value.map((obj) => {
            return `${obj.firstname} ${obj.lastname}`;
          });
        }
      }
      if (typeof value === 'object') {
        return value.name;
      }
    }

    // If the format is CURRENCY
    if (format === 1) {
      return this.currencyPipe.transform(value, '₦ ', 'code');
    }

    // If the format is DATE
    if (format === 2) {
      return this.datePipe.transform(value, 'medium');
    }

    // If the format is PERCENTAGE
    if (format === 3) {
      return this.percentPipe.transform(value);
    }

    return value;
  }
}
