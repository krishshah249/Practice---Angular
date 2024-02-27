import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {AddEmployeeComponent} from "./app.addEmployee";


@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    [x: string]: any;
    constructor(private http:HttpClient){}

    empall:any[]=[{empId:1001,empName:"abc",empSalary:10000,empDepartment:"BC"},
    {empId:1002,empName:"bcd",empSalary:11000,empDepartment:"AC"},
    {empId:1003,empName:"cde",empSalary:12000,empDepartment:"ABC"}
    ];
    getAllEmployee(){
       // this.empall=this.http.get("assets/Employee.json");
      return this.empall;  
    }

    addEmployee(data:any){
        this.empall.push(data);
        return true;
    }

    /*
    searchEmployee(data:any){
        if(this.empall.empId.value==searchID)
        return this.empall
    }
    */

}