import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'filtering'})

export class Filtering implements PipeTransform{
    transform(array: any[],option: string, input: string) {
        console.log(array)
        console.log(option)
        console.log(input)
        if(input==""){
            return array
        }
        else if(option == "id"){
            return array.filter(e=>e.id.toString().toLowerCase().includes(input.toString().toLowerCase()))
        }else if(option == "year"){
            return array.filter(e=>e.year.toString().toLowerCase().includes(input.toString().toLowerCase()))
        }else if(option == "title"){
            return array.filter(e=>e.title.toString().toLowerCase().includes(input.toString().toLowerCase()))
        }else{
            return array.filter(e=>e.author.toString().toLowerCase().includes(input.toString().toLowerCase()))
        }
    }
} 