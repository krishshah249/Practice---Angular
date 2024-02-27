import {Component, ɵConsole, Input, Output, EventEmitter} from '@angular/core';
import {ShowEmployeeComponent} from './app.showEmployee';
@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})
export class AddEmployeeComponent{
    
    empId:number;
    empName:string;
    empSalary:number;
    check:boolean=false;
    //@Output()
    //notify: EventEmitter<ShowEmployeeComponent> = new EventEmitter<ShowEmployeeComponent>();
    empObj:ShowEmployeeComponent;
   
    addEmployee(){
    this.empObj=new ShowEmployeeComponent();
    this.empObj.empId=this.empId;
    this.empObj.empName=this.empName;
    this.empObj.empSalary=this.empSalary;
    this.check=true;
    //this.notify.emit(this.empObj);
    }

    reset():any{
        this.check = false;
    }
}