import { Component } from '@angular/core';
import { ServiceComponent } from './app.service';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    constructor(private service:ServiceComponent){}

    empAll:any[]=[];
    
    ngOnInit(){
       
       //to print using html
       this.service.getAllBooks().subscribe((data:any)=>this.empAll=data);
    }

    deleteBook(i){
        this.empAll.splice(i,1);
        console.log("my print");
    }
}