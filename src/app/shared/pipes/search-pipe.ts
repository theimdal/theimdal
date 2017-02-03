import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(array, searchTerm) {
    if (!searchTerm) {
      return array;
    } else if (array) {
      return array.filter(item => {
        for (let key in item) {
          if (((typeof item[key] === 'string' || item[key] instanceof String) && key !== 'id') &&
            (item[key].toLowerCase().indexOf(searchTerm) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}
