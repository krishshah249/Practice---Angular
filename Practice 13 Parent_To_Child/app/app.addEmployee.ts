import {Component,Input, EventEmitter, Output} from '@angular/core';

@Component({

    selector: 'addEmp',
    templateUrl:'addEmployee.html'

})

export class AddEmployeeComponent{
    @Input()
    inchild:string;

    @Output()
    notify:EventEmitter<string>= new EventEmitter<string>();
    
    addempdata:string="add employee data";

    callingParent():any{

            this.notify.emit("from child...data send")
    }

    message:string;
    getData(msg){

        this.message=msg;
    }
}