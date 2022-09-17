import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'underscoreToSpace'
})
export class UnderscoreToSpacePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.replace(/_/g, ' ');
  }

}
