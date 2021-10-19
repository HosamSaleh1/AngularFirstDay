import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: number, unit:string){
    if(value && !NaN){
      if(unit === 'C'){
        let temperature = (value - 32) / 1.8
        return temperature
      }
      else if(unit === 'F'){
        let temperature = (value * 1.8) + 32
        return temperature
      }
    }
    return
  }

}
