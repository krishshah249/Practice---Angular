import { Component } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";
import { Router } from "@angular/router";


@Component({
    selector:'add-emp',
    templateUrl:'addEmployee.html'
})

export class AddEmployeeComponent{

    constructor(private service:EmployeeService,private router:Router){}
    myallData:any;
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    empall:any[]=[];
    addData(){

        //this.empall.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment})
       // console.log(this.empall);
        //alert("Employee Added with Employee ID="+this.empId);
        
        this.myallData={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment};
        if(this.service.addEmployee(this.myallData)){
         this.router.navigate(['show']);   
        }
    }
    
}