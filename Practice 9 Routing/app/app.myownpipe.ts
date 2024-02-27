import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'checkmyown'
})


export class MyPipe implements PipeTransform{
    transform(data: any, option: any[]) {
       return data;
    }
    
}