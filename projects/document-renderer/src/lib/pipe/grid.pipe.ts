import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grid'
})
export class GridPipe implements PipeTransform {

  transform(value: number[]): string {
    return 'grid-template-columns:' + value.join('fr ');
  }
}
