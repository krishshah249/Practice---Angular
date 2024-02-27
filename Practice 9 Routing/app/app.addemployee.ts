import { Component } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";
import {Router} from "@angular/router";

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{

    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    constructor(private myservice:EmployeeService,private router:Router){}
    addEmployee(){
       if( this.myservice.addEmpDetails({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}))
       {
           this.router.navigate(['show']);
       }

    }
}