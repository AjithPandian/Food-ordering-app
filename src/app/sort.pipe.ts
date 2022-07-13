import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(list: any[], args: any[]): unknown {
    const sortField = args[0];
    const sortDirection = args[1];
    let multiplier;

    sortDirection === 'desc' ? (multiplier = -1) : (multiplier = 1);

    let sortedArr = list.sort((a, b) => {
      if (a[sortField] > b[sortField]) {
        return 1 * multiplier;
      }
      if (a[sortField] < b[sortField]) {
        return -1 * multiplier;
      }
      return 0;
    });
    return sortedArr;
  }
}
