import {Component, Input} from '@angular/core';
import { AddEmployeeComponent } from './app.addEmployee';

@Component({

        selector: 'showEmp',
        templateUrl: 'app.showEmp.html'
})

export class ShowEmployeeComponent{

   empId:number;
   empName:string;
   empSalary:number;

    @Input()
    empObj:ShowEmployeeComponent;

    @Input()
    check:boolean;

    empall:any[]=[
        {empId:100,empName:"krish",empSalary:5000.00},
        {empId:101,empName:"shah",empSalary:6000.00},
        {empId:102,empName:"s",empSalary:9500.00}
    ];
    
    addemp(){
       //this.empall.push(this.empObj); 
    this.empall.push({empId:this.empObj.empId,empName:this.empObj.empName,empSalary:this.empObj.empSalary});
    console.log(this.empall);
    this.check=false;
    }


}