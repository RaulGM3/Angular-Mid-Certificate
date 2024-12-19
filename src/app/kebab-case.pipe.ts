import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    args.forEach(arg => {
      console.log(arg);
    })
    return value.toLowerCase().replace(/ /g, '-');

  }
}
