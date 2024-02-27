import { Component, OnInit} from '@angular/core';
import { Service } from './service';


@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})


export class AppComponent implements OnInit{
    constructor(private service: Service) {

    }
    public status=""
    public value=""
    temp: any[] =[]
    
       ngOnInit() {
        this.service.getData().subscribe(
            (data: any) => {
                this.temp = data
            } 
        )
    }
}