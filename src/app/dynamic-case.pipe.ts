import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicCase'
})
export class DynamicCasePipe implements PipeTransform {

  transform(value: string, format: string): unknown {
    switch (format) {
      case 'kebab':
        return value.toLowerCase().replace(/ /g, '-');
      case 'snake':
        return value.toLowerCase().replace(/ /g, '_');
      case 'camel':
        return value.split(' ').map((word, index) => index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
      case 'pascal':
        return value.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
      default:
        return value;
    }
  }

}
