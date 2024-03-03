import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorText',
})
export class ColorTextPipe implements PipeTransform {
  transform(value: string): string {
    return `${value}(${this.getColor(value)})`;
  }

  getColor(value: string): string {
    return /^[0-9]+$/.test(value) ? 'blue' : 'green';
  }
}
