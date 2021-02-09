import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  transform(value: any, input:string): any {
    if (input) {
      return value.filter((val:string) => val.indexOf(input) >= 0);
    } else {
      return value;
    }
  }

}
