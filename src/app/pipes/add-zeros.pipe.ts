import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addZeros'
})
export class AddZerosPipe implements PipeTransform {

  transform(numero:number){
    return ("000" + numero.toString()).slice(-3);
  }

}
