import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:"checkmuown"})

export class MyPipe implements PipeTransform{

    transform(data:any,option:any[]){
        return data;
    }
}