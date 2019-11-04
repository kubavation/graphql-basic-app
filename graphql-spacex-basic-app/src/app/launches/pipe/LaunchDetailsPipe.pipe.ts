import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'launchDetails'
})
export class LaunchDetailsPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.substring(0, 100) + '...';
  }

}
