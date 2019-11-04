import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'LaunchDetails'
})
export class LaunchDetailsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
