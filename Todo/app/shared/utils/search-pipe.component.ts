import {Pipe, PipeTransform} from '@angular/core';
import {Projecto} from "../../projectos/shared/projecto.model";


// # Filter Array of Objects
@Pipe({
    name: 'filtro',
    pure: false
})
export class FilterArrayPipe implements PipeTransform {
    transform(items: any[], field: any, value: any): any[] {


        if (value !== '' && items) {
            return items.filter(item => item[field].toLocaleLowerCase().match(new RegExp('' + value)),
                item => item[field].toLocaleUpperCase().match(new RegExp('' + value))
            );
        }
        else {
            console.log(items);
            return items;
        }
    }
}