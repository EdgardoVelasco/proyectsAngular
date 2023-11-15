import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mipipe'
})
export class MipipePipe implements PipeTransform {

  transform(value?:Date): string {
    let hora=value?.getHours()??0; //0-23
    let minutos=value?.getMinutes()??0;
    let segundos=value?.getSeconds()??0;
    let amPM=(hora>=12)?"pm":"am";

    return `La hora es ${(hora%12)||12} : ${minutos} : ${segundos} ${amPM}` ;
  }

}
