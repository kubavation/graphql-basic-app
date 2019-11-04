import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'embed'
})
export class EmbedYtPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace('https://youtu.be', 'https://www.youtube.com/embed');
  }

}
