import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultpipe'
})
export class DefaultpipePipe implements PipeTransform {

  transform(value: any): any {
    if(value == null || value == undefined) {
      return 'default';
    } else {
      return value;
    }
  }

}
