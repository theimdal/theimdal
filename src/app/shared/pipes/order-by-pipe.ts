import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array, orderBy, asc = true) {

    if (!orderBy || orderBy.trim() == '') {
      return array;
    }

    let temp = [];

    // ascending
    if (asc) {
      temp = array.sort((item1: any, item2: any) => {
        let a = this.getValue(item1, orderBy);
        let b = this.getValue(item2, orderBy);
        return this.orderByComparator(a, b);
      });
    } else {
      // not asc
      temp = array.sort((item1: any, item2: any) => {
        let a = this.getValue(item1, orderBy);
        let b = this.getValue(item2, orderBy);
        return this.orderByComparator(b, a);
      });
    }

    return temp;

  }

  getValue(array: any, key: string): any {
    let levels = key.split('.');
    let tmpObj = array;
    for(var i = 0; i < levels.length; i++) {
      if(tmpObj[levels[i]] == null) {
        return undefined;
      }
      tmpObj = tmpObj[levels[i]];
    }
    return tmpObj;
  }

  orderByComparator(a: any, b: any): number {

    if(a instanceof Date && b instanceof Date) {
      if(a.getTime() < b.getTime()) { return -1; }
      if(a.getTime() > b.getTime()) { return 1; }

    } else if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      // Isn't a number so lowercase the string to properly compare
      if(a.toLowerCase() < b.toLowerCase()) { return -1; }
      if(a.toLowerCase() > b.toLowerCase()) { return 1; }
    } else {
      // Parse strings as numbers to compare properly
      if(parseFloat(a) < parseFloat(b)) { return -1; }
      if(parseFloat(a) > parseFloat(b)) {return 1; }
    }

    return 0; // equal each other
  }
}
