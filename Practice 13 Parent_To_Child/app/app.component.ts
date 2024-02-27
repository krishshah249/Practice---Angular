import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 

    empName:string="capg";
    message:string;
    getDataFromChild(msg){
        this.message=msg;
    }

}