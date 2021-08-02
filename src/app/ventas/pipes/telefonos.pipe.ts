import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "telefono",
})
export class TelefonosPipe implements PipeTransform {
  transform(rawNum:any) {
    rawNum = 
    "+52"+
     rawNum;

    const countryCodeStr = rawNum.slice(0,3);
    const areaCodeStr = rawNum.slice(3,5);
    const midSectionStr = rawNum.slice(5,7);
    const lastSectionStr = rawNum.slice(7,9);
    const ultima  = rawNum.slice(9,13);

    return `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}${lastSectionStr} ${ultima}`;
  }
}
