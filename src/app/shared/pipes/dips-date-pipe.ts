import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dipsDate'
})
export class DipsDatePipe implements PipeTransform {
  transform(date: Date, format: String) {

    if (typeof date === 'date' || date instanceof Date) {
      return moment(date).format('DD.MM.YYYY HH:mm.ss');
    } else {
      return 'Not a date';
    }
  }
}
